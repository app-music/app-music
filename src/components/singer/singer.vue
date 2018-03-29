<template>
  <div>
    <mt-index-list>
      <mt-index-section v-for="item in singerData" :index="item.index">
        <template v-for="itemChild in item.childNode">
          <div class="singer-l">
            <img class="singerImg" :src="itemChild.Fsinger_mid" alt="">
            <span class="singer-name">{{itemChild.Fsinger_name}}</span>
          </div>
        </template>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<style lang="scss" type="text/scss" scoped>
  .singer-l {
    align-items: center;
    padding: 20px 0 0 30px;
  }

  .singer-name {
    margin-left: 20px;
    color: hsla(0, 0%, 100%, .5);
    font-size: 14px;
  }

  .singerImg {
    width: 50px;
    height: 50px;
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
            _item.Fsinger_mid = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${_item.Fsinger_mid}.jpg?max_age=2592000`
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
      }
    }

  }
</script>
