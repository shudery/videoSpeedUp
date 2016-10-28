var functionHash = {
    createVideo() {
        function getSource() {
            //拿到视频资源的MP4地址
            //http://mov.bn.netease.com/mobilev/2011/1/E/0/S6OPRM5E0.mp4
            var mp4Url = document.body.innerHTML.replace(/[\s\S]*appsrc : '([\s\S]*?)movie([\s\S]*?)-list\.m3u8'[\s\S]*/,
                '$1mobilev$2.mp4')
            return mp4Url;
        }

        function createVideo() {
            if (document.getElementById('video')) {
                return
            }

            //去掉flash播放
            flash = document.getElementById("FPlayer");
            var width = 740;
            var height = 415;
            flash.style.display = "none";

            //添加HTML播放
            var div = document.createElement("div");
            var video = document.createElement("video");
            var style = `width:${width}px;height:${height}px;position:absolute;top:140px;left:100px;z-index:9999;`
            video.style = style;

            video.id = 'video';
            video.src = getSource();
            video.controls = 'controls';
            video.autoplay = 'true';
            div.appendChild(video)
            document.body.appendChild(div);
            addController(video);
            console.log('Done:create a palyer of HTML5video and add a tag about playbackRate.')
        }

        function addController(video) {
            var span = document.createElement('span');
            var style = "backgroundColor:red;position:absolute;top:150px;left:700px;z-index:9999;color:red"
            span.style = style;
            span.id = 'mySpan';
            document.body.appendChild(span)
            document.onkeypress = function(e) {
                var key = e.keyCode || e.which || e.charCode;
                var k = video.playbackRate;

                switch (key) {
                    // +
                    case 61:
                        k += 0.1;
                        break;
                        // - 
                    case 45:
                        k -= 0.1;
                        break;
                    default:
                        break
                }
                k = Math.round(10 * k) / 10;
                mySpan = document.getElementById('mySpan');
                if (k === 1) {
                    mySpan.innerText = '';
                } else {
                    mySpan.innerText = 'X' + k;
                }
                console.log('playbackRate:' + k)
                video.playbackRate = k;
            }
        }
        createVideo();
    },
}

chrome.extension.onMessage.addListener(function(data) {
    console.log(data + ':' + functionHash.hasOwnProperty(data))
    if (functionHash.hasOwnProperty(data)) {
        var executeFun = functionHash[data]
        executeFun();
    }
});

