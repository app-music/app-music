webpackJsonp([10],{"+opE":function(t,e){},BWhR:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),a=s.n(i),n=s("LFTv"),c=s("NYxO"),l={data:function(){return{selected:"1",msg:"hello vue",ok:!1,fav:[],his:[]}},created:function(){var t=this;setTimeout(function(e){t.ok=!0},5e3),this.getFav(),this.getHistory()},methods:a()({getFav:function(){this.fav=JSON.parse(localStorage.getItem("__favoriteMusic__"))||[]},getHistory:function(){this.his=JSON.parse(localStorage.getItem("__playHistory__"))||[]},clickPlayAll:function(){var t=void 0;"1"===this.selected?(this.currentMusic(this.fav),t=n.a.getRandomNumBoth(0,this.fav.length)):(this.currentMusic(this.his),t=n.a.getRandomNumBoth(0,this.his.length)),this.currentMusicIndex(t),this.playerDetailShow(!0)},navigateToDetail:function(t){"1"===this.selected?this.currentMusic(this.fav):this.currentMusic(this.his),this.currentMusicIndex(t),this.playAll({isPlay:!0}),this.playerDetailShow(!0)}},Object(c.b)(["currentMusic","currentMusicIndex","playAll","playerDetailShow"]))},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"user"}},[s("div",{staticClass:"user"},[s("div",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"iconfont icon-fanhui"})]),t._v(" "),s("mt-navbar",{staticClass:"mtnav",model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-item",{staticClass:"mt-item",attrs:{id:"1"}},[s("span",{class:{active:"1"===t.selected}},[t._v("我喜欢的")])]),t._v(" "),s("mt-tab-item",{staticClass:"mt-item",attrs:{id:"2"}},[s("span",{class:{active:"2"===t.selected}},[t._v("最近听的")])])],1),t._v(" "),s("div",{attrs:{id:"play"}},[s("span",{on:{click:t.clickPlayAll}},[s("i",{staticClass:"iconfont icon-bofang"}),t._v("\n                    随机播放全部\n                ")])]),t._v(" "),s("mt-tab-container",{staticStyle:{"max-height":"500px",overflow:"scroll",padding:"5px 5px 5px 25px"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("mt-tab-container-item",{attrs:{id:"1"}},t._l(t.fav,function(e,i){return s("div",{staticClass:"listWrap",on:{click:function(e){t.navigateToDetail(i)}}},[s("p",{staticClass:"songName"},[t._v("\n                        "+t._s(e.songname)+"\n                    ")]),t._v(" "),s("p",{staticClass:"singerName"},[t._v("\n                        "+t._s(e.singer[0].name)+"*"+t._s(e.albumname)+"\n                    ")])])})),t._v(" "),s("mt-tab-container-item",{attrs:{id:"2"}},t._l(t.his,function(e,i){return s("div",{staticClass:"listWrap",on:{click:function(e){t.navigateToDetail(i)}}},[s("p",{staticClass:"songName"},[t._v("\n                        "+t._s(e.songname)+"\n                    ")]),t._v(" "),s("p",{staticClass:"singerName"},[t._v("\n                        "+t._s(e.singer[0].name)+"*"+t._s(e.albumname)+"\n                    ")])])}))],1)],1)])},staticRenderFns:[]};var r=s("VU/8")(l,o,!1,function(t){s("+opE")},"data-v-1d169c43",null);e.default=r.exports}});