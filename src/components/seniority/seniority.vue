<template>
    <div id="seniority">
        <ul>
            <li v-for="(item,index) in listData" class="wrap">
                <!--{{item.id}}-->
                <img height="100" :src="item.picUrl" alt="">
                <ul>
                    <li v-for="(title,index) in item.songList" class="info">
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
        margin-top: 10px;
    }

    .wrap {
        background: #333;
        display: flex;
        margin: 10px 20px;
        ul {
            flex: 1;
            margin-left: 20px;
            overflow: hidden;
            .info {
                height: 20px;
                font-size: 12px;
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
                    console.log(success);
                    this.listData = success.data.topList;
                }, failed => {
                    console.log(failed);
                })
            }
        }
    }
</script>
