###视频加速插件：
目前支持的flash视频网站：
- 网易公开课

#####实现方法
将下面代码复制到需要加速的网站地址栏，回车即可，然后通过+，-键控制播放速度，视频右上角有当前播放速度的提示
```
javascript:!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(1)},function(e,t){"use strict";!function(){function e(){var e=document.body.innerHTML.replace(/[\s\S]*appsrc : '([\s\S]*?)movie([\s\S]*?)-list\.m3u8'[\s\S]*/,"$1mobilev$2.mp4");return e}function t(){if(!document.getElementById("video")){var t=document.getElementById("FPlayer"),n=740,a=415;t.style.display="none";var d=document.createElement("div"),r=document.createElement("video"),c="width:"+n+"px;height:"+a+"px;position:absolute;top:140px;left:100px;z-index:9999;";r.style=c,r.id="video",r.src=e(),r.controls="controls",r.autoplay="true",d.appendChild(r),document.body.appendChild(d),o(r),console.log("Done:create a palyer of HTML5video and add a tag about playbackRate.")}}function o(e){var t=document.createElement("span"),o="backgroundColor:red;position:absolute;top:150px;left:700px;z-index:9999;color:red";t.style=o,t.id="mySpan",document.body.appendChild(t),document.onkeypress=function(t){var o=t.keyCode||t.which||t.charCode,n=e.playbackRate;switch(o){case 61:n+=.1;break;case 45:n-=.1}n=Math.round(10*n)/10;var a=document.getElementById("mySpan");1===n?a.innerText="":a.innerText="X"+n,console.log("playbackRate:"+n),e.playbackRate=n}}t()}()}]);
```
#####原理
原理在于利用HTML5中video标签的playbackRate属性，该属性控制视频的播放速度，通过脚本控制该属性的值从而控制视频播放速度，所以关键是要讲Flash视频转为video视频，video视频源依赖于mp4视频格式的文件，所以只要在原站找到相关资源就可以自己创建新的视频标签。
所有HTML5视频网站可用chrome插件`Video Speed Controller`直接实现播放控制。

*Tips*：大部分视频网站的手机web端视频都是HTML5视频，所以可以通过PC访问手机网站配合插件实现播放速度控制
