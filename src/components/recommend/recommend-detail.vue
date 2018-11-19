<template>


  <music-detail :title="cdList[0].dissname" :imgUrl="cdList[0].logo" :data="cdList[0].songlist"></music-detail>

</template>

<script>
  import {CommonUtil} from "../../core/utils/common-util";
  import {mapActions} from 'vuex'
  import musicDetail from '../common-components/music-detail'
  import {getSongUrlList} from "../../core/utils/song-util";

  export default {
    name: "recommend-detail",
    data() {
      return {
        id: '',
        cdList: [{}],
      }
    },
    components: {
      musicDetail
    },
    created() {
      this.id = this.$route.params.id;
      this.getCdListDetail();
    },
    methods: {
      getCdListDetail() {
        this.$recommendService.getCdListDetail(this.id).then(result => {
          this.cdList = result.cdlist;
            getSongUrlList(result.cdlist[0].songlist).then(res=>{
                this.cdList[0].songlist = res
            },failed=>{

            })

          // this.$songService.getSongUrlList(this.cdList[0].songlist).then(result => {
          //   console.log(result);
          //   let midUrlInfo = result.url_mid.data.midurlinfo;
          //   this.cdList[0].songlist.forEach((item, index) => {
          //     item.songUrl = `http://dl.stream.qqmusic.qq.com/${midUrlInfo[index].purl}`
          //   });
          // }, failed => {
          //   console.log(failed);
          // })
        }, failed => {

        })
      },
      clickPlayAll() {
        let index = CommonUtil.getRandomNumBoth(1, this.cdList[0].songlist.length + 1);
        this.currentMusicIndex(index);
        // this.playAll({isPlay: true});
        this.currentMusic(this.cdList[0].songlist);
        this.playerDetailShow(true)
      },
      navigateToDetail(index) {
        this.currentMusic(this.cdList[0].songlist);
        this.currentMusicIndex(index);
        this.playerDetailShow(true);
      },
      goBack() {
        this.$router.push({
          path: '/'
        })
      },
      ...mapActions([
        'currentMusic',
        'currentMusicIndex',
        'playAll',
        'playerDetailShow'
      ])
    }
  }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
  .music-detail {
    position: fixed;
    z-index: 100;
    top: px2rem(-110px);
    left: 0;
    bottom: 0;
    right: 0;
    background: #222;
    .go-back {
      position: absolute;
      top: 0;
      left: px2rem(6px);
      z-index: 60;
      i {
        font-size: 22px;
        display: block;
        padding: px2rem(10px);
        color: #ffcd32;
      }

    }
    h1 {
      position: absolute;
      top: px2rem(2px);
      left: 10%;
      z-index: 40;
      width: 80%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
      line-height: px2rem(40px);
      font-size: px2rem(18px);
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
        vertical-align: bottom;
      }
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(7, 17, 27, .4)
    }
    .play-all {
      position: absolute;
      bottom: px2rem(20px);
      z-index: 50;
      width: 100%;
      text-align: center;
      padding: px2rem(7px) 0;
      span {
        display: inline-block;
        box-sizing: border-box;
        width: px2rem(250px);
        height: px2rem(50px);
        margin: 0 auto;
        border: 1px solid #ffcd32;
        color: #ffcd32;
        border-radius: px2rem(100px);
        vertical-align: middle;
        font-size: 13px;
        line-height: 25px;

      }

    }
    .song-list {
      padding: px2rem(20px) px2rem(30px);
      ul {
        li {
          h2 {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #fff;
            font-size: px2rem(15px);
          }
          p {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            margin-top: px2rem(4px);
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
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
