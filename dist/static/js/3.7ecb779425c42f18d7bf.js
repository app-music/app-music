webpackJsonp([3],{A4rp:function(t,i){},GtXk:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={data:function(){return{listData:[]}},created:function(){this.getTopList()},methods:{getTopList:function(){var t=this;this.$seniorityService.getTopList().then(function(i){t.listData=i.data.topList},function(t){console.log(t)})},goToDetail:function(t){this.$router.push({path:"/seniority/detail/"+t})}}},s={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"seniority"}},[n("ul",t._l(t.listData,function(i,e){return n("li",{staticClass:"wrap"},[n("img",{attrs:{height:"100",src:i.picUrl,alt:""}}),t._v(" "),n("ul",t._l(i.songList,function(e,s){return n("li",{staticClass:"info",on:{click:function(n){t.goToDetail(i.id)}}},[t._v("\n                    "+t._s(s+1)+" "+t._s(e.songname)+"-"+t._s(e.singername)+"\n                ")])}))])}))])},staticRenderFns:[]};var o=n("VU/8")(e,s,!1,function(t){n("A4rp")},"data-v-cb2b427c",null);i.default=o.exports}});