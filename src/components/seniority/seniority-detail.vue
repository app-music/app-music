<template>
    <div>排行详情页面</div>
</template>

<script>
    export default {
        name: "seniority-detail",
        data(){
           return{
               id:'',
               data:[]
           }
        },
        created(){
            this.id = this.$route.params.id;
            this.getTopListDetail(this.id)
        },
        methods:{
            getTopListDetail(id){
                this.$seniorityService.getTopListDetail(id).then(success=>{
                    console.log(success);
                    this.data = success.data
                })
            }
        },
    }
</script>

<style scoped>

</style>