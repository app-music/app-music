<template>
    <div class="music-detail">
        <div class="go-back"></div>
        <div class="music-img">
            <img :src="cdList[0].logo" width="100%" height="100%" alt=""/>
            <div class="play-all">
                <span >随机播放全部</span>
            </div>
        </div>


        <div class="song-list">
            <ul>
                <li v-for="item in cdList[0].songlist">
                    <h2>{{item.albumname}}</h2>
                    <p>{{item.songname}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "recommend-detail",
    data(){
      return{
        id:'',
        cdList:[]
      }
    },
    comments:{

    },
    created(){
     this.id = this.$route.params.id;
      this.getCdListDetail();
    },
    methods: {
      getCdListDetail() {
        this.$recommendService.getCdListDetail(this.id).then(result => {
          console.log(result);
          this.cdList = result.cdlist;
        })
      },
    }
  }
</script>

<style scoped type="text/scss" lang="scss">
.music-detail{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #222;
    .music-img{
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 70%;
        transform-origin: top;
        background-size: cover;
        img{
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .play-all{
        position: absolute;
        bottom: 20px;
        z-index: 50;
        width: 100%;
        text-align: center;
        padding: 7px 0;
        span{
            display: inline-block;
            box-sizing: border-box;
            width: 135px;
            height: 32px;
            margin: 0 auto;
            border: 1px solid #ffcd32;
            color: #ffcd32;
            border-radius: 100px;
            vertical-align: middle;
            font-size: 12px;
            line-height: 32px;

        }

    }
    .song-list{
        padding: 20px 30px;
        ul{
            li{
                h2{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    color: #fff;
                    font-size: 15px;
                }
                p{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    margin-top: 4px;
                    color: hsla(0,0%,100%,.3);
                }
            }
        }
    }

}
</style>