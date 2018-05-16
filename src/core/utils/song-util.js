/**
 * Created by xiaoconghu on 2018/5/16.
 */
import songApi from './../api-server/song'
export function getSongUrlList(songList) {
    return new Promise((resolve, reject) => {
        songApi.getSongUrlList(songList).then(result => {
            let midUrlInfo = result.url_mid.data.midurlinfo;
            songList.forEach((item, index) => {
                item.songUrl = `http://dl.stream.qqmusic.qq.com/${midUrlInfo[index].purl}`
            });
            resolve(songList)
        }, failed => {
            reject(failed)
        })
    })

}