
import axios from 'axios';

export default {
  /**
   * 获取歌手列表
   * @returns {Promise}
   */
  getSingerList(){
    return new Promise((resolve, reject) => {
      axios.get(`/api/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq`).
      then(result=>{
        result.data.code === 0 ? resolve(result.data) : reject(result.data);
      },error => { throw new Error(error) })
    })
  }
}
