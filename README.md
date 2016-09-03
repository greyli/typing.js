# typing.js
打字机动画效果（animates typing）

<img src="http://withlihui.com/wp-content/uploads/2016/09/demo.gif" alt="打字机效果" width="600" height="120" />
<p>&nbsp;</p>
<h2>下载</h2>
<p>Zip：<a href="https://github.com/lihuii/typing.js/archive/master.zip" target="_blank">https://github.com/lihuii/typing.js/archive/master.zip</a></p>
<p>&nbsp;</p>
<h2>DEMO</h2>
<p>打字机效果很适合用在个人页面和主页的头部，下面是几个示例。<br />
<a href="http://fanxiangce.com" target="_blank">翻相册</a>（页脚）<br />
<a href="https://productmap.co/" target="_blank">https://productmap.co/<br />
http://www.stephanemartinw.com/</a></p>
<p>&nbsp;</p>
<h2>用法</h2>

首先把CSS和JS文件放到相应的目录下，然后在HTML文件里分别引入这两个文件：  
CSS  
``` HTML
<link href="typing.css" rel="stylesheet">
```
JS  
``` HTML
<script src="typing.js"></script>
``` 

在需要放置的地方插入下面这行  
``` HTML
<span id="words"></span><span id="cursor">|</span>
```
cursor是文字后面闪烁的光标，你可以更换它。  

 

最后在末尾设置你要定义的字段和相关的设置。首先你需要定义一个数组，然后写入单个或多个字段。
```Javascript
<script>
  var strings = new Array("一段文字"); // 单个字段
</script>
<script>
  var strings = new Array("文段1", "文段2"); // 多个字段
</script>
 ```

可选的设置有打字速度和删除速度，是否循环（默认为循环）等。
```Javascript
<script>
  var strings = new Array("文段1", "文段2") ; // multi words
  var typingSpeed = 100; // 打出每个字的间隔时间
  var deleteSpeed = 40; // 删除每个字的间隔时间
  var isLoop = true; // 是否循环，true/false
  var waitTime = 800; // 打完一个字段后的等待时间
</script>
```
