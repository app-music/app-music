<template>
  <div>
    <mt-index-list>
      <mt-index-section v-for="item in singerData" :index="item.index">
        <mt-cell :title="itemChild.singerName" v-for="itemChild in item.childNode"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<style>

</style>
<script>
  import { CommonUtil } from '../../core/utils/common-util';
    export default {
        data() {
            return {
              msg: 'hello vue',
              singerData: [],
            }
        },
      created(){
        this.singerData= [
//          {index:'A',childNode:[
//            {singerName:'Alan Walker (艾伦·沃克)',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'Adele (阿黛尔)',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'A-Lin',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            ]
//          },
//          {index:'B',childNode:[
//            {singerName:'BIGBANG (빅뱅)',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'BEYOND',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'本兮',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'BLACKPINK',singerImage:'./assets/singer/AlanWalker.png'},
//            ]
//          },
//          {index:'C',childNode:[
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            ]
//          },
//          {index:'D',childNode:[
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
//            ]
//          },

        ];
        this.mockData();
      },
      methods:{
        mockData(){
          let generateBig = CommonUtil.generateBig_1();
          generateBig.forEach(item=>{
            this.singerData.push({
              index:item,childNode:[
                {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
                {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
                {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
                {singerName:'Alan Walker',singerImage:'./assets/singer/AlanWalker.png'},
              ]
            })
          })
        }
      }

    }
</script>
