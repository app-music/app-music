/**
 * Created by xiaoconghu on 2018/4/1.
 */
import {Base64} from 'js-base64';

export default class Song {

    lyric;
    image = 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000013N5QP4bIcLc.jpg?max_age=2592000';

    constructor(data) {
        this.id = data.songid;
        this.mid = data.songmid;
        this.singer = data.singer;
        this.name = data.songname;
        this.album = data.albumname;
        this.duration = data.duration;
        if (data.albummid) {
            this.image = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${data.albummid}.jpg?max_age=2592000`;
        }
        this.url = data.songUrl;
    }

    getLyric(func) {
        if (this.lyric) {
            return Promise.resolve(this.lyric)
        }
        return new Promise((resolve, reject) => {
            func(this.mid).then(result => {
                if (result.retcode === 0) {
                    this.lyric = Base64.decode(result.lyric);
                    resolve(this.lyric)
                } else {
                    reject('no lyric')
                }
            })
        })
    }
}

export function createSong(musicData) {
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: '',
        name: musicData.songname,
        duration: musicData.interval,
        image: ``,
        url: musicData.url
    })
}

export function isValidMusic(musicData) {
    let arr = [];
    musicData.forEach(item => {
        if (musicData.songid && musicData.albummid && (!musicData.pay || musicData.pay.payalbumprice === 0)) {
            arr.push(createSong(item))
        }
    })
    return arr
}