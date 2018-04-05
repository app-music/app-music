<template>
    <div id="app">
        <div id="head">
          <header class="header">
            <h3>Chicken Music</h3>
            <span class="user" @click="$router.push({ path: 'user'})">
                <i class="iconfont icon-yonghu"></i>
            </span>
          </header>
          <mt-navbar v-model="selected" class="nav-bar">
            <mt-tab-item id="1" class="nav-item">
              <router-link class="nav-item-link" to="/recommend">推荐</router-link>
            </mt-tab-item>
            <mt-tab-item id="2" class="nav-item">
              <router-link class="nav-item-link" to="/singer">歌手</router-link>
            </mt-tab-item>
            <mt-tab-item id="3" class="nav-item">
              <router-link class="nav-item-link" to="/seniority">排行</router-link>
            </mt-tab-item>
            <mt-tab-item id="4" class="nav-item">
              <router-link class="nav-item-link" to="/search">搜索</router-link>
            </mt-tab-item>
          </mt-navbar>
        </div>
        <router-view style="margin-bottom:60px;margin-top: 90px;"></router-view>
        <player></player>
    </div>
</template>

<script>
  import './assets/iconfont/iconfont.css'
  import player from './components/player/player'
  import './assets/iconfont_2/iconfont.css'

  export default {
    name: 'App',
    components: {
      player
    },
    data() {
      return {
        activeIndex2: '1',
        selected: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" type="text/scss"  rel="stylesheet/scss" >
    body {
        background: #222;
    }
#head{
  height:60px;
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  background: #222;
  z-index: 20;
}
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background: #222;
        header{
            position: relative;
            h3 {
                margin: 0;
                height: 44px;
                line-height: 44px;
                text-align: center;
                color: #ffcd32;
            }
            .user{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 5px;
            }
        }

        .mint-navbar .mint-tab-item.is-selected {
            border-bottom: none;
            margin-bottom: -3px;
        }
        .nav-bar {
            background: #222;
            .nav-item {
                .router-link-active {
                    border-bottom: 2px solid #ffcd32;
                    margin-bottom: 3px;
                }
                padding: 0;
                .nav-item-link {
                    color: #ffcd32;
                    display: block;
                    padding: 17px 0;
                    text-decoration: none;
                }
            }
        }
        .user{
            position: absolute;
            i{
                display: block;
                padding: 12px;
                font-size: 20px;
                color: #ffcd32
            }
        }
    }

    .mint-indexsection-index {
        margin: 0;
        padding: 10px;
        background: #222222;
    }

    .mint-indexlist-nav {
        border-radius: 10px;
        color: #fafafa;
        text-align: center;
        background: rgba(0, 0, 0, .3);
        font-family: Helvetica;
        border: none;
    }

    .mint-indexsection-index {
        /*height: 30px;*/
        /*line-height: 30px;*/
        padding-left: 20px;
        font-size: 12px;
        color: hsla(0, 0%, 100%, .5);
        background: #333;
    }

    .mint-searchbar {
        flex: 1;
        margin: 0 5px;
        line-height: 18px;
        background: #333;
        color: #fff;
        font-size: 14px;
        outline: 0;
        z-index: 1;
        position: static;
    }

    .mintui-search:before {
        content: "\E604";
    }

    .mintui-search {
        display: inline-block;
        font-size: 22px !important;
        color: #222;
    }
    @keyframes circleProgressLoad_right {
        0% {
            /*border-top: 2px solid #ED1A1A;*/
            /*border-right: 2px solid #ED1A1A;*/
            -webkit-transform: rotate(45deg);
        }
        50% {
            /*border-top: 2px solid blue;*/
            /*border-right: 2px solid blue;*/
            /*border-left: 2px solid blue;*/
            /*border-bottom: 2px solid blue;*/
            -webkit-transform: rotate(225deg);
        }
        100% {
            /*border-left: 2px solid green;*/
            /*border-bottom: 2px solid green;*/
            -webkit-transform: rotate(225deg);
        }
    }

    @keyframes circleProgressLoad_left {
        0% {
            /*border-bottom: 2px solid #ED1A1A;*/
            /*border-left: 2px solid #ED1A1A;*/
            -webkit-transform: rotate(45deg);
        }
        50% {
            /*border-bottom: 2px solid blue;*/
            /*border-left: 2px solid blue;*/
            /*border-top: 2px solid blue;*/
            /*border-right: 2px solid blue;*/
            -webkit-transform: rotate(45deg);
        }
        100% {
            /*border-top: 2px solid green;*/
            /*border-right: 2px solid green;*/
            /*border-bottom: 2px solid green;*/
            /*border-left: 2px solid green;*/
            -webkit-transform: rotate(225deg);
        }
    }
</style>
