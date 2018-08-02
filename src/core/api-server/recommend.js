import axios from 'axios';
import {qqPrefix,mkPrefix} from "./api.config";

export default {
    /**
     * 获取推荐列表
     * @returns {Promise}
     */
    getRecommend() {
      console.log(qqPrefix);
      return new Promise((resolve, reject) => {
            axios.get(`${qqPrefix}/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1`).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                throw new Error(error)
            })
        })
    },
    /**
     * 获取歌单信息
     * @returns {Promise}
     */
    getCdInfo() {
        return new Promise((resolve, reject) => {
            axios.get(`${mkPrefix}/music/api/getDiscList`, {params: data}).then(result => {
                // console.log(result);
                result.data.code === 0 ? resolve(result.data) : reject(result.data);
            }, error => {
                throw new Error(error)
            })
        })
    },
    /**
     * 获取歌单详情信息
     * @param id
     * @returns {Promise<any>}
     */
    getCdListDetail(id) {
        return new Promise((resolve, reject) => {
            let data = Object.assign({}, getCdListDetailParmas, {
                disstid: id,
            });
            axios.get(`${mkPrefix}/music/api/getCdInfo`, {params: data}).then(result => {
                result.data.code === 0 ? resolve(result.data) : reject(result.data)
            }, error => {
                throw  new Error(error)
            })
        })
    }
}

export const commonParams = {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'json'
};

const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
});
const getCdListDetailParmas = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp',
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
});
