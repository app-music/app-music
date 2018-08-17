<template>
    <div id="app">
        <div id="head">
            <header class="header">
                <h3>Monica Music</h3>
                <span style="position: absolute;top: 50%;color:yellow;transform:translateY(-50%);right: 64px"
                      @click="logout()"
                >注销</span>
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
        <router-view class="router-view" style=""></router-view>
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
            },
            logout(){
                localStorage.removeItem('loginInfo');
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
    @import "assets/css/utils";

    body {
        background: #222!important;
    }

    #head {
        height: px2rem(60px);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #222;
        z-index: 20;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background: #222;
        header {
            position: relative;
            h3 {
                margin: 0;
                height: px2rem(44px);
                line-height: px2rem(44px);
                text-align: center;
                color: #ffcd32;
                font-size: px2rem(28px);
                background: #222;
                padding: px2rem(10px) 0 px2rem(8px);
            }
            .user {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: px2rem(5px);
            }
        }

        .mint-navbar .mint-tab-item.is-selected {
            border-bottom: none;
            margin-bottom: px2rem(-3px);
        }
        .nav-bar {
            background: #222;
            .nav-item {
                .router-link-active {
                    border-bottom: px2rem(2px) solid #ffcd32;
                    margin-bottom: px2rem(3px);
                }
                padding: 0;
                .nav-item-link {
                    color: #ffcd32;
                    display: block;
                    font-size: px2rem(25px);
                    padding: px2rem(17px) 0;
                    text-decoration: none;
                }
            }
        }
        .user {
            position: absolute;
            i {
                display: block;
                padding-right: px2rem(20px);
                font-size: px2rem(36px);
                color: #ffcd32;
            }
        }
    }

    .mint-indexsection-index {
        margin: 0;
        padding: px2rem(10px);
        background: #333333!important;
    }

    .mint-indexlist-nav {
        border-radius: px2rem(10px);
        color: #fafafa;
        text-align: center;
        background: rgba(0, 0, 0, .3)!important;
        font-family: Helvetica;
        border: none!important;
    }

    .mint-indexsection-index {
        /*height: 30px;*/
        /*line-height: 30px;*/
        padding-left: px2rem(20px);
        font-size: px2rem(12px);
        color: hsla(0, 0%, 100%, .5);
        background: #333;
    }

    .mint-searchbar {
        flex: 1;
        margin: 0 px2rem(5px);
        line-height: px2rem(18px);
        background: #333;
        color: #fff;
        font-size: px2rem(14px);
        outline: 0;
        z-index: 1;
        position: static;
    }

    .mintui-search:before {
        content: "\E604";
    }

    .mintui-search {
        display: inline-block;
        font-size: px2rem(22px) !important;
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

    mt-swipe-item {
        .swipe-recommend {
        }
    }

    .router-view {
        margin-bottom: px2rem(110px);
        margin-top: px2rem(110px);
    }
    @keyframes rotate {
        0% {
            transform: rotate(0);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
