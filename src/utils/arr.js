/**
 * 数据组扩展工具
 */
export default {

  /**
   * 循环
   * @param collection
   * @param callback
   */
  forEach(collection,callback){
    if(!collection || typeof callback !== 'function') return;
    if(collection instanceof Array){
      for (let i=0;i<collection.length;i++){
        if(callback(collection[i],i) === false){
          break;
        }
      }
    }else if(collection instanceof Object ){
      for (let i in collection){
        if(callback(collection[i],i) === false){
          break;
        }
      }
    }
  },

  /**
   * 数组分组
   * @param arrayData
   * @param size
   */
  arrayChunk(arrayData,size){
    if(size<2) return arrayData;
    return Array.apply(null, {
      length: Math.ceil(arrayData.length / size)
    }).map((x, i) => {
      return arrayData.slice(i * size, (i + 1) * size);
    })
  },

  /**
   * 判断是否在数组中
   * @param data
   * @param arrayData
   * @returns {boolean}
   */
  inArray(data,arrayData = []){
    return -1 !== arrayData.findIndex(function (item) {
      return data === item
    });
  },

  /**
   * 检索列
   * @param arrayData
   * @param fieldName
   * @return {Array}
   */
  getObjColumn(arrayData, fieldName) {
    if (!arrayData) arrayData = [];
    let res = [];

    this.forEach(arrayData,function (n, i) {
      if (typeof n[fieldName] !== 'undefined') {
        res.push(n[fieldName]);
      }
    });
    return res;
  },
  /**
   * 重建索引
   * @param arrayData
   * @param fieldName
   */
  resetObjIndex(arrayData, fieldName) {
    if (!arrayData) arrayData = [];
    let res = {};
    this.forEach(arrayData,function (n, i) {
      if (typeof n[fieldName] !== 'undefined') {
        res[n[fieldName]] = n;
      }
    });
    return res;
  },
  /**
   * 按照某个字段进行分组
   * @param arrayData
   * @param fieldName
   */
  getObjGroup(arrayData, fieldName) {
    if (!arrayData) arrayData = [];
    let res = {};
    this.forEach.forEach(arrayData,function (n, i) {
      if (typeof res[n[fieldName]] === 'undefined') res[n[fieldName]] = [];
      res[n[fieldName]].push(n);
    });
    return res;
  },

  /**
   * 获取值
   * @param data
   * @param key
   * @param defaultValue
   * @return {*}
   */
  getObjValue(data, key, defaultValue = null) {
    key += '';
    key = key.split('.');
    let res = defaultValue;
    const keyLength = key.length - 1;
    this.forEach(key, function (n, i) {
      if (!data) data = [];
      if (typeof data[n] === 'undefined') return false;
      if (i === keyLength) {
        res = data[n];
      } else {
        data = data[n];
      }
    });
    return res;
  },

  /**
   * 转成tree
   * @param arrayData
   * @param parentId
   * @returns {[]}
   */
  jsonArrayToTree(arrayData,parentId = 0){
    const self = this;
    let res = [];
    self.forEach(arrayData, function (n) {
      if (n.parent_id === parentId) {
        n.children = self.jsonArrayToTree(arrayData, n.id);
        res.push(n);
      }
    });
    return res;
  },

  /**
   * 获取子级
   * @param arrayData
   * @param parentId
   * @returns {[]}
   */
  jsonArrayGetChildren(arrayData,parentId = 0){
    const self = this;
    let res = [];
    self.forEach(arrayData, function (n) {
      if (n.parent_id === parentId) {
        res.push(n);
        res = res.concat(self.jsonArrayGetChildren(arrayData, n.id));
      }
    });
    return res;
  },

  /**
   * 获取父级
   * @param arrayData
   * @param id
   * @returns {[]}
   */
  jsonArrayGetParent(arrayData,id = 0){
    const self = this;
    let res = [];
    self.forEach(arrayData, function (n) {
      if (n.id === id) {
        res.push(n);
        res = self.jsonArrayGetParent(arrayData, n.parent_id).concat(res);
      }
    });
    return res;
  },
}