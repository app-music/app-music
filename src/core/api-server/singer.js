import axios from 'axios';
import {qqPrefix} from "./api.config";

export default {
    /**
     * 获取歌手列表
     * @returns {Promise}
     */
    getSingerList() {
        return new Promise((resolve, reject) => {
            axios.get(`${qqPrefix}/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq`).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                throw new Error(error)
            })
        })
    },
    /**
     * 获取歌手详情
     * @param singerId
     * @returns {Promise<any>}
     */
    getSingerDetail(singerId){
        return new Promise((resolve, reject) => {
            axios.get(`${qqPrefix}/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid=${singerId}`).then(result=>{
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            },error=>{
                throw new Error(error)
            })
        })
    }
}
