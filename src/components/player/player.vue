<template>
    <div>
        <div class="sing-player" v-if="getCurrentMusic">
            <div class="sing-icon" @click="detailShow()">
                <img :src="getCount.image">
            </div>
            <div class="text" @click="detailShow()">
                <p class="desc" v-html="getCount.name"></p>
                <h2 class="name" v-html="getCount.singer[0].name"></h2>
            </div>
            <div class="progress-circle" @click="playMusic()">
                <div class="play-music">
                    <i :class="playAllMusic"></i>
                    <!--<i v-if="!paused" class="iconfont icon-ai07"></i>-->
                </div>
                <circle-progress :isPlay="isPlay" :time="time" :currentTime="currentTime"></circle-progress>
            </div>
        </div>
        <player-detail v-if="playerDetailShow" :currentTime="currentTime"
                       @playerDetailEvent="getPlayDetailEvent"
                       @playerDetailEventEnd="getPlayDetailEventEnd"
        ></player-detail>
        <audio id="aa" ref="audio" @ended="ended" @play='songReady' :src="getCount.url" @timeupdate="timeUpdate">
        </audio>
        <!--播放本地音乐测试-->
        <!--<audio id="aa" ref="audio" @play='songReady' @timeupdate="timeUpdate">-->
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
                // playerDetailShow: false,
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
            playerDetailShow() {
                return this.playerDetailShow
            },
            isPlay() {
                return this.playAll.isPlay;
            },
            ...mapGetters([
                'currentMusicIndex',
                'getCurrentMusic',
                'playAll',
                'playerDetailShow'
            ]),
        },
        watch: {
            playAll(value) {
                this.$refs.audio[value.isPlay ? 'play' : 'pause']();
                this.time = this.$refs.audio.duration;

            },
            currentMusicIndex(value) {
                this.$nextTick(() => {
                    if (value !== -1) {
                        setTimeout(e => {
                            try {
                                this.$refs.audio.play();
                                this.currentMusicTime(this.$refs.audio.duration);
                                this.playIt({isPlay: true});
                            } catch (e) {
                                throw new Error(e)
                            }
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
                try {
                    this.time = this.$refs.audio.duration;
                    this.currentMusicTime(this.time)
                } catch (e) {
                    throw new Error(e)
                }

            },
            getPlayDetailEvent(evt) {
                this.$refs.audio.pause();
                this.$refs.audio.currentTime = evt.currentTime;


            },
            getPlayDetailEventEnd(evt) {
                this.$refs.audio.currentTime = evt.currentTime;
                if (this.playAll.isPlay) {
                    this.$refs.audio.play();
                }
            },
            timeUpdate(e) {
                this.currentTime = e.target.currentTime;
                if (this.currentTime === this.time) {
                    this.playIt({isPlay: false});
                }
            },
            songReady() {
                let playHistory = JSON.parse(localStorage.getItem('__playHistory__')) || [];
                if (this.getCurrentMusic[this.currentMusicIndex]) {
                    let index = playHistory
                        .findIndex(item => item.songid === this.getCurrentMusic[this.currentMusicIndex].songid);
                    if (index >= 0) {
                        playHistory.splice(index, 1);
                    } else {

                    }
                    playHistory.unshift(this.getCurrentMusic[this.currentMusicIndex]);

                }
                localStorage.setItem('__playHistory__', JSON.stringify(playHistory));
            },
            detailShow() {
                this._detailShow(true)
            },
            ended() {
                this.playIt({isPlay: false});
                if (this.currentMusicIndex === this.getCurrentMusic.length - 1) {
                    this.currentIndex(0)
                } else {
                    this.currentIndex(this.currentMusicIndex + 1);
                }

            },
            ...mapActions({
                playIt: 'playAll',
                currentMusicTime: 'currentMusicTime',
                _detailShow: 'playerDetailShow',
                currentIndex: 'currentMusicIndex',
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
        height: px2rem(80px);
        width: 100%;
        z-index: 999;
        background: #333;
        display: flex;
        .sing-icon {
            s-flex: 0 0 px2rem(60px);
            flex: 0 0 px2rem(60px);
            width: px2rem(60px);
            height: px2rem(60px);
            padding: 0 px2rem(10px) 0 px2rem(20px);
            img {
                width: px2rem(60px);
                height: px2rem(60px);
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
            height: px2rem(80px);
            overflow: hidden;
            h2 {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: px2rem(18px);
                color: hsla(0, 0%, 100%, .3);
            }
            p {

                margin-bottom: px2rem(2px);
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: px2rem(20px);
                color: #fff;
            }
        }
        .progress-circle {
            box-sizing: content-box;
            width: px2rem(60px);
            height: px2rem(60px);
            position: relative;
            margin-right: px2rem(0px);
            .play-music {
                position: absolute;
                left: px2rem(31px);
                top: px2rem(30px);
                transform: translate(-0.15rem, -0.15rem);
                color: red;
                i {
                    font-size: px2rem(30px);

                }
                .first {
                    display: block;
                    transform: translateX(2px);
                }
            }
        }
    }

</style>
