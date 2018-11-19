<template>

    <transition name="player">

        <div class="player">
            <div data-v-35618e92="" class="background">
                <img  width="100%" height="100%" :src="currentSong.image">
            </div>
            <div class="hidden" @click="detailClose()">
                <i class="iconfont icon-xiangxia02"></i>
            </div>
            <h3>
                <h2>{{currentSong.name}}</h2>
                {{currentSong.singer[0].name}}
            </h3>
            <div class="music-img">
                <div>
                    <img ref="image" :style="playStaus2" height="100%" width="100%" :src="currentSong.image" alt=""/>
                </div>
                <h2 style="font-size: 14px">{{currentLyric}}</h2>
            </div>
            <div class="player-control">
                <div class="progress">
                    <!--<mt-progress :value="currentTime/getCurrentMusicTime*100">-->
                    <!--<div slot="start">{{currentTime*1000 | formatDate}}</div>-->
                    <!--<div slot="end">{{getCurrentMusicTime*1000 |formatDate}}</div>-->
                    <!--</mt-progress>-->
                    <!--<mt-range v-model="rangeValue" :bar-height="2" >-->
                    <!--<div slot="start">{{currentTime*1000 | formatDate}}{{''}}</div>-->
                    <!--<div slot="end">{{getCurrentMusicTime*1000 |formatDate}}{{''}}</div>-->
                    <!--</mt-range>-->
                    <range :value="currentTime/getCurrentMusicTime*100"
                           :max="getCurrentMusicTime"
                           @dragEvent="rangeChange"
                           @dragEndEvent="rangeChangeEnd">
                        <div slot="start" style="color: #eaffea">{{currentTime*1000 | formatDate}}</div>
                        <div slot="end" style="color: #eaffea">{{getCurrentMusicTime*1000 |formatDate}}</div>
                    </range>
                </div>
                <div class="player-button">
                    <span>
                        <i @click="" class="iconfont icon-suijibofang"></i>
                        <i @click="previous()" class="iconfont icon-shangyishou1"></i>
                        <i @click="play()" :class="playStaus"></i>
                        <i @click="next()" class="iconfont icon-xiayishou">{{musicChange}}</i>
                        <i @click="loveIt()" v-if="!isFavorite" class="iconfont icon-xihuan"></i>
                        <!--实心爱心-->
                        <i @click="loveIt()" v-if="isFavorite" class="iconfont icon-xihuan6"></i>
                    </span>
                </div>
            </div>
        </div>

    </transition>
</template>

<script>
    import Song from "../../core/utils/song";
    import {mapActions, mapGetters} from 'vuex';
    import {CommonUtil} from '../../core/utils/common-util';
    import range from './range.vue'
    import Lyric from 'lyric-parser'
    export default {
        name: "player-detail",
        props: {
            currentTime: {
                type: Number,
                default: 0,
            }
        },
        data() {
            return {
                start: '',
                end: '',
                isFavorite: 'false',
                rangeValue: '10',
                image:'',
                lyric:'',
                currentLyric:'',
            }
        },
        components: {
            range
        },
        mounted(){
           this.image = this.$refs.image;
        },
        computed: {
            currentSong() {
                if (this.getCurrentMusic) {
                    let songs = this.getCurrentMusic;
                    let a = new Song(songs[this.currentMusicIndex]);
                    return a;
                }
            },
            playStaus() {
                if (this.playAll.isPlay) {
                    return 'iconfont icon-zanting2'
                } else {
                    return 'iconfont icon-bofang'

                }
            },
            playStaus2(){
                if (this.playAll.isPlay){

                    return {animation: 'rotate infinite linear 20s'};
                } else {
                    return {animation: 'none'};
                }
            },
            getCurrentMusicTime() {
                if(this.lyric){
                    this.lyric.seek(this.currentMusicTime*1000)
                }
                return this.currentMusicTime;
            },
            musicChange() {
                if (this.getCurrentMusic) {
                    try {
                        let id = this.getCurrentMusic[this.currentMusicIndex].songid;
                        let favoriteMusicData = JSON.parse(localStorage.getItem('__favoriteMusic__')) || [];
                        let index = favoriteMusicData.findIndex(item => item.songid === id);
                        this.$songService.getSongLyric(this.getCurrentMusic[this.currentMusicIndex].songmid).then(res=>{
                            let lyric = Base64.decode(res.lyric);

                            this.lyric = new Lyric(lyric,({lineNum, txt})=>{

                                this.currentLyric = txt
                            });
                            this.lyric.play()

                        });
                        this.$nextTick(() => {
                            this.isFavorite = index !== -1
                        });
                        return '';
                    } catch (e) {
                    }

                } else {
                    return 'iconfont icon-xihuan'
                }
            },

            ...mapGetters([
                'currentMusicIndex',
                'playAll',
                'currentMusicTime',
                'getCurrentMusic',
            ])
        },
        watch:{
            play(value){
                if(value){
                    this.lyric.play();
                }else {
                    this.lyric.stop();
                }
            }
        },
        created() {
        },
        methods: {
            detailClose() {
                this.playerDetailShow(false);
                // this.$emit('playerDetailEvent', {playerDetailShow: false})
            },
            previous() {
                if (this.currentMusicIndex === 0) {
                    this.currentIndex(this.getCurrentMusic.length - 1)
                } else {
                    this.currentIndex(this.currentMusicIndex - 1);
                }
                this.playMusic({isPlay: true});
            },
            next() {
                if (this.currentMusicIndex === this.getCurrentMusic.length - 1) {
                    this.currentIndex(0)
                } else {
                    this.currentIndex(this.currentMusicIndex + 1);
                }
                this.playMusic({isPlay: true});
            },
            play() {
                this.playMusic({isPlay: !this.playAll.isPlay});
            },

            loveIt() {
                if (this.getCurrentMusic) {
                    let songs = this.getCurrentMusic;
                    songs[this.currentMusicIndex].islove = !songs[this.currentMusicIndex].islove;
                    let favoriteMusicData = JSON.parse(localStorage.getItem('__favoriteMusic__')) || [];
                    if (songs[this.currentMusicIndex].islove) {
                        this.isFavorite = true;
                        // let a = new Song(songs[this.currentMusicIndex]);
                        favoriteMusicData.push(songs[this.currentMusicIndex]);
                    } else {
                        this.isFavorite = false;
                        let songId = songs[this.currentMusicIndex].songid;
                        let index = favoriteMusicData.findIndex(item => item.songid === songId);
                        favoriteMusicData.splice(index, 1);
                    }
                    localStorage.setItem('__favoriteMusic__', JSON.stringify(favoriteMusicData));
                }
            },
            rangeChangeEnd($event) {
                // this.currentTime = $event;
                this.lyric.seek($event*1000);
                // debugger
                // if(this.playMusic.isPlay){
                //     this.lyric.play()
                // }else {
                //     this.lyric.stop()
                // }
                this.$emit('playerDetailEventEnd', {currentTime: $event})
            },
            rangeChange($event) {
                this.lyric.seek($event*1000);
                this.$emit('playerDetailEvent', {currentTime: $event})
                // this.currentTime = $event;
            },
            ...mapActions({
                currentIndex: 'currentMusicIndex',
                playMusic: 'playAll',
                playerDetailShow: 'playerDetailShow'
            })
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return CommonUtil.dateFmt('mm:ss', date);
            }
        },
    }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
    .player-enter-active {
        transition: all .8s ease;
    }

    .player-leave-active {
        transition: all .8s ease;
    }

    .player-enter, .player-leave-to {
        transform: translateY(100%);
        opacity: 0;
    }

    .player {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #222;
        background-repeat:no-repeat ;
        background-size: cover;
        .hidden {
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
        .background{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: .6;
            -webkit-filter: blur(20px);
        }
        h3 {
            position: absolute;
            top: px2rem(2px);
            left: 10%;
            z-index: 40;
            width: 80%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
            line-height: px2rem(40px);
            font-size: 14px;
            color: #fff;
            height: 40px;
            padding-top: 10px;
        }
        h2 {
            line-height: px2rem(20px);
            text-align: center;
            color: #fff;
            font-size: 18px;
            padding-bottom: 10px;
        }
        .music-img {

            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: px2rem(150px);
            width: 80%;
            img {
                border-radius: 50%;
            }
            h2 {
                margin-top: px2rem(100px);
            }
        }
        .player-control {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: px2rem(50px);
            .progress {
                margin: 10px auto;
                width: 90%;

            }
            .player-button {
                text-align: center;
                display: inline-block;
                width: 100%;
                height: px2rem(50px);
                vertical-align: middle;
                i {
                    margin-left: px2rem(20px);
                    font-size: 40px;
                    color: #ffcd32bd;
                }
                i:nth-of-type(3) {
                    font-size: 50px;
                    line-height: px2rem(50px);
                }
            }
        }
    }


</style>
