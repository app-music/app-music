<template>
    <div class="container">
        <div style="margin:20px;">
            <div class="search">
                <i class="iconfont icon-sousuo icon-color" style="color: #866363"></i>
                <input type="text" class="search-input"
                       v-model="value" v-bind:onchange="searchChange()"
                       placeholder="搜索歌曲、歌名">
            </div>
        </div>
        <div class="search-hot-key">
            <p>热门搜索</p>
            <ul>
                <li class="hot-key" v-for="(item,index) in hotKey" :key="index">
                    {{item.k}}
                </li>
            </ul>
        </div>
        <div class="search-list">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        value: '',
        result: [
          {title: 'ssss', value: 'ssss'},
          {title: 'ssss', value: 'ssss'},
          {title: 'ssss', value: 'ssss'},
          {title: 'ssss', value: 'ssss'},
        ],
        hotKey: []
      }
    },
    created() {
      this.getSearchKey();
    },
    methods: {
      getSearchKey() {
        this.$searchService.getSearchKey().then(success => {
          console.log(success);
          this.hotKey = success.data.hotkey.slice(0, 10);
        }, failed => {
          console.log(failed.msg);
        })
      },
      searchChange() {
        // this.$store.commit('COUNT',this.value)
        this.currentMusic(this.value)
      },
      ...mapActions([
        'currentMusic'
      ])
    }
  }</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss"  scoped>
    .container {
        .search {
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 6px;
            height: 40px;
            background: #333;
            border-radius: 6px;
            .icon-color {
                color: #866363 !important;
            }
            .search-input {
                flex: 1;
                margin: 0 5px;
                line-height: 18px;
                background: #333;
                color: #fff;
                font-size: 14px;
                outline: 0;
            }
        }
        .search-hot-key {
            margin: 0 20px 20px;
            p {
                margin-bottom: 20px;
                font-size: 14px;
                color: hsla(0, 0%, 100%, .5);
            }

        }
        .hot-key {
            display: inline-block;
            padding: 5px 10px;
            margin: 0 20px 10px 0;
            border-radius: 6px;
            background: #333;
            font-size: 14px;
            color: hsla(0, 0%, 100%, .3);
        }

    }


</style>
