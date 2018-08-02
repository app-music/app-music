import axios from 'axios'
import {qqPrefix,mkPrefix} from "./api.config";

export default {
    /**
     * 获取搜索关键字
     * @returns {Promise}
     */
    getSearchKey() {
        return new Promise((resolve, reject) => {
            axios.get(`${qqPrefix}/splcloud/fcgi-bin/gethotkey.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&uin=0&needNewCode=1&platform=h5`).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                throw new Error(error)
            })
        })
    },
    searchMusicByKeyWord(keyWord){
        return new Promise((resolve, reject) => {
         // http://ustbhuangyi.com/music/api/search?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&w=11&p=1&perpage=20&n=20&catZhida=1&zhidaqu=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&remoteplace=txt.mqq.all&uin=0&needNewCode=1&platform=h5
            axios.get(`${mkPrefix}/music/api/search?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&w=${keyWord}&p=1&perpage=20&n=20&catZhida=1&zhidaqu=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&remoteplace=txt.mqq.all&uin=0&needNewCode=1&platform=h5`).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                throw new Error(error)
            })
        })
    }
}
