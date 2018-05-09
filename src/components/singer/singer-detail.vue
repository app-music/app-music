<template>

        <music-detail :title="title" :imgUrl="imgUrl" :data="songData"></music-detail>

</template>

<script>
    import musicDetail from '../common-components/music-detail'
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
                    console.log(success);
                    this.title = success.data.singer_name;
                    let songs = [];
                    success.data.list.forEach(item=>{
                        let {musicData} = item;
                        // musicData.songUrl = `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`;
                        songs.push(musicData)
                    });
                    this.$songService.getSongUrlList(songs).then(result => {
                        console.log(result);
                        let midUrlInfo = result.url_mid.data.midurlinfo;
                        songs.forEach((item, index) => {
                            item.songUrl = `http://dl.stream.qqmusic.qq.com/${midUrlInfo[index].purl}`
                        });
                        this.songData = songs;
                    }, failed => {
                        console.log(failed);
                    })

                    console.log(songs);
                })
            },
        },

    }

</script>

<style scoped>

</style>