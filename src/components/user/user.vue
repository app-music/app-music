<template>
    <transition name="user">
        <div class="user">
            <div class="go-back" @click="$router.go(-1)">
                <i class="iconfont icon-fanhui"></i>
            </div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1" >我喜欢的</mt-tab-item>
                <mt-tab-item id="2" >最近听的</mt-tab-item>
            </mt-navbar>
            <div id="play">
                <i class="iconfont icon-suijibofang"></i>
                <span>随机播放</span>
            </div>

            <!-- tab-container -->
            <mt-tab-container v-model="selected" height="120px">
                <mt-tab-container-item id="1">
                    <mt-cell v-for="n in 3" :key="n" :title="'content ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 4" :key="n" :title="'content ' + n" />
                </mt-tab-container-item>

            </mt-tab-container>

        </div>
    </transition>
</template>

<style type="text/scss" lang="scss" rel="stylesheet/scss" scoped>
.user{
    position: fixed;
    z-index: 100;
    top: -90px;
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
    ul{
        display: flex;
        color:#fff;
        li{
            flex:1;
        }

    }
#play{
    height:30px;
    width:150px;
    line-height:30px;
    text-align: center;
    color: #999;
    border:1px solid #999;
    border-radius:20px;
    margin:5px auto;
    i{
        color: #ffffff;
        margin-top:-10px;
    }
}
</style>

<script>

  export default {
    data() {
      return {
          selected:'1',
        msg: 'hello vue',
        ok: false,
          title:['我喜欢的','最近听的']
      }
    },
    created() {
      setTimeout(e => {
        this.ok = true;
      }, 5000)
    }
  }

</script>
