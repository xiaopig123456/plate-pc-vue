import axios from "axios"

export default {
  /**
   * 示例
   * @returns {Promise<AxiosResponse<T>>}
   */
  demo(){
    return axios.get(`/api/demo.html`)
  },
}