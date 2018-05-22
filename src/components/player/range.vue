<template>
    <div class="range">
        <slot name="start"></slot>
        <div class="range-content" ref="content">
            <div class="range-runway" ref="runWay" style="border-top-width: 2px;">
            </div>
            <div class="range-progress" ref="progress" v-bind:style="{width:value+'%',height:'2px'}">
            </div>
            <div class="range-thumb" ref="thumb" v-bind:style="{left:value+'%'}"></div>
        </div>
        <slot name="end"></slot>
    </div>
</template>

<script>
    import draggable from './draggable.js';
    export default {
        name: "range",
        props: {
            value: {
                type: Number,
                default: 0,
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            },
            disabled: {
                type: Boolean,
                default: false
            },
            barHeight: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                currentValue:''
            }
        },
        mounted() {
            const thumb = this.$refs.thumb;
            const content = this.$refs.content;
            const getThumbPosition = () => {
                const contentBox = content.getBoundingClientRect();
                const thumbBox = thumb.getBoundingClientRect();
                return {
                    left: thumbBox.left - contentBox.left,
                    top: thumbBox.top - contentBox.top,
                    thumbBoxLeft: thumbBox.left
                };
            };
            let dragState = {};
            draggable(thumb, {
                start: (event) => {
                    if (this.disabled) return;
                    const position = getThumbPosition();
                    const thumbClickDetalX = event.clientX - position.thumbBoxLeft;
                    dragState = {
                        thumbStartLeft: position.left,
                        thumbStartTop: position.top,
                        thumbClickDetalX: thumbClickDetalX
                    };
                },
                drag: (event) => {
                    if (this.disabled) return;
                    const contentBox = content.getBoundingClientRect();
                    const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft - dragState.thumbClickDetalX;
                    const stepCount = Math.ceil((this.max - this.min) / this.step);
                    const newPosition = (dragState.thumbStartLeft + deltaX) - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);
                    let newProgress = newPosition / contentBox.width;
                    if (newProgress < 0) {
                        newProgress = 0;
                    } else if (newProgress > 1) {
                        newProgress = 1;
                    }
                    this.currentValue = Math.round(this.min + newProgress * (this.max - this.min));
                    this.$emit('dragEvent', Math.round(this.min + newProgress * (this.max - this.min)));
                },
                end: () => {
                    if (this.disabled) return;
                    this.$emit('dragEndEvent', this.currentValue);
                    dragState = {};
                }
            });
            let that = this;
            const newPosition= function (){
                const contentBox = content.getBoundingClientRect();
                const deltaX = event.pageX - contentBox.left-thumb.offsetWidth;
                const stepCount = Math.ceil((that.max - that.min) / that.step);
                const newPosition =deltaX-(deltaX) % (contentBox.width / stepCount);
                let newProgress = newPosition / contentBox.width;
                that.$emit('dragEndEvent', Math.round(that.min + newProgress * (that.max - that.min)));
            };
            const runWay = this.$refs.runWay;
            runWay.addEventListener('click',newPosition);
            const progress = this.$refs.progress;
            progress.addEventListener('click',newPosition)

        }

    }


</script>

<style scoped>
    .range {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 30px;
        line-height: 30px;
    }

    .range-content {
        margin:0 15px;
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        /*margin-right: 30px;*/
    }

    .range-runway {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
        right: 0;
        border-top-color: #a9acb1;
        border-top-style: solid;
    }

    .range-progress {
        position: absolute;
        display: block;
        background-color: #26a2ff;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 0;
    }

    .range-thumb {
        background-color: #ffcd32;
        background-clip: content-box;
        position: absolute;
        padding: 3px;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border: 1px solid #ccc;
        border-radius: 100%;
        cursor: move;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }
</style>