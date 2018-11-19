## 音乐app

---
> 1. 前端 vue vuex mint-ui axios 
> 2. 后台 nodejs mongodb qq音乐接口页面素材仿照慕课网视频
> 3. 本人工作主要是angular6为主；目前 围绕音乐app 写了angular6版本 vue版本 react版本 weex版本 微信小程序版本，相关的代码可以参照我的github；
> 4. 后端用的主要是java springboot MyBatis mysql；
> 5. 平时也研究nodejs mongodb；

---

> 1. 目前实现的功能
- 登录 
- 注册
- 推荐
- 歌手
- 排行
- 搜索
- 用户
- 歌曲播放
- 歌词
- 快进快退拖拽
> 2. 页面效果图
![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/index.png)

![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/login.png)

![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/singer.png)

![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/seniority.png)

![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/search.png)

![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/user.png)

![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/rec-detail.png)

![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/rec-detail_1.png)

![image](https://github.com/app-music/app-music/blob/master/src/assets/effect/play.png)


---
> 项目启动

1. npm install
2. npm run start
3. 浏览器打开http://localhost:8080

> 项目部署 
-  npm run build 

1. 生成的dist 文件部署到nginx上
2. 使用webview 原理 打包成Android、ios app


---
### 为啥要用nginx部署

> 项目中涉及到qq音乐接口；由于浏览器的同源策略限制，形成了跨域问题；使用nginx配置反向代理解决跨域问题。

