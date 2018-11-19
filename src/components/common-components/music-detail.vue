<template>
    <transition name="slide-fade">
        <div ref="aa" class="music-detail">
            <div class="go-back" @click="goBack()">
                <i class="iconfont icon-fanhui"></i>
            </div>
            <h1>{{title}}</h1>
            <div class="music-img" style="border: none">
                <img v-if="imgUrl" :src="imgUrl" style="border: none" width="100%" height="100%"
                     alt=""/>
                <div class="play-all" @click="clickPlayAll()">
                    <span>
                        <i class="iconfont icon-bofang"></i>
                        随机播放全部
                    </span>
                </div>
            </div>
            <div class="filter"></div>
            <div class="song-list">
                <ul>
                    <li v-for="(item,index) in data" :key="index">
                        <h2>{{item.songname}}</h2>
                        <p @click="navigateToDetail(index)">{{item.singer[0].name}} &nbsp;{{item.albumname}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
    import {CommonUtil} from "../../core/utils/common-util";
    import {mapActions} from 'vuex'

    export default {
        name: "music-detail",
        props: {
            title: {
                type: String,
                default: ''
            },
            imgUrl: {
                type: String,
                default: ''
            },
            data: {
                type: Array,
                default: function () {
                    return [{singer: [{name: ''}],}]
                }
            }
        },
        data() {
            return {
                id: '',
                cdList: [{}],
            }
        },
        comments: {},
        created() {
            // this.id = this.$route.params.id;
            // this.getCdListDetail();
        },
        methods: {

            clickPlayAll() {
                this.currentMusic(this.data);
                let index = CommonUtil.getRandomNumBoth(1, this.data.length + 1);
                this.currentMusicIndex(index);
                this.playerDetailShow(true)
            },
            navigateToDetail(index) {
                this.currentMusic(this.data);
                this.currentMusicIndex(index);
                this.playerDetailShow(true)
            },
            goBack() {
                this.$router.push({
                    path: '/'
                })
            },
            ...mapActions([
                'currentMusic',
                'currentMusicIndex',
                'playAll',
                'playerDetailShow'
            ])
        }
    }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
    .music-detail {
        position: fixed;
        z-index: 100;
        top: px2rem(-110px);
        left: 0;
        bottom: 0;
        right: 0;
        background: #222;
        .go-back {
            position: absolute;
            top: 0;
            left: px2rem(6px);
            z-index: 60;
            i {
                font-size: 22px;
                display: block;
                padding: px2rem(10px);
                color: #ffcd32;
            }

        }
        h1 {
            position: absolute;
            top: px2rem(12px);
            left: 10%;
            z-index: 40;
            width: 80%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
            line-height: px2rem(40px);
            font-size: px2rem(26px);
            color: #eee;
            text-shadow: 2px 3px 2px #333;
        }
        .music-img {
            position: relative;
            width: 100%;
            height: 0;
            padding-top: 70%;
            transform-origin: top;
            background-size: cover;
            /*animation: rotate infinite 3s;*/
            img {
                border: none;
                position: absolute;
                top: 0;
                left: 0;
                vertical-align: bottom;
            }
        }
        .filter {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(7, 17, 27, .4)
        }
        .play-all {
            position: absolute;
            bottom: px2rem(20px);
            z-index: 50;
            width: 100%;
            text-align: center;
            padding: px2rem(7px) 0;
            span {
                display: inline-block;
                box-sizing: border-box;
                width: px2rem(250px);
                height: px2rem(50px);
                margin: 0 auto;
                border: 1px solid #ffcd32;
                color: #ffcd32;
                border-radius: px2rem(100px);
                vertical-align: middle;
                font-size: 13px;
                line-height: 25px;
            }
        }
        .song-list {
            padding: px2rem(20px) px2rem(30px);
            height: 100%;
            overflow: auto;
            ul {
                padding-bottom: px2rem(450px);
                li {
                    h2 {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        color: #fff;
                        font-size: px2rem(25px);
                    }
                    p {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        margin-top: px2rem(4px);
                        color: hsla(0, 0%, 100%, .3);
                    }
                    margin-bottom: px2rem(20px);
                }
            }
        }

    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(100%);
        opacity: 0;
    }


</style>
