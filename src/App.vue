<template>
  <div id="app">
    <h3>Chicken Music</h3>
    <mt-navbar v-model="selected" class="nav-bar">
      <mt-tab-item id="1" class="nav-item">
        <router-link class="nav-item-link" to="/recommend">推荐</router-link>
      </mt-tab-item>
      <mt-tab-item id="2" class="nav-item">
        <router-link class="nav-item-link" to="/singer">歌手</router-link>
      </mt-tab-item>
      <mt-tab-item id="3"class="nav-item">
        <router-link class="nav-item-link" to="/seniority">排行</router-link>
      </mt-tab-item>
      <mt-tab-item id="4" class="nav-item">
        <router-link class="nav-item-link" to="/search">搜索</router-link>
      </mt-tab-item>
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
  body{
    background: #222;
  }
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
  .nav-bar{
    background: #222;
    .nav-item{
      padding: 0;
      .nav-item-link{
        color: #ffcd32;
        display: block;
        padding: 17px 0;
        text-decoration: none;
      }
    }
  }
}

</style>
