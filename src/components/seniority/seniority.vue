<template>
    <div>
        <div class="circleProgress_wrapper">
            <div class="wrapper right">
                <div class="circleProgress rightcircle"></div>
            </div>
            <div class="wrapper left">
                <div class="circleProgress leftcircle"></div>
            </div>
        </div>
    </div>
</template>

<style type="text/scss" lang="scss" scoped>
    .circleProgress_wrapper{
        width: 200px;
        height: 200px;
        border:1px solid red;
        position: relative;
    }
    .wrapper{
        width: 100px;
        height: 200px;
        position: absolute;
        top:0;
        overflow: hidden;
    }
    .right{
        right:0;
    }
    .left{
        left:0;
    }
    .circleProgress{
        width: 160px;
        height: 160px;
        border:20px solid transparent;
        border-radius: 50%;
        position: absolute;
        top:0;
        transform: rotate(45deg);
    }
    .rightcircle{
        border-top:20px solid green;
        border-right:20px solid green;
        right:0;
    }
</style>

<script>
  import circleProgress from '../player/circle-progress'
  export default {
    data() {
      return {msg: 'hello vue'}
    },
    created() {
      this.getTopList();
    },
    components:{
      circleProgress
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
