<template>

    <transition name="player">
        <div class="player">
            <div class="hidden" @click="detailClose()">
                <i class="iconfont icon-xiangxia02"></i>
            </div>
            <h3>
                {{currentSong.singer[0].name}}
                <h2>{{currentSong.name}}</h2>
            </h3>
            <div class="music-img">
                <div>
                    <img height="100%" width="100%" :src="currentSong.image" alt=""/>
                </div>
                <h2>目前没有获取到歌词</h2>
            </div>
            <div class="player-control">
                <div class="progress">
                    <mt-progress :value="currentTime/getCurrentMusicTime*100">
                        <div slot="start">{{currentTime*1000 | formatDate}}</div>
                        <div slot="end">{{getCurrentMusicTime*1000 |formatDate}}</div>
                    </mt-progress>
                </div>
                <div class="player-button">
                    <span>
                        <i @click="" class="iconfont icon-suijibofang"></i>
                        <i @click="previous()" class="iconfont icon-shangyishou1"></i>
                        <i @click="play()" :class="playStaus"></i>
                        <i @click="next()" class="iconfont icon-xiayishou"></i>
                        <i @click="" class="iconfont icon-xihuan"></i>
                    </span>
                </div>
            </div>
        </div>

    </transition>
</template>

<script>
  import Song from "../../core/utils/song";
  import {mapActions, mapGetters} from 'vuex';
  import {CommonUtil} from '../../core/utils/common-util';

  export default {
    name: "player-detail",
    props: {
      currentSong: {
        type: Song,
        default: new Song({}),
      },
      currentTime:{
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        start: '',
        end: '',
      }
    },
    computed: {
      playStaus(){
        if(this.playAll.isPlay){
          return 'iconfont icon-zanting2'
        }else {
          return 'iconfont icon-bofang'
        }
      },
      getCurrentMusicTime(){
        return this.currentMusicTime;
      },
      ...mapGetters([
        'currentMusicIndex',
        'playAll',
        'currentMusicTime'
      ])
    },
    created() {
      console.log(this.currentSong);
      console.log(this);
    },
    methods: {
      detailClose() {
        this.$emit('playerDetailEvent', {playerDetailShow: false})
      },
      previous() {
        this.currentIndex(this.currentMusicIndex - 1);
        this.playMusic({isPlay: true});
      },
      next() {
        this.currentIndex(this.currentMusicIndex + 1);
        this.playMusic({isPlay: true});
      },
      play() {
        this.playMusic({isPlay: !this.playAll.isPlay});
      },
      ...mapActions({
        currentIndex: 'currentMusicIndex',
        playMusic: 'playAll'
      })
    },
    filters:{
      formatDate(time){
        let date = new Date(time);
        return CommonUtil.dateFmt('mm:ss',date);
      }
    },
    watch: {
      currentSong: {
        deep: true,
        handler() {
          console.log(111);
        }
      }
    }
  }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
    .player-enter-active {
        transition: all .8s ease;
    }

    .player-leave-active {
        transition: all .8s ease;
    }

    .player-enter, .player-leave-to {
        transform: translateY(100%);
        opacity: 0;
    }

    .player {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #222;
        .hidden {
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
        h3 {
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
        h2 {
            line-height: 20px;
            text-align: center;
            font-size: 14px;
            color: #fff;
        }
        .music-img {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 90px;
            width: 80%;
            img {
                border-radius: 50%;
            }
            h2 {
                margin-top: 30px;
            }
        }
        .player-control {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 50px;
            .progress {
                margin: 0 auto;
                width: 90%;
            }
            .player-button {
                text-align: center;
                display: inline-block;
                width: 100%;
                height: 50px;
                vertical-align: middle;
                i {
                    margin-left: 20px;
                    font-size: 40px;
                    color: #ffcd32bd;
                }
                i:nth-of-type(3) {
                    font-size: 50px;
                    line-height: 50px;
                }
            }
        }
    }
</style>
