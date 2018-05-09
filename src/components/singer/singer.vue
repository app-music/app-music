<template>
    <div>
        <mt-index-list>
            <mt-index-section v-for="(item,index) in singerData" :key="index" :index="item.index">
                <template v-for="itemChild in item.childNode">
                    <div class="singer-l" @click="selectItem(itemChild.Fsinger_mid)">
                        <img class="singerImg" :src="itemChild._Fsinger_mid" alt="">
                        <span class="singer-name">{{itemChild.Fsinger_name}}</span>
                    </div>
                </template>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
    .singer-l {
        align-items: center;
        padding: px2rem(20px) 0 0 px2rem(30px);
    }

    .singer-name {
        margin-left: px2rem(20px);
        color: hsla(0, 0%, 100%, .5);
        font-size: px2rem(14px);
    }

    .singerImg {
        width: px2rem(80px);
        height: px2rem(80px);
        border-radius: 50%;
    }

</style>
<script>
    import {CommonUtil} from '../../core/utils/common-util';

    export default {
        data() {
            return {
                msg: 'hello vue',
                singerData: [],
            }
        },
        created() {
            this.getSingerList();
        },
        methods: {
            getSingerList() {
                let data, arr = [];
                let generateBig = CommonUtil.generateBig_1();
                this.$singerService.getSingerList().then(success => {
                    data = success.data.list;
                    data.forEach((_item, index) => {
                        _item._Fsinger_mid = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${_item.Fsinger_mid}.jpg?max_age=2592000`
                        if (index < 5) {
                            arr.push(_item);
                        }
                    });
                    this.singerData.push({index: '热', childNode: arr});
                    generateBig.forEach(item => {
                        let arr = data.filter((_item, index) => {
                            if (item === _item.Findex) {
                                return _item
                            }
                        });
                        let obj;
                        if (data.length > 0) {
                            obj = {index: item, childNode: arr};
                        }
                        this.singerData.push(obj)
                    })
                });
                console.log(this.singerData);
            },
            selectItem(id){
                this.$router.push({
                    path: `/singer/detail/${id}`,
                })
            },

        }

    }
</script>
