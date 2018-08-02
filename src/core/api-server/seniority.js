import axios from 'axios'
import {qqPrefix,mkPrefix} from "./api.config";

export default {
    /**
     * 获取topList排行
     * @returns {Promise}
     */
    getTopList() {
        return new Promise((resolve, reject) => {
            axios.get(`${qqPrefix}/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&uin=0&needNewCode=1&platform=h5`).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                throw new Error(error)
            })
        })
    },
    /**
     * 获取topList歌曲详情
     * @param topId
     * @returns {Promise<any>}
     */
    getTopListDetail(topId){
        return new Promise((resolve, reject) => {
            axios.get(`${qqPrefix}/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&topid=${topId}&needNewCode=1&uin=0&tpl=3&page=detail&type=top&platform=h5`).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                throw new Error(error)
            })
        })
    }
}


