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
                <div class="play-music"> ▶ </div>
            </div>
        </div>
        <audio ref="audio"
               src="http://dl.stream.qqmusic.qq.com/C400003Gso9L37NJwF.m4a?guid=1642610470&vkey=50696E543587FC0215B115430A56513CF965782A0C4E4F8CCC81C21710D085C052978D3141520AA8778725D3F6DDF605E903F5EB1D1997FE&uin=0&fromtag=38"
               ></audio>
    </div>

</template>

<script>
  export default {
    name: "player",
    data(){
      return{
        paused:true
      }

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
            border: 2px solid red;
            border-radius: 16px;
            position: relative;
            margin-right: 20px;
            .play-music{
                position: absolute;
                left: 55%;
                top: 50%;
                transform: translate(-50%,-50%);
                color: red;
            }
        }
    }

</style>