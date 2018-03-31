<template>
    <div>
        <div class="sing-player">
            <div class="sing-icon">
                <img width="40" height="40" class=""
                     src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002FeuvF1UpdPa.jpg?max_age=2592000">
            </div>
            <div class="text">
                <h2 class="name">山下智久</h2>
                <p class="desc">Run From You</p>
            </div>
            <div class="progress-circle" @click ="playMusic()">
                <div class="play-music">
                    <i v-if="paused" class="iconfont icon-bofang"></i>
                    <i v-if="!paused" class="iconfont icon-zanting3"></i>
                </div>
                <circle-progress></circle-progress>
            </div>
        </div>
        <audio ref="audio"
               src="http://dl.stream.qqmusic.qq.com/C400003Gso9L37NJwF.m4a?guid=3493659276&vkey=19B699139988D962C3958E8FEEDFD86B1113DEE8CB00C10DBD980BB90F7F6BBE342D9AD6BDCFB71AC307C4E2C829317B19024F9266BE7C15&uin=0&fromtag=38"
               ></audio>
    </div>

</template>

<script>

  import circleProgress from './circle-progress';

  export default {
    name: "player",
    data(){
      return{
        paused:true
      }

    },
    components: {
      circleProgress,
    },
    methods:{
      playMusic(){
        this.paused = !this.paused;
        this.$refs.audio[this.paused?'pause':'play']()
      }
    }
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
        .sing-icon{
            s-flex: 0 0 40px;
            flex: 0 0 40px;
            width: 40px;
            height: 40px;
            padding: 0 10px 0 20px;
        }
        .text{
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex: 1;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            h2{
                margin-bottom: 2px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 14px;
                color: #fff;
            }
            p{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 12px;
                color: hsla(0,0%,100%,.3);
            }
        }
        .progress-circle{
            box-sizing: content-box;
            width: 30px;
            height: 30px;
            position: relative;
            margin-right: 20px;
            .play-music{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                color: red;
                i{
                    font-size: 34px;
                }
            }
        }
    }

</style>