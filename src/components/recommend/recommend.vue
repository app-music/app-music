<template>
  <div>
    <div class="block" style="height: 150px">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for=" (item,index) in swipes" :key="index">
          <img height="100%" width="100%" :src="item.picUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <h5 class="list-title">热门歌单推荐</h5>
    <div class="song-recommend">
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="goToDetail(item.dissid)">
          <div class="song-img"><img width="60" height="60" :src="item.imgurl" alt=""></div>
          <div class="song-info">
            <p href="">{{item.creator.name}}</p>
            <p>{{item.dissname}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import aaa from '../../core/api-server/recommend'

  export default {
    name: 'recommend',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        items: [],
        swipes: []
      }
    },
    created() {
      this.getRecommend();
      this.getCdInfo();
    },
    methods: {
      getRecommend() {
        this.$recommendService.getRecommend().then(success => {
          this.swipes = success.data.slider;
        }, err => {
          throw new Error(err);
        })
      },
      getCdInfo() {
        this.$recommendService.getCdInfo().then(success => {
          this.items = success.data.list;
        })
      },
      goToDetail(id){
        this.$router.push({
          path:`/recommend/detail/${id}`,
        })
      }


    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/scss" scoped>
  .block {

  }
  .list-title {

    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: 14px;
    color: #ffcd32;
  }

  .song-recommend {
    ul {
      li {
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 20px 20px;
        div:nth-of-type(1) {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        div:nth-of-type(2) {
          flex: 5;
          text-align: left;
          p:nth-of-type(1) {
            margin-bottom: 10px;
            color: #fff;
          }
          p:nth-of-type(2) {
            color: hsla(0, 0%, 100%, .3);
          }

        }
      }
    }
  }
</style>
