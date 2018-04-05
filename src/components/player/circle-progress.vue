<template>
    <div class="circleProgress_wrapper">
        <div class="wrapper right">
            <div ref="rightCircle" class="circleProgress rightcircle"></div>
        </div>
        <div class="wrapper left">
            <div ref="leftCircle" class="circleProgress leftcircle"></div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "circle-progress",
    props: {
      isPlay: {
        type: Boolean,
        default: false
      },
      time: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    created() {
      console.log(this.$refs.rightCirlcle);
    },
    methods: {},
    watch: {
      isPlay: function (previous, current) {
        if (current) {
          this.$refs.rightCircle.style.animationPlayState = 'running';
          this.$refs.rightCircle.style.WebkitAnimation = `circleProgressLoad_right ${this.time}s linear`;
          setTimeout(e => {
            this.$refs.leftCircle.style.WebkitAnimation = `circleProgressLoad_left ${this.time}s linear`;
          }, this.time / 2)

        } else {
          this.$refs.rightCircle.style.animationPlayState = 'paused'
        }

      }
    }

  }

</script>

<style  rel="stylesheet/scss" type="text/css" scoped>
    .circleProgress_wrapper {
        width: 30px;
        height: 30px;
        position: relative;
    }

    .wrapper {
        width: 15px;
        height: 30px;
        position: absolute;
        top: 0;
        overflow: hidden;
    }

    .right {
        right: 0;
    }

    .left {
        left: 0;
    }

    .circleProgress {
        width: 26px;
        height: 26px;
        border: 2px solid rgb(232, 232, 12);
        border-radius: 60%;
        position: absolute;
        top: 0;
        -webkit-transform: rotate(45deg);
    }

    .rightcircle {
        border-top: 2px solid red;
        border-right: 2px solid red;
        right: 0;
    }

    .leftcircle {
        border-bottom: 2px solid red;
        border-left: 2px solid red;
        left: 0;
    }


</style>
