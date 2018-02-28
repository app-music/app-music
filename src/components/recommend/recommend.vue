<template>
  <div class="block" style="height: 150px">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img height="100%" width="100%" src="../../assets/swipe1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img height="100%" width="100%" src="../../assets/swipe2.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img height="100%" width="100%" src="../../assets/swipe3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img height="100%" width="100%" src="../../assets/swipe4.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/css">

</style>
