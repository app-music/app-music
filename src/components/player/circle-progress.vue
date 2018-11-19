<template>
    <div class="circleProgress_wrapper">
        <div class="wrapper right">
            <div ref="rightCircle" v-bind:style="rightTransformDeg" class="circleProgress rightcircle"></div>
        </div>
        <div class="wrapper left">
            <div ref="leftCircle" v-bind:style="leftTransformDeg" class="circleProgress leftcircle"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

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
            },
            currentTime: {
                type: Number,
                default: 0,
            }
        },
        data() {
            return {}
        },
        created() {
        },
        computed: {
            rightTransformDeg() {
                // 右边半圆 三种状态
                if (this.currentTime && this.time && this.currentTime >= this.time / 2 && this.currentTime < this.time) {
                    // 播放超过一半的时候 返回 半圆时的角度 保存进度
                    return {transform: `rotate(${180 + 45}deg)`}
                } else if (this.currentTime < this.time / 2) {
                    // 返回播放时的角度
                    return {transform: `rotate(${this.currentTime / this.time * 360 + 45}deg)`}
                } else {
                    // 播放结束返回初始角度
                    return {transform: `rotate(${45}deg)`}
                }

            },
            leftTransformDeg() {
                // 左边半圆 两种状态
                if (this.currentTime && this.time && this.currentTime >= this.time / 2&& this.currentTime < this.time) {
                    // 播放超过一半的时候 半圆开始旋转
                    return {transform: `rotate(${this.currentTime / this.time * 360 + 45 - 180}deg)`}
                } else if (this.currentTime === this.time) {
                    // 播放结束 返回初始 角度
                    return {transform: `rotate(${45}deg)`}
                }
            },
            ...mapGetters([
                'currentMusicIndex',
                'getCurrentMusic',
                'playAll',
                'currentMusicTime'
            ]),
        },
        methods: {},
        watch: {
            playAll(value) {
                // 使用动画控制圆形进度条
                // if (value.isPlay) {
                //     this.$refs.rightCircle.style.animationPlayState = 'running';
                //     this.$refs.rightCircle.style.WebkitAnimation = `circleProgressLoad_right ${this.currentMusicTime}s linear`;
                //     setTimeout(e => {
                //         this.$refs.leftCircle.style.WebkitAnimation = `circleProgressLoad_left ${this.currentMusicTime}s linear`;
                //     }, this.currentMusicTime / 2)
                // } else {
                //     this.$refs.rightCircle.style.animationPlayState = 'paused'
                // }
            }
        }

    }

</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
    .circleProgress_wrapper {
        width: px2rem(60px);
        height: px2rem(60px);
        position: relative;
    }

    .wrapper {
        width: px2rem(30px);
        height: px2rem(70px);
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
        width: px2rem(55px);
        height: px2rem(55px);
        border: px2rem(3px) solid rgb(232, 232, 12);
        border-radius: 50%;
        position: absolute;
        top: 0;
        transform: rotate(45deg);
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
