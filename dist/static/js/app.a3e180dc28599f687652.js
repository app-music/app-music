webpackJsonp([12],{"8FXp":function(t,e){},DPtm:function(t,e){},LFTv:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("Zrlr"),r=n.n(i),a=n("wxAW"),s=n.n(a),o=function(){function t(){r()(this,t)}return s()(t,null,[{key:"generateBig_1",value:function(){for(var t=[],e=65;e<91;e++)t.push(String.fromCharCode(e));return t}},{key:"generateSmall_1",value:function(){for(var t=[],e=97;e<123;e++)t.push(String.fromCharCode(e));return t}},{key:"createSong",value:function(t){}},{key:"getUid",value:function(){var t=(new Date).getUTCMilliseconds();return""+Math.round(2147483647*Math.random())*t%1e10}},{key:"getRandomNumBoth",value:function(t,e){var n=e-t,i=Math.random();return t+Math.round(i*n)}},{key:"dateFmt",value:function(t,e){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[i]:("00"+n[i]).substr((""+n[i]).length)));return t}}]),t}()},Mmi7:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=(n("muQq"),n("mvHQ")),a=n.n(r),s=n("Dd8w"),o=n.n(s),c=n("NYxO"),u={name:"circle-progress",props:{isPlay:{type:Boolean,default:!1},time:{type:Number,default:0},currentTime:{type:Number,default:0}},data:function(){return{}},created:function(){console.log(this.$refs.rightCirlcle)},computed:o()({rightTransformDeg:function(){return this.currentTime&&this.time&&this.currentTime>=this.time/2&&this.currentTime<this.time?{transform:"rotate(225deg)"}:this.currentTime<this.time/2?{transform:"rotate("+(this.currentTime/this.time*360+45)+"deg)"}:{transform:"rotate(45deg)"}},leftTransformDeg:function(){return this.currentTime&&this.time&&this.currentTime>=this.time/2&&this.currentTime<this.time?{transform:"rotate("+(this.currentTime/this.time*360+45-180)+"deg)"}:this.currentTime===this.time?{transform:"rotate(45deg)"}:void 0}},Object(c.c)(["currentMusicIndex","getCurrentMusic","playAll","currentMusicTime"])),methods:{},watch:{playAll:function(t){}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circleProgress_wrapper"},[e("div",{staticClass:"wrapper right"},[e("div",{ref:"rightCircle",staticClass:"circleProgress rightcircle",style:this.rightTransformDeg})]),this._v(" "),e("div",{staticClass:"wrapper left"},[e("div",{ref:"leftCircle",staticClass:"circleProgress leftcircle",style:this.leftTransformDeg})])])},staticRenderFns:[]};var d=n("VU/8")(u,l,!1,function(t){n("DPtm")},"data-v-053ada4e",null).exports,f=n("bEzk"),h=n("LFTv"),m=!1,g=!i.default.prototype.$isServer&&"ontouchstart"in window,p={name:"range",props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},barHeight:{type:Number,default:1}},data:function(){return{currentValue:""}},mounted:function(){var t,e,n,i,r=this,a=this.$refs.thumb,s=this.$refs.content,o={};e={start:function(t){if(!r.disabled){var e,n,i=(e=s.getBoundingClientRect(),{left:(n=a.getBoundingClientRect()).left-e.left,top:n.top-e.top,thumbBoxLeft:n.left}),c=t.clientX-i.thumbBoxLeft;o={thumbStartLeft:i.left,thumbStartTop:i.top,thumbClickDetalX:c}}},drag:function(t){if(!r.disabled){var e=s.getBoundingClientRect(),n=t.pageX-e.left-o.thumbStartLeft-o.thumbClickDetalX,i=Math.ceil((r.max-r.min)/r.step),a=(o.thumbStartLeft+n-(o.thumbStartLeft+n)%(e.width/i))/e.width;a<0?a=0:a>1&&(a=1),r.currentValue=Math.round(r.min+a*(r.max-r.min)),r.$emit("dragEvent",Math.round(r.min+a*(r.max-r.min)))}},end:function(){r.disabled||(r.$emit("dragEndEvent",r.currentValue),o={})}},n=function(t){e.drag&&e.drag(g?t.changedTouches[0]||t.touches[0]:t)},i=function t(i){g||(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",t)),document.onselectstart=null,document.ondragstart=null,m=!1,e.end&&e.end(g?i.changedTouches[0]||i.touches[0]:i)},(t=a).addEventListener(g?"touchstart":"mousedown",function(t){m||(t.preventDefault(),document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},g||(document.addEventListener("mousemove",n),document.addEventListener("mouseup",i)),m=!0,e.start&&e.start(g?t.changedTouches[0]||t.touches[0]:t))}),g&&(t.addEventListener("touchmove",n),t.addEventListener("touchend",i),t.addEventListener("touchcancel",i));var c=this,u=function(){var t=s.getBoundingClientRect(),e=event.pageX-t.left-a.offsetWidth,n=Math.ceil((c.max-c.min)/c.step),i=e-e%(t.width/n),r=i/t.width;c.$emit("dragEndEvent",Math.round(c.min+r*(c.max-c.min)))};this.$refs.runWay.addEventListener("click",u),this.$refs.progress.addEventListener("click",u)}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"range"},[t._t("start"),t._v(" "),n("div",{ref:"content",staticClass:"range-content"},[n("div",{ref:"runWay",staticClass:"range-runway",staticStyle:{"border-top-width":"2px"}}),t._v(" "),n("div",{ref:"progress",staticClass:"range-progress",style:{width:t.value+"%",height:"2px"}}),t._v(" "),n("div",{ref:"thumb",staticClass:"range-thumb",style:{left:t.value+"%"}})]),t._v(" "),t._t("end")],2)},staticRenderFns:[]};var y=n("VU/8")(p,v,!1,function(t){n("S2co")},"data-v-be6b55e2",null).exports,C=n("OKJt"),_=n.n(C),M={name:"player-detail",props:{currentTime:{type:Number,default:0}},data:function(){return{start:"",end:"",isFavorite:"false",rangeValue:"10",image:"",lyric:"",currentLyric:""}},components:{range:y},mounted:function(){this.image=this.$refs.image},computed:o()({currentSong:function(){if(this.getCurrentMusic){var t=this.getCurrentMusic,e=new f.a(t[this.currentMusicIndex]);return console.log(e),e}},playStaus:function(){return this.playAll.isPlay?"iconfont icon-zanting2":"iconfont icon-bofang"},playStaus2:function(){return this.playAll.isPlay?{animation:"rotate infinite linear 20s"}:{animation:"none"}},getCurrentMusicTime:function(){return this.lyric&&this.lyric.seek(1e3*this.currentMusicTime),this.currentMusicTime},musicChange:function(){var t=this;if(!this.getCurrentMusic)return"iconfont icon-xihuan";try{var e=this.getCurrentMusic[this.currentMusicIndex].songid,n=(JSON.parse(localStorage.getItem("__favoriteMusic__"))||[]).findIndex(function(t){return t.songid===e});return console.log(this.getCurrentMusic[this.currentMusicIndex]),this.$songService.getSongLyric(this.getCurrentMusic[this.currentMusicIndex].songmid).then(function(e){var n=Base64.decode(e.lyric);t.lyric=new _.a(n,function(e){e.lineNum;var n=e.txt;t.currentLyric=n}),t.lyric.play()}),this.$nextTick(function(){t.isFavorite=-1!==n}),""}catch(t){console.log(t)}}},Object(c.c)(["currentMusicIndex","playAll","currentMusicTime","getCurrentMusic"])),watch:{play:function(t){t?this.lyric.play():this.lyric.stop()}},created:function(){console.log(this.currentSong),console.log(this)},methods:o()({detailClose:function(){this.playerDetailShow(!1)},previous:function(){0===this.currentMusicIndex?this.currentIndex(this.getCurrentMusic.length-1):this.currentIndex(this.currentMusicIndex-1),this.playMusic({isPlay:!0})},next:function(){this.currentMusicIndex===this.getCurrentMusic.length-1?this.currentIndex(0):this.currentIndex(this.currentMusicIndex+1),this.playMusic({isPlay:!0})},play:function(){this.playMusic({isPlay:!this.playAll.isPlay})},loveIt:function(){if(this.getCurrentMusic){var t=this.getCurrentMusic;console.log(t),t[this.currentMusicIndex].islove=!t[this.currentMusicIndex].islove;var e=JSON.parse(localStorage.getItem("__favoriteMusic__"))||[];if(t[this.currentMusicIndex].islove)this.isFavorite=!0,e.push(t[this.currentMusicIndex]);else{this.isFavorite=!1;var n=t[this.currentMusicIndex].songid,i=e.findIndex(function(t){return t.songid===n});e.splice(i,1)}localStorage.setItem("__favoriteMusic__",a()(e))}},rangeChangeEnd:function(t){this.lyric.seek(1e3*t),this.$emit("playerDetailEventEnd",{currentTime:t})},rangeChange:function(t){this.lyric.seek(1e3*t),this.$emit("playerDetailEvent",{currentTime:t})}},Object(c.b)({currentIndex:"currentMusicIndex",playMusic:"playAll",playerDetailShow:"playerDetailShow"})),filters:{formatDate:function(t){var e=new Date(t);return h.a.dateFmt("mm:ss",e)}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"player"}},[n("div",{staticClass:"player"},[n("div",{staticClass:"background",attrs:{"data-v-35618e92":""}},[n("img",{attrs:{width:"100%",height:"100%",src:t.currentSong.image}})]),t._v(" "),n("div",{staticClass:"hidden",on:{click:function(e){t.detailClose()}}},[n("i",{staticClass:"iconfont icon-xiangxia02"})]),t._v(" "),n("h3",[n("h2",[t._v(t._s(t.currentSong.name))]),t._v("\n            "+t._s(t.currentSong.singer[0].name)+"\n        ")]),t._v(" "),n("div",{staticClass:"music-img"},[n("div",[n("img",{ref:"image",style:t.playStaus2,attrs:{height:"100%",width:"100%",src:t.currentSong.image,alt:""}})]),t._v(" "),n("h2",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.currentLyric))])]),t._v(" "),n("div",{staticClass:"player-control"},[n("div",{staticClass:"progress"},[n("range",{attrs:{value:t.currentTime/t.getCurrentMusicTime*100,max:t.getCurrentMusicTime},on:{dragEvent:t.rangeChange,dragEndEvent:t.rangeChangeEnd}},[n("div",{staticStyle:{color:"#eaffea"},attrs:{slot:"start"},slot:"start"},[t._v(t._s(t._f("formatDate")(1e3*t.currentTime)))]),t._v(" "),n("div",{staticStyle:{color:"#eaffea"},attrs:{slot:"end"},slot:"end"},[t._v(t._s(t._f("formatDate")(1e3*t.getCurrentMusicTime)))])])],1),t._v(" "),n("div",{staticClass:"player-button"},[n("span",[n("i",{staticClass:"iconfont icon-suijibofang",on:{click:function(t){}}}),t._v(" "),n("i",{staticClass:"iconfont icon-shangyishou1",on:{click:function(e){t.previous()}}}),t._v(" "),n("i",{class:t.playStaus,on:{click:function(e){t.play()}}}),t._v(" "),n("i",{staticClass:"iconfont icon-xiayishou",on:{click:function(e){t.next()}}},[t._v(t._s(t.musicChange))]),t._v(" "),t.isFavorite?t._e():n("i",{staticClass:"iconfont icon-xihuan",on:{click:function(e){t.loveIt()}}}),t._v(" "),t.isFavorite?n("i",{staticClass:"iconfont icon-xihuan6",on:{click:function(e){t.loveIt()}}}):t._e()])])])])])},staticRenderFns:[]};var b={name:"player",data:function(){return{paused:!0,count:"",song:{},msg:!1,time:0,currentSong:{},currentTime:0}},components:{circleProgress:d,playerDetail:n("VU/8")(M,w,!1,function(t){n("zidm")},"data-v-6bbcf2ad",null).exports},created:function(){},computed:o()({getCount:function(){if(this.getCurrentMusic){var t=this.getCurrentMusic;this.paused=!0;var e=new f.a(t[this.currentMusicIndex]);return console.log(e),e}return new f.a({singer:[{}]})},playAllMusic:function(){return this.playAll.isPlay?"iconfont icon-ai07 ":"iconfont icon-bofang1"},playerDetailShow:function(){return this.playerDetailShow},isPlay:function(){return this.playAll.isPlay}},Object(c.c)(["currentMusicIndex","getCurrentMusic","playAll","playerDetailShow"])),watch:{playAllMusic:{deep:!0,handler:function(){this.$refs.audio[this.playAll.isPlay?"play":"pause"](),this.time=this.$refs.audio.duration}},currentMusicIndex:function(t){var e=this;this.$nextTick(function(){-1!==t&&setTimeout(function(t){try{e.$refs.audio.play(),e.currentMusicTime(e.$refs.audio.duration),e.playIt({isPlay:!0})}catch(t){throw new Error(t)}},1e3)})}},methods:o()({playMusic:function(){this.paused=!this.paused,this.playIt({isPlay:!this.playAll.isPlay}),this.$refs.audio[this.playAll.isPlay?"play":"pause"]();try{this.time=this.$refs.audio.duration,this.currentMusicTime(this.time)}catch(t){throw new Error(t)}},getPlayDetailEvent:function(t){console.log("拖拽中",t.currentTime),this.$refs.audio.pause(),this.$refs.audio.currentTime=t.currentTime},getPlayDetailEventEnd:function(t){console.log("结束",t.currentTime),this.$refs.audio.currentTime=t.currentTime,this.playAll.isPlay&&this.$refs.audio.play()},timeUpdate:function(t){this.currentTime=t.target.currentTime,this.currentTime===this.time&&this.playIt({isPlay:!1})},songReady:function(){var t=this,e=JSON.parse(localStorage.getItem("__playHistory__"))||[];if(this.getCurrentMusic[this.currentMusicIndex]){var n=e.findIndex(function(e){return e.songid===t.getCurrentMusic[t.currentMusicIndex].songid});n>=0&&e.splice(n,1),e.unshift(this.getCurrentMusic[this.currentMusicIndex])}localStorage.setItem("__playHistory__",a()(e))},detailShow:function(){this._detailShow(!0)},ended:function(){console.log("播放结束"),this.playIt({isPlay:!1})}},Object(c.b)({playIt:"playAll",currentMusicTime:"currentMusicTime",_detailShow:"playerDetailShow"}))},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.getCurrentMusic?n("div",{staticClass:"sing-player"},[n("div",{staticClass:"sing-icon",on:{click:function(e){t.detailShow()}}},[n("img",{attrs:{src:t.getCount.image}})]),t._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.getCount.name)}}),t._v(" "),n("h2",{staticClass:"name",domProps:{innerHTML:t._s(t.getCount.singer[0].name)}})]),t._v(" "),n("div",{staticClass:"progress-circle",on:{click:function(e){t.playMusic()}}},[n("div",{staticClass:"play-music"},[n("i",{class:t.playAllMusic})]),t._v(" "),n("circle-progress",{attrs:{isPlay:t.isPlay,time:t.time,currentTime:t.currentTime}})],1)]):t._e(),t._v(" "),t.playerDetailShow?n("player-detail",{attrs:{currentTime:t.currentTime},on:{playerDetailEvent:t.getPlayDetailEvent,playerDetailEventEnd:t.getPlayDetailEventEnd}}):t._e(),t._v(" "),n("audio",{ref:"audio",attrs:{id:"aa",src:t.getCount.url},on:{ended:t.ended,play:t.songReady,timeupdate:t.timeUpdate}})],1)},staticRenderFns:[]};var x=n("VU/8")(b,S,!1,function(t){n("8FXp")},"data-v-01b81be1",null).exports,T=(n("Roo5"),{name:"App",components:{player:x},data:function(){return{activeIndex2:"1",selected:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}}),E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"head"}},[n("header",{staticClass:"header"},[n("h3",[t._v("Monica Music")]),t._v(" "),n("span",{staticClass:"user",on:{click:function(e){t.$router.push({path:"user"})}}},[n("i",{staticClass:"iconfont icon-yonghu"})])]),t._v(" "),n("mt-navbar",{staticClass:"nav-bar",model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{staticClass:"nav-item",attrs:{id:"1"}},[n("router-link",{staticClass:"nav-item-link",attrs:{to:"/recommend"}},[t._v("推荐")])],1),t._v(" "),n("mt-tab-item",{staticClass:"nav-item",attrs:{id:"2"}},[n("router-link",{staticClass:"nav-item-link",attrs:{to:"/singer"}},[t._v("歌手")])],1),t._v(" "),n("mt-tab-item",{staticClass:"nav-item",attrs:{id:"3"}},[n("router-link",{staticClass:"nav-item-link",attrs:{to:"/seniority"}},[t._v("排行")])],1),t._v(" "),n("mt-tab-item",{staticClass:"nav-item",attrs:{id:"4"}},[n("router-link",{staticClass:"nav-item-link",attrs:{to:"/search"}},[t._v("搜索")])],1)],1)],1),t._v(" "),n("router-view",{staticClass:"router-view"}),t._v(" "),n("player")],1)},staticRenderFns:[]};var I=n("VU/8")(T,E,!1,function(t){n("Mmi7")},null,null).exports,k=n("/ocq");i.default.use(k.a);var D=new k.a({routes:[{path:"*",redirect:"/recommend"},{path:"/login",name:"login",component:function(t){return n.e(2).then(n.bind(null,"EV1k")).then(t)}},{path:"/register",name:"register",component:function(t){return n.e(1).then(n.bind(null,"5zCw")).then(t)}},{path:"/recommend",name:"recommend",component:function(t){return n.e(6).then(n.bind(null,"W1+L")).then(t)}},{path:"/recommend/detail/:id",name:"recommendDetail",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"ADFL")).then(t)}},{path:"/search",name:"search",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"YOyO")).then(t)}},{path:"/seniority",name:"seniority",component:function(t){return n.e(10).then(n.bind(null,"GtXk")).then(t)}},{path:"/seniority/detail/:id",name:"seniorityDetail",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"xzTe")).then(t)}},{path:"/user",name:"user",component:function(t){return n.e(9).then(n.bind(null,"BWhR")).then(t)}},{path:"/singer",name:"singer",component:function(t){return n.e(5).then(n.bind(null,"0IpB")).then(t)}},{path:"/singer/detail/:id",name:"singerName",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"WWOR")).then(t)}}]});D.beforeEach(function(t,e,n){var i=JSON.parse(sessionStorage.getItem("loginInfo"));"login"===t.name?i?n({path:e.path}):n():"register"===t.name?n():i?n():n({path:"/login"})});var L,P=D,A=n("Au9i"),N=n.n(A),R=(n("d8/S"),n("S2ic"),n("UkYX"),n("fZjL")),$=n.n(R),U=n("//Fk"),q=n.n(U),F=n("mtWM"),j=n.n(F),O={getSingerList:function(){return new q.a(function(t,e){j.a.get("/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq").then(function(n){0===n.data.code?t(n.data):e(n.data)},function(t){throw new Error(t)})})},getSingerDetail:function(t){return new q.a(function(e,n){j.a.get("/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid="+t).then(function(t){0===t.data.code?e(t.data):n(t.data)},function(t){throw new Error(t)})})}},B=n("ZnkQ"),W={getSearchKey:function(){return new q.a(function(t,e){j.a.get("/splcloud/fcgi-bin/gethotkey.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&uin=0&needNewCode=1&platform=h5").then(function(n){0===n.data.code?t(n.data):e(n.data)},function(t){throw new Error(t)})})},searchMusicByKeyWord:function(t){return new q.a(function(e,n){j.a.get("/soso/fcgi-bin/search_for_qq_cp?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&w="+t+"&p=1&perpage=20&n=20&catZhida=1&zhidaqu=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&remoteplace=txt.mqq.all&uin=0&needNewCode=1&platform=h5").then(function(t){0===t.data.code?e(t.data):n(t.data)},function(t){throw new Error(t)})})}},z={getTopList:function(){return new q.a(function(t,e){j.a.get("/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&uin=0&needNewCode=1&platform=h5").then(function(n){0===n.data.code?t(n.data):e(n.data)},function(t){throw new Error(t)})})},getTopListDetail:function(t){return new q.a(function(e,n){j.a.get("/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&topid="+t+"&needNewCode=1&uin=0&tpl=3&page=detail&type=top&platform=h5").then(function(t){0===t.data.code?e(t.data):n(t.data)},function(t){throw new Error(t)})})}},V=n("Z1Bu"),X={login:function(t){return new q.a(function(e,n){j.a.post("/nodeApi/users/login",t).then(function(t){0===t.data.code?e(t.data):n(t.data)},function(t){throw console.log("请确认后台服务器是否开启!"),new Error(t)}).catch(function(t){})})},register:function(t){return new q.a(function(e,n){j.a.post("/nodeApi/users/register",t).then(function(t){0===t.data.code?e(t.data):n(t.data)},function(t){throw console.log("请确认后台服务器是否开启!"),new Error(t)}).catch(function(t){})})}},H={singerService:O,recommendService:B.b,searchService:W,seniorityService:z,songService:V.a,userService:X},Z={install:function(t){$()(H).forEach(function(e){t.prototype["$"+e]=H[e]})}},Y={currentMusic:function(t,e){(0,t.commit)("CURRENT_MUSIC",e)},playAll:function(t,e){(0,t.commit)("PLAY_ALL",e)},currentMusicIndex:function(t,e){(0,t.commit)("CURRENT_MUSIC_INDEX",e)},currentMusicTime:function(t,e){(0,t.commit)("CURRENT_MUSIC_TIME",e)},playerDetailShow:function(t,e){(0,t.commit)("PLAY_DETAIL_SHOW",e)}},Q=n("bOdI"),J=n.n(Q),G={state:{currentMusic:null,playAll:{isPlay:!1},currentMusicIndex:-1,currentMusicTime:null,playerDetailShow:!1},mutations:(L={},J()(L,"CURRENT_MUSIC",function(t,e){t.currentMusic=e}),J()(L,"PLAY_ALL",function(t,e){t.playAll=e}),J()(L,"CURRENT_MUSIC_INDEX",function(t,e){t.currentMusicIndex=e}),J()(L,"CURRENT_MUSIC_TIME",function(t,e){t.currentMusicTime=e}),J()(L,"PLAY_DETAIL_SHOW",function(t,e){t.playerDetailShow=e}),L),getters:{getCurrentMusic:function(t){return t.currentMusic},playAll:function(t){return t.playAll},currentMusicIndex:function(t){return t.currentMusicIndex},currentMusicTime:function(t){return t.currentMusicTime},playerDetailShow:function(t){return t.playerDetailShow}}};i.default.use(c.a);var K=new c.a.Store({actions:Y,modules:{mutations:G}}),tt=n("sUu7");tt.a.Validator.localize("zh_CN",{messages:{required:function(t){return"请输入"+t},confirmed:function(t){return"两次输入的密码不一致"},min:function(t,e){return t+"不小于"+e+"位"},max:function(t,e){return t+"不大于"+e+"位"},alpha_dash:function(t){return t+"只能包含英文、数字、下划线、破折号"}},attributes:{userName:"昵称",userCode:"账号",password:"密码",confirmPassword:"确认密码"}}),i.default.use(tt.a),i.default.config.productionTip=!1,i.default.use(N.a),i.default.use(Z),new i.default({el:"#app",router:P,store:K,components:{App:I},template:"<App/>"})},Roo5:function(t,e){},S2co:function(t,e){},S2ic:function(t,e){},UkYX:function(t,e){},Z1Bu:function(t,e,n){"use strict";var i=n("woOf"),r=n.n(i),a=n("//Fk"),s=n.n(a),o=n("mtWM"),c=n.n(o),u=n("ZnkQ"),l=n("LFTv");n("bEzk");e.a={getSongUrlList:function(t){var e=[],n=[];return t.forEach(function(t){e.push(t.songmid),n.push(0)}),new s.a(function(t,i){var a={comm:r()({},u.a,{g_tk:5381,format:"json",platform:"h5",needNewCode:1,uin:0}),url_mid:{module:"vkey.GetVkeyServer",method:"CgiGetVkey",param:{guid:l.a.getUid(),songmid:e,songtype:n,uin:"0",loginflag:0,platform:"23"}}};c.a.post("/music/api/getPurlUrl",a).then(function(e){0===e.data.code?t(e.data):i(e.data)},function(t){throw new Error(t)})})},getSongLyric:function(t){var e=r()({},u.a,{songmid:t,platform:"yqq",hostUin:0,needNewCode:0,categoryId:1e7,pcachetime:+new Date,format:"json"});return new s.a(function(t,n){c.a.get("/music/api/lyric",{params:e}).then(function(e){0===e.data.code?t(e.data):n(e.data)},function(t){throw new Error(t)})})}}},ZnkQ:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("woOf"),r=n.n(i),a=n("//Fk"),s=n.n(a),o=n("mtWM"),c=n.n(o);e.b={getRecommend:function(){return new s.a(function(t,e){c.a.get("/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1").then(function(n){0===n.data.code?t(n.data):e(n.data)},function(t){throw new Error(t)})})},getCdInfo:function(){return new s.a(function(t,e){c.a.get("/music/api/getDiscList",{params:l}).then(function(n){0===n.data.code?t(n.data):e(n.data)},function(t){throw new Error(t)})})},getCdListDetail:function(t){return new s.a(function(e,n){var i=r()({},d,{disstid:t});c.a.get("/music/api/getCdInfo",{params:i}).then(function(t){0===t.data.code?e(t.data):n(t.data)},function(t){throw new Error(t)})})}};var u={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"json"},l=r()({},u,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"}),d=r()({},u,{g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp",type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0})},bEzk:function(t,e,n){"use strict";var i=n("//Fk"),r=n.n(i),a=n("Zrlr"),s=n.n(a),o=n("wxAW"),c=n.n(o),u=n("xrTZ"),l=(n.n(u),function(){function t(e){s()(this,t),this.image="https://y.gtimg.cn/music/photo_new/T002R300x300M0000013N5QP4bIcLc.jpg?max_age=2592000",this.id=e.songid,this.mid=e.songmid,this.singer=e.singer,this.name=e.songname,this.album=e.albumname,this.duration=e.duration,e.albummid&&(this.image="https://y.gtimg.cn/music/photo_new/T002R300x300M000"+e.albummid+".jpg?max_age=2592000"),this.url=e.songUrl}return c()(t,[{key:"getLyric",value:function(t){var e=this;return this.lyric?r.a.resolve(this.lyric):new r.a(function(n,i){t(e.mid).then(function(t){0===t.retcode?(e.lyric=u.Base64.decode(t.lyric),n(e.lyric)):i("no lyric")})})}}]),t}());e.a=l},"d8/S":function(t,e){},muQq:function(t,e){},zidm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a3e180dc28599f687652.js.map