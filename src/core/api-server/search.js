import axios from 'axios'

export default {
  /**
   * 获取搜索关键字
   * @returns {Promise}
   */
  getSearchKey(){
    return new Promise((resolve, reject)=>{
      axios.get(`api/splcloud/fcgi-bin/gethotkey.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&uin=0&needNewCode=1&platform=h5`).
      then(result=>{
        result.data.code === 0 ? resolve(result.data) : reject(result.data);
      },error => { throw new Error(error) })
    })
  }
}
