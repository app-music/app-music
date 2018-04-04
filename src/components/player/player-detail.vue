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
        </div>

    </transition>
</template>

<script>
  import Song from "../../core/utils/song";

  export default {
    name: "player-detail",
    props:{
      currentSong:{
        type: Song,
        default: new Song({}),
      }
    },
    created(){
      console.log(this.currentSong);
    },
    methods:{
      detailClose(){
        this.$emit('playerDetailEvent',{playerDetailShow:false})
      }
    },
    watch: {
      currentSong: {
        deep: true,
        handler(){
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
    .player-enter,.player-leave-to{
        transform: translateY(100%);
        opacity: 0;
    }
    .player{
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
        h2{
            line-height: 20px;
            text-align: center;
            font-size: 14px;
            color: #fff;
        }
    }
</style>