<template>
    <div id="seniority">
        <ul>
            <li v-for="(item,index) in listData" class="wrap">
                <!--{{item.id}}-->
                <img height="100" :src="item.picUrl" alt="">
                <ul>
                    <li v-for="(title,index) in item.songList" class="info" @click="goToDetail(item.id)">
                        {{index+1}} {{title.songname}}-{{title.singername}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style type="text/scss" lang="scss" rel="stylesheet/scss" scoped>
    li {
        overflow: hidden;
        margin-top: px2rem(10px);
    }

    .wrap {
        background: #333;
        display: flex;
        margin: px2rem(10px) px2rem(20px);
        ul {
            flex: 1;
            margin-left: px2rem(20px);
            overflow: hidden;
            .info {
                margin-top:px2rem(14px);
                height: px2rem(40px);
                font-size: px2rem(26px);
                line-height:px2rem(40px);
                color: #828282;
                width: calc(100% - 20px);
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

        }
    }
</style>

<script>
    export default {
        data() {
            return {
                listData: []
            }
        },
        created() {
            this.getTopList();
        },
        methods: {
            getTopList() {
                this.$seniorityService.getTopList().then(success => {
                    this.listData = success.data.topList;
                }, failed => {
                    console.log(failed);
                })
            },
            goToDetail(id){
                this.$router.push({
                    path: `/seniority/detail/${id}`,
                })
            }
        }
    }
</script>
