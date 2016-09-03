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
<p>首先把CSS和JS文件放到相应的目录下，然后在HTML文件里分别引入这两个文件：</p>
<p>CSS</p>
<pre class="">&lt;link href="typing.css" rel="stylesheet"&gt;</pre>
<p class="">JS</p>
<pre class="">&lt;script src="typing.js"&gt;&lt;/script&gt;</pre>
<p class=""> </p>
<p class="">在需要放置的地方插入下面这行</p>
<pre class="">&lt;span id="words"&gt;&lt;/span&gt;&lt;span id="cursor"&gt;|&lt;/span&gt;</pre>
<p class="">cursor是文字后面闪烁的光标，你可以更换它。</p>
<p class=""> </p>
<p class="">最后在末尾设置你要定义的字段和相关的设置。首先你需要定义一个数组，然后写入单个或多个字段。</p>
<pre class="">&lt;script&gt;
  var strings = new Array("一段文字"); // 单个字段
&lt;/script&gt;</pre>
<pre class="">&lt;script&gt;
  var strings = new Array("文段1", "文段2", "文段3", "文段n"); // 多个字段
&lt;/script&gt;</pre>
<p class=""> </p>
<p class="">可选的设置有打字速度和删除速度，是否循环（默认为循环）等。</p>
<pre class="">&lt;script&gt;
  var strings = new Array("文段1", "文段2") ; // multi words
  var typingSpeed = 100; // 打出每个字的间隔时间
  var deleteSpeed = 40; // 删除每个字的间隔时间
  var isLoop = true; // 是否循环，true/false
  var waitTime = 800; // 打完一个字段后的等待时间
&lt;/script&gt;</pre>
<p class=""> </p>
<h2 class="">最后</h2>
<p class="">如果你在使用这个JS库，那么请让我知道，我会把你加入DEMO里。 </p>
