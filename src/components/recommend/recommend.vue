<template>
  <div>
    <div class="block" style="height: 150px">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img height="100%" width="100%" src="../../assets/swipe1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img height="100%" width="100%" src="../../assets/swipe2.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img height="100%" width="100%" src="../../assets/swipe3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img height="100%" width="100%" src="../../assets/swipe4.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <h5 class="list-title">热门歌单推荐</h5>
    <div class="song-recommend">
      <ul>
        <li v-for="(item, index) in items">
          <div class="song-img"><img width="50" height="50" src="../../assets/swipe1.jpg" alt=""></div>
          <div class="song-info"><p href="">{{item.text}}</p></div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'recommend',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        items:[]
      }
    },
    created(){
      this.items= [
        {url:'',text:'阿nijfsajlfjsaldfj教所带来的萨芬就是代理商到底是谁的 '},
        {url:'',text:'阿娇辅导老师极大激发了佛教所带来的萨芬就是代理商到底是谁的'},
        {url:'',text:'阿娇辅导老师极大激发了佛教所带来的萨芬就是代理商到底是谁的'},
        {url:'',text:'阿娇辅导老师fdsfsdjfwejoj教所带来的萨芬就是代理商到底是谁的'},
        {url:'',text:'阿sdfsdkf;akdsf;kdsa;fk老师极大激发了佛教所带来的萨芬就是代理商到底是谁的'},
        {url:'',text:'阿娇辅导老师极大激发了佛教所带来的萨芬就是代理商到底是谁的'},
        {url:'',text:'阿娇辅导老师极大激发了佛教所带来的萨芬就是代理商到底是谁的'},
      ];
    },
    methods:{

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/css">
  .block{

  }
  .list-title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    display:inline-block;
    color: #ffcd32;
  }
  .song-recommend{
    ul{
      li{
        display: flex;
        div:nth-of-type(1){
          flex: 1;
        }
        div:nth-of-type(2){
          flex: 5;
          text-align: left;

        }
      }
    }
  }
</style>
