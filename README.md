# typing.js
animates typing effect（打字机动画效果）

## Demos
* [翻相册页脚](http://fanxiangce.com)
* https://productmap.co/
* http://www.stephanemartinw.com/

## How to use
### Link  
CSS  
``` HTML
<link href="typing.css" rel="stylesheet">
```
JS  
``` HTML
<script src="typing.js"></script>
``` 

### Use it for text
``` HTML
<span id="words"></span><span id="cursor">|</span>
```
cursor is a blink "|", you can change it.

### Use it for placeholder
``` HTML
<input id="words" type="text" placeholder="">
```
then set `var isPlaceholder = true;` (the cursor in placeholder isn't blink, it's waiting to solve...)


## Setting
for one line text
```Javascript
  var strings = new Array("text"); // single words
```
or multi text
```Javascript
  var strings = new Array("text1", "text2", "..."); // multi words
```
  
more options
```Javascript
<script>
  var strings = new Array("text1", "text2", "...") ; // multi words
  var typingSpeed = 100; // 打出每个字的间隔时间
  var deleteSpeed = 40; // 删除每个字的间隔时间
  var isLoop = true; // 是否循环，true/false
  var waitTime = 800; // 打完一个字段后的等待时间
  var isPlaceholder = false; // if you use tying.js for placeholder, set it true.
</script>
```
