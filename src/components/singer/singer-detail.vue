<template>

        <music-detail :title="title" :imgUrl="imgUrl" :data="songData"></music-detail>

</template>

<script>
    import musicDetail from '../common-components/music-detail'
    import {getSongUrlList} from "../../core/utils/song-util";
    export default {
        name: "singer-detail",
        data() {
            return {
                id: '',
                songData: [],
                title:'',
                imgUrl:'',
            }
        },
        components: {
            musicDetail,
        },
        created() {
            this.id = this.$route.params.id;
            this.imgUrl=`https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.id}.jpg?max_age=2592000`;
            this.getSingerDetail(this.id);
        },
        methods:{
            getSingerDetail(id){
                this.$singerService.getSingerDetail(id).then(success=>{
//                    console.log(success);
                    this.title = success.data.singer_name;
                    let songs = [];
                    success.data.list.forEach(item=>{
                        let {musicData} = item;
                        songs.push(musicData)
                    });
                    getSongUrlList(songs).then(res=>{
                        this.songData = res;
                    },failed=>{

                    })

                })
            },
        },

    }

</script>

<style scoped>

</style>
