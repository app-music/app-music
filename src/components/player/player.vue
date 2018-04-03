<template>
    <div>
        <div class="sing-player">
            <div class="sing-icon">
                <img width="40" height="40" class=""
                     :src="getCount.image">
            </div>
            <div class="text">
                <h2 class="name" v-html="getCount.singer[0].name"></h2>
                <p class="desc" v-html="getCount.name"></p>
            </div>
            <div class="progress-circle" @click="playMusic()">
                <div class="play-music">
                    <i v-if="paused" class="iconfont icon-bofang"></i>
                    <i v-if="!paused" class="iconfont icon-zanting3"></i>
                </div>
                <circle-progress :isPlay="paused" :time="time"></circle-progress>
            </div>
        </div>
        <audio ref="audio" :src="getCount.url">
        </audio>
    </div>

</template>

<script>

  import circleProgress from './circle-progress';
  import {mapGetters} from 'vuex'
  import Song from "../../core/utils/song";
  import {CommonUtil} from "../../core/utils/common-util";

  export default {
    name: "player",
    data() {
      return {
        paused: true,
        count: '',
        song: {},
        msg: false,
        time:0,
      }

    },
    components: {
      circleProgress,
    },
    created() {
    },
    computed: {
      getCount() {
        if (this.getCurrentMusic) {
          let songs = this.getCurrentMusic;
          console.log(this.getCurrentMusic);
          let index = CommonUtil.getRandomNumBoth(1, songs.length + 1);
          let a = new Song(this.getCurrentMusic[index]);
          console.log(a);
          return a;
        } else {
          return new Song({singer: [{}]})
        }
      },
      playAllMusic() {
        if (this.playAll) {
          // this.aa = 666;
        }

      },
      ...mapGetters([
        'getCurrentMusic',
        'playAll'
      ]),
    },
    watch: {
      playAllMusic: {
        deep: true,
        handler() {
          if(!this.paused){
            this.$refs.audio.pause();
          }
          this.playMusic()
        }
      }
    },
    methods: {
      playMusic() {
        this.paused = !this.paused;
        this.$refs.audio[this.paused ? 'pause' : 'play']();
        this.time = this.$refs.audio.duration;
      },

    },
  }
</script>

<style scoped type="text/scss" lang="scss">
    .sing-player {
        position: fixed;
        align-items: center;
        left: 0;
        bottom: 0;
        height: 60px;
        width: 100%;
        z-index: 999;
        background: #333;
        display: flex;
        .sing-icon {
            s-flex: 0 0 40px;
            flex: 0 0 40px;
            width: 40px;
            height: 40px;
            padding: 0 10px 0 20px;
            img {
                border-radius: 50%;
            }
        }
        .text {
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex: 1;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            h2 {
                margin-bottom: 2px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 14px;
                color: #fff;
            }
            p {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 12px;
                color: hsla(0, 0%, 100%, .3);
            }
        }
        .progress-circle {
            box-sizing: content-box;
            width: 30px;
            height: 30px;
            position: relative;
            margin-right: 20px;
            .play-music {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: red;
                i {
                    font-size: 34px;
                }
            }
        }
    }

</style>