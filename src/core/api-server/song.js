/**
 * Created by xiaoconghu on 2018/4/1.
 */

import axios from 'axios';
import {commonParams} from "./recommend";
import {CommonUtil} from "../utils/common-util";
import {isValidMusic} from "../utils/song";

export default {
  /**
   * 获取歌曲路径
   * @returns {Promise}
   */
  getSongUrlList(disstid){
    let songmid = [],songtype = [];
    disstid.forEach(song=>{
      songmid.push(song.songmid);
      songtype.push(0)
    });
    return new Promise((resolve, reject) => {
      let p = Object.assign({},commonParams,{
        g_tk:5381,
        format:'json',
        platform:'h5',
        needNewCode:1,
        uin:0
      });
      let data = {
        comm: p,
        url_mid: {
          module: 'vkey.GetVkeyServer',
          method: "CgiGetVkey",
          param: {
            guid:CommonUtil.getUid(),
            songmid: songmid,
            songtype: songtype,
            uin: '0',
            loginflag: 0,
            platform: '23'
          }
        }
      };
      axios.post(`abc/api/getPurlUrl`,data).then(result=>{
        result.data.code === 0 ? resolve(result.data) : reject(result.data);
      },error => { throw new Error(error) })
    })
  }

}