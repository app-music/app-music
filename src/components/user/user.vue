<template>
    <transition name="user">
        <div class="user">
            <div class="go-back" @click="$router.go(-1)">
                <i class="iconfont icon-fanhui"></i>
            </div>
        </div>
    </transition>
</template>

<style type="text/scss" lang="scss" scoped>
.user{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #222;
    .go-back {
        position: absolute;
        top: 0;
        left: 6px;
        z-index: 60;
        i {
            font-size: 22px;
            display: block;
            padding: 10px;
            color: #ffcd32;
        }

    }
}
.user-enter-active {
    transition: all .3s ease;
}
.user-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.user-enter, .user-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100%);
    /*opacity: 0;*/
}
</style>

<script>

  export default {
    data() {
      return {
        msg: 'hello vue',
        ok: false
      }
    },
    created() {
      setTimeout(e => {
        this.ok = true;
      }, 5000)
    }
  }

</script>
