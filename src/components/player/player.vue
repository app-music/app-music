<template>
    <div>
        <div class="sing-player">
            <div class="sing-icon" @click="playerDetailShow =!playerDetailShow">
                <img
                     :src="getCount.image">
            </div>
            <div class="text">
                <h2 class="name" v-html="getCount.singer[0].name"></h2>
                <p class="desc" v-html="getCount.name"></p>
            </div>
            <div class="progress-circle" @click="playMusic()">
                <div class="play-music">
                    <i :class="playAllMusic"></i>
                    <!--<i v-if="!paused" class="iconfont icon-ai07"></i>-->
                </div>
                <circle-progress :isPlay="paused" :time="time" :currentTime="currentTime"></circle-progress>
            </div>
        </div>
        <player-detail v-if="playerDetailShow" :currentSong="getCount" :currentTime="currentTime"
                       @playerDetailEvent="getPlayDetailEvent"></player-detail>
        <audio id="aa" ref="audio" :src="getCount.url" @timeupdate="timeUpdate">
        </audio>
        <!--播放本地音乐测试-->
        <!--<audio id="aa" ref="audio"  @timeupdate="timeUpdate">-->
            <!--<source src="./Jam.mp3">-->
        <!--</audio>-->
    </div>
</template>

<script>

    import circleProgress from './circle-progress';
    import playerDetail from './player-detail';
    import {mapGetters, mapActions} from 'vuex'
    import Song from "../../core/utils/song";

    export default {
        name: "player",
        data() {
            return {
                paused: true,
                count: '',
                song: {},
                msg: false,
                time: 0,
                playerDetailShow: false,
                currentSong: {},
                currentTime: 0,
            }

        },
        components: {
            circleProgress,
            playerDetail
        },
        created() {

        },
        computed: {
            getCount() {
                if (this.getCurrentMusic) {
                    let songs = this.getCurrentMusic;
                    this.paused = true;
                    let a = new Song(songs[this.currentMusicIndex]);
                    console.log(a);
                    return a;
                } else {
                    return new Song({singer: [{}]})
                }
            },
            playAllMusic() {
                if (this.playAll.isPlay) {
                    return 'iconfont icon-ai07 '
                } else {
                    return 'iconfont icon-bofang1'
                }

            },
            ...mapGetters([
                'currentMusicIndex',
                'getCurrentMusic',
                'playAll',
            ]),
        },
        watch: {
            playAllMusic: {
                deep: true,
                handler() {
                    this.$refs.audio[this.playAll.isPlay ? 'play' : 'pause']();
                    // this.time = this.$refs.audio.duration;
                    // this.currentMusicTime(this.time)
                }
            },
            currentMusicIndex(value) {
                this.$nextTick(() => {
                    if (value) {
                        setTimeout(e => {
                            this.$refs.audio.play();
                            this.currentMusicTime(this.$refs.audio.duration);
                            this.playIt({isPlay: true});
                            console.log(this.$refs.audio.duration);
                        }, 1000)
                    }
                })
            }
        },
        methods: {
            playMusic() {
                this.paused = !this.paused;
                this.playIt({isPlay: !this.playAll.isPlay});
                this.$refs.audio[this.playAll.isPlay ? 'play' : 'pause']();
                this.time = this.$refs.audio.duration;
                this.currentMusicTime(this.time)
            },
            getPlayDetailEvent(evt) {
                this.playerDetailShow = evt.playerDetailShow;

            },
            timeUpdate(e) {
                this.currentTime = e.target.currentTime;
                if(this.currentTime === this.time){
                    this.playIt({isPlay: false});
                }
            },
            ...mapActions({
                playIt: 'playAll',
                currentMusicTime: 'currentMusicTime'
            })

        },
    }
</script>

<style scoped type="text/scss" rel="stylesheet/scss" lang="scss">
    .sing-player {
        position: fixed;
        align-items: center;
        left: 0;
        bottom: 0;
        height: px2rem(60px);
        width: 100%;
        z-index: 999;
        background: #333;
        display: flex;
        .sing-icon {
            s-flex: 0 0 px2rem(40px);
            flex: 0 0 px2rem(40px);
            width: px2rem(40px);
            height: px2rem(40px);
            padding: 0 px2rem(10px) 0 px2rem(20px);
            img {
                width: px2rem(40px);
                height: px2rem(40px);
                border-radius: 50%;
            }
        }
        .text {
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex: 1;
            flex: 1;
            line-height: px2rem(20px);
            overflow: hidden;
            h2 {
                margin-bottom: px2rem(2px);
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: px2rem(14px);
                color: #fff;
            }
            p {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 12px;
                color: hsla(0, 0%, 100%, .3);
            }
        }
        .progress-circle {
            box-sizing: content-box;
            width: px2rem(30px);
            height: px2rem(30px);
            position: relative;
            margin-right: px2rem(20px);
            .play-music {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: red;
                i {
                    font-size: 20px;

                }
                .first {
                    display: block;
                    transform: translateX(2px);
                }
            }
        }
    }

</style>
