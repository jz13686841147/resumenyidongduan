document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4 > 120 ? 120:document.documentElement.clientWidth/6.4 + "px";
window.onresize = function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth/6.4 > 120 ? 120:document.documentElement.clientWidth/6.4 + "px";
}