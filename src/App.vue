<template>
  <div id="app">
    <h3>Chicken Music</h3>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">推荐</mt-tab-item>
      <mt-tab-item id="2">歌手</mt-tab-item>
      <mt-tab-item id="3">排行</mt-tab-item>
      <mt-tab-item id="4">搜索</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      activeIndex2: '1',
      selected:'1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #222;
  h3{
    margin: 0;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #ffcd32;
  }
  mt-navbar{
  background: #222;
}
}
  .el-menu-demo{
    display: flex;
    .e-item{
      flex: 1;
    }
  }
</style>
