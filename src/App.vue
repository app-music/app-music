<template>
  <div id="app">
    <h3>Chicken Music</h3>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item class="e-item" index="1">推荐</el-menu-item>
      <el-menu-item class="e-item" index="2">歌手</el-menu-item>
      <el-menu-item class="e-item" index="3">排行</el-menu-item>
      <el-menu-item class="e-item" index="4">搜索</el-menu-item>
    </el-menu>
    <div>修的换货单号</div>
    <div>修改的地方</div>
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
      activeIndex2: '1'
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
  margin-top: 60px;
  h3{
    text-align: center;
  }
}
  .el-menu-demo{
    display: flex;
    .e-item{
      flex: 1;
    }
  }
</style>
