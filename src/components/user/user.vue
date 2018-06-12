<template>
    <transition name="user">
        <div class="user">
            <div class="go-back" @click="$router.go(-1)">
                <i class="iconfont icon-fanhui"></i>
            </div>
            <mt-navbar v-model="selected" class="mtnav">
                <mt-tab-item id="1" class="mt-item"><span v-bind:class="{active:selected==='1'}">我喜欢的</span>
                </mt-tab-item>
                <mt-tab-item id="2" class="mt-item"><span v-bind:class="{active:selected==='2'}">最近听的</span>
                </mt-tab-item>
            </mt-navbar>
            <div id="play">
                <!--先不显示这个图标-->
                <!--<i class="iconfont icon-suijibofang"></i>-->
                <!--<span>随机播放全部</span>-->
                <span>
                        <i class="iconfont icon-bofang"></i>
                        随机播放全部
                    </span>
            </div>

            <!-- tab-container -->

            <mt-tab-container style="max-height: 500px;overflow: scroll;padding: 5px" v-model="selected">
                <mt-tab-container-item id="1">
                    <!--fav part-->
                    <div v-for="(item,index) in fav" class="listWrap">
                        <p class="singerName">
                            {{item.singer[0].name}}</p>
                        <p class="songName">
                            {{item.name}}
                        </p>

                    </div>
                </mt-tab-container-item>

                <mt-tab-container-item id="2">
                    <!--history part-->
                    <div v-for="(item,index) in his" class="listWrap">
                        <p class="singerName">
                            {{item.singer[0].name}}</p>
                        <p class="songName">
                            {{item.name}}
                        </p>

                    </div>
                </mt-tab-container-item>

            </mt-tab-container>
        </div>
    </transition>
</template>

<style type="text/scss" lang="scss" rel="stylesheet/scss" scoped>
    .user {
        position: fixed;
        z-index: 100;
        top: px2rem(-110px);
        left: 0;
        bottom: 0;
        right: 0;
        background: #222;
        .mtnav {
            background: #222;
            height: 30px;
            width: 240px;
            margin: -5px auto;
            span {
                /*color: #ffffff;*/
                /*background: #333;*/
                display: inline-block;
                height: 30px;
                width: 120px;
                font-size: 14px;
                line-height: 30px;
                text-align: center;
                border: 1px solid #333;
                border-collapse: collapse;
                border-radius: 4px 0 0 4px;
                color: hsla(0, 0%, 100%, .3);
            }
            .mt-item:nth-of-type(2) span {
                border-radius: 0 4px 4px 0;
                border-left: none;
                background: #222;
            }
        }
        .go-back {
            position: absolute;
            top: 0;
            left: px2rem(6px);
            z-index: 60;

            i {
                font-size: 26px !important;
                display: block;
                padding: px2rem(10px);
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
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(100%);
        /*opacity: 0;*/
    }

    ul {
        display: flex;
        color: #fff;
        li {
            flex: 1;
        }

    }

    #play {

        height: px2rem(46px);
        width: px2rem(240px);
        text-align: left;
        color: #999;
        border: 1px solid #999;
        border-radius: px2rem(30px);
        margin: px2rem(90px) auto 0 auto;

        /*span {*/
            /*display: block;*/
            /*line-height: px2rem(46px);*/
            /*text-align: center;*/
            /*font-size: px2rem(26px);*/
            /*color: #ffffff;*/
        /*}*/
        span {
            display: inline-block;
            box-sizing: border-box;
            width: px2rem(250px);
            height: px2rem(50px);
            margin: 0 auto;
            border-radius: px2rem(100px);
            vertical-align: middle;
            font-size: 13px;
            line-height: 25px;
        }
        /*先不要这个图标，影响市容*/

          i {
              color: #ccc;
              vertical-align: middle;
              display: inline-block;
              margin-left: px2rem(15px);
          }




    }

    .active {
        background: #333;
        color: #ffffff !important;
    }

    .listWrap {
        height: px2rem(80px);
        padding-left: px2rem(12px);
        font-size: px2rem(30px);
        margin-bottom: px2rem(24px);
        p {
            height: px2rem(40px);
            line-height: px2rem(40px);
        }
        .singerName {
            color: #ffffff;
        }
        .songName {
            color: #666;
        }
    }
</style>

<script>

    export default {
        data() {
            return {
                selected: '1',
                msg: 'hello vue',
                ok: false,
                fav: [],
                his: [],

            }
        },
        created() {
            setTimeout(e => {
                this.ok = true;
            }, 5000);
            this.getFav();
            this.getHistory();
        },
        methods: {
            getFav() {
                this.fav = JSON.parse(localStorage.getItem('__favoriteMusic__')) || [];

            },
            getHistory() {
                this.his = JSON.parse(localStorage.getItem('__playHistory__')) || [];
                console.log(this.his);
            }
        }
    }


</script>
