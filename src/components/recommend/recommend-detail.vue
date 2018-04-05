<template>
    <transition name="slide-fade">
        <div ref="aa" class="music-detail">
            <div class="go-back" @click="goBack()">
                <i class="iconfont icon-fanhui"></i>
            </div>
            <h1>{{cdList[0].dissname}}</h1>
            <div class="music-img" style="border: none">
                <img v-if="cdList[0].logo" :src="cdList[0].logo" style="border: none" width="100%" height="100%" alt=""/>
                <div class="play-all" @click="clickPlayAll()">
                    <span>
                        <i class="iconfont icon-bofang"></i>
                        随机播放全部
                    </span>
                </div>
            </div>
            <div class="filter"></div>
            <div class="song-list">
                <ul>
                    <li v-for="(item,index) in cdList[0].songlist" :key="index">
                        <h2>{{item.songname}}</h2>
                        <p>{{item.singer[0].name}}*{{item.albumname}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
  import {isValidMusic} from "../../core/utils/song";
  import Song from '../../core/utils/song';
  import {mapActions} from 'vuex'

  export default {
    name: "recommend-detail",
    data() {
      return {
        id: '',
        cdList: [{}]
      }
    },
    comments: {},
    created() {
      this.id = this.$route.params.id;
      this.getCdListDetail();
    },
    methods: {
      getCdListDetail() {
        this.$recommendService.getCdListDetail(this.id).then(result => {
          this.cdList = result.cdlist;
          console.log(this.cdList);
          this.$songService.getSongUrlList(this.cdList[0].songlist).then(result => {
            console.log(result);
            let midUrlInfo = result.url_mid.data.midurlinfo;
            this.cdList[0].songlist.forEach((item, index) => {
              item.songUrl = `http://dl.stream.qqmusic.qq.com/${midUrlInfo[index].purl}`
            });
            this.currentMusic(this.cdList[0].songlist);
          }, failed => {
            console.log(failed);
          })
        }, failed => {

        })
      },
      clickPlayAll() {
        console.log(111);
        this.playAll({isPlay: true});
      },
      goBack() {
        this.$router.push({
          path: '/'
        })
      },

      ...mapActions([
        'currentMusic',
        'playAll'
      ])
    }
  }
</script>

<style scoped type="text/scss" rel="stylesheet/scss"  lang="scss">
    .music-detail {
        position: fixed;
        z-index: 100;
        top: -90px;
        left: 0;
        bottom: 0;
        right: 0;
        background: #222;
        .go-back {
            position: absolute;
            top: 0;
            left: 6px;
            z-index: 60;
            i {
                font-size: 22px;
                display: block;
                padding: 10px;
                color: #ffcd32;
            }

        }
        h1 {
            position: absolute;
            top: 2px;
            left: 10%;
            z-index: 40;
            width: 80%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
            line-height: 40px;
            font-size: 18px;
            color: #fff;
        }
        .music-img {
            position: relative;
            width: 100%;
            height: 0;
            padding-top: 70%;
            transform-origin: top;
            background-size: cover;
            img {
                border: none;
                position: absolute;
                top: 0;
                left: 0;
                vertical-align:bottom;
            }
        }
        .filter {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(7, 17, 27, .4)
        }
        .play-all {
            position: absolute;
            bottom: 20px;
            z-index: 50;
            width: 100%;
            text-align: center;
            padding: 7px 0;
            span {
                display: inline-block;
                box-sizing: border-box;
                width: 135px;
                height: 32px;
                margin: 0 auto;
                border: 1px solid #ffcd32;
                color: #ffcd32;
                border-radius: 100px;
                vertical-align: middle;
                font-size: 13px;
                line-height: 28px;

            }

        }
        .song-list {
            padding: 20px 30px;
            ul {
                li {
                    h2 {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        color: #fff;
                        font-size: 15px;
                    }
                    p {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        margin-top: 4px;
                        color: hsla(0, 0%, 100%, .3);
                    }
                }
            }
        }

    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(100%);
        opacity: 0;
    }
</style>
