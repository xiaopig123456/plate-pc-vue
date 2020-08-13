export default {
  /**
   * 数字转整数 如 10000 转为1万
   * 没有加四舍五入 需要加的话可以使用 toFixed(小数位数)  来实现
   * 默认传进来的是整数  小数的话自己处理
   * @param num 需要转化的数
   * @param params 配置
   * @returns {string}
   */
  shortNumber(num,params = {}) {
    if(num === 0) return 0;
    params = Object.assign({},{
      len:6,
      point:4,
      en:false
    },params);

    if(params.len > 7){
      params.len = 7;
    }else if(params.len < 5){
      params.len = 5;
    }

    let numStr = num.toString();
    if (numStr.length < params.len) {
      return this.numFormat(numStr);
    }
    else if (numStr.length > 8) {
      let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + params.point);
      return this.numFormat(parseFloat(parseInt(num / 100000000) + '.' + decimal)) + (params.en?'m':'亿');
    }
    else if (numStr.length > params.len-1) {
      let decimal = numStr.substring(numStr.length - params.len-2, numStr.length - params.len-2 + params.point);
      return this.numFormat(parseFloat(parseInt(num / 10000) + '.' + decimal)) + (params.en?'w':'万');
    }
  },

  /**
   * 数字千分位分隔
   * @param num
   * @returns {string}
   */
  numFormat(num){
    return num.toString().replace(/\d+/, function (n) {
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ",";
      });
    });
  }
}