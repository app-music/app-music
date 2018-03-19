<template>
  <div class="container">
    <div style="margin: 20px;">
      <div class="search">
        <i class="iconfont icon-search icon-color" style="color: #866363"></i>
        <input type="text" class="search-input" v-model="value"
               placeholder="搜索歌曲、歌名">
      </div>
    </div>

    <div>
      <p>热门搜索</p>
      <ul>
        <li>我们不一样</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" type="text/css" scoped>
.search{
  padding: 20px;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  height: 40px;
  background: #333;
  border-radius: 6px;
.icon-color {
  color: #866363 !important;
}
.search-input{
  flex: 1;
  margin: 0 5px;
  line-height: 18px;
  background: #333;
  color: #fff;
  font-size: 14px;
  outline: 0;
}

}



</style>
<script>


export default {
    data() {
        return {
          value:'',
          result:[
            {title:'ssss',value:'ssss'},
            {title:'ssss',value:'ssss'},
            {title:'ssss',value:'ssss'},
            {title:'ssss',value:'ssss'},
          ]
        }
    }
}</script>
