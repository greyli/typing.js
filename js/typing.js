/* Typing.js - animates typing effect.
* Author: Lihui
* Websitte: withlihui.com
* Github: github.com/lihuii/typing.js
* MIT licesned.
*/

var b = 0;
var c = 0;
var isTyping = true;
var isLoop = true;
var isPlaceholder = false;
var i = 0;
var typingSpeed = 100;
var deleteSpeed = 40;
var waitTime = 600
setTimeout("typing()", waitTime);

function typing() {
    if (isPlaceholder == true) {
	    document.getElementById("words").placeholder = strings[i].substring(c, b);
    } else {
    	document.getElementById("words").innerHTML = strings[i].substring(c, b);
    }

	if (b == strings[i].length){
	    setTimeout("b=0, c=strings[i].length, isTyping=true", waitTime);
	} else {
		if (c != 0) {
			c--;
			if ((i == strings.length-1) && (isLoop==false)) {
				return;
			}

			if (c == 0) {
				i++;
				if (i == strings.length) {
					i=0;
				}
			}
		} else {
			var isTyping=false;
			b++;
			}
	}

	if (isTyping == false) {
		setTimeout("typing()", typingSpeed);
	} else {
		setTimeout("typing()", deleteSpeed);
	}
}