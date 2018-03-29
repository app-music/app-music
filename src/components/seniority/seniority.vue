<template>
  <p>这里是排行页面</p>
</template>

<style type="text/scss" lang="scss" scoped>

</style>

<script>
  export default {
    data() {
      return {msg: 'hello vue'}
    },
    created() {
      this.getTopList();
    },
    methods: {
      getTopList() {
        this.$seniorityService.getTopList().then(success => {
          console.log(success);
        }, failed => {
          console.log(failed);
        })
      }
    }
  }
</script>
