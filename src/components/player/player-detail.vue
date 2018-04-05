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
                    <mt-progress :value="60">
                        <div slot="start">0%</div>
                        <div slot="end">100%</div>
                    </mt-progress>
                </div>
                <div class="player-button">
                    <span>
                        <i class="iconfont icon-suijibofang"></i>
                        <i class="iconfont icon-shangyishou1"></i>
                        <i class="iconfont icon-bofang"></i>
                        <i class="iconfont icon-xiayishou"></i>
                        <i class="iconfont icon-xihuan"></i>
                    </span>
                </div>
            </div>
        </div>

    </transition>
</template>

<script>
  import Song from "../../core/utils/song";

  export default {
    name: "player-detail",
    props: {
      currentSong: {
        type: Song,
        default: new Song({}),
      }
    },
    data() {
      return{
        start:'',
        end:''
      }
    },
    created() {
      console.log(this.currentSong);
      console.log(this);
    },
    methods: {
      detailClose() {
        this.$emit('playerDetailEvent', {playerDetailShow: false})
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

<style scoped type="text/scss" lang="scss">
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
        z-index: 100;
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
            .progress{
                margin:0 auto;
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