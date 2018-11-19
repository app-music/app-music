<template>

  <music-detail :title="title" :data="data" :imgUrl="imgUrl"></music-detail>
</template>

<script>
  import musicDetail from '../common-components/music-detail';
  import {getSongUrlList} from "../../core/utils/song-util";
    export default {
      name: "seniority-detail",
      data(){
        return {
          id: '',
          data: [],
          title: '',
          imgUrl: ''

        }
      },
      components: {
        musicDetail,
      },
      created(){
        this.id = this.$route.params.id;
        this.getTopListDetail(this.id);
      },
      methods: {
//        getTopListDetail(id){
//          this.$seniorityService.getTopListDetail(id).then(success=>{
//            console.log(success);
//        })
//        },
        getTopListDetail(id){
          this.$seniorityService.getTopListDetail(id).then(success=>{
          this.imgUrl=success.topinfo.MacDetailPicUrl;
          this.title = success.topinfo.ListName;
          let arr=[];
          success.songlist.forEach(item=>{
            let {data}=item;
          arr.push(data);
          })
          getSongUrlList(arr).then(res=>{
            this.data=res;

          },failed=>{

          })
          })
        }
      }
    }
</script>

<style scoped>

</style>
