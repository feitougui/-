/*
* @Author: feito
* @Date:   2019-11-13 16:13:39
* @Last Modified by:   feito
* @Last Modified time: 2019-11-13 16:14:07
*/

$(document).ready(function(){
	var style=document.styleSheets[2];
	console.log(style);
	var cont=$('.cont')[0];
	var txt=$('.txt')[0];
	var txtWidth=txt.offsetWidth;
	cont.style.width=txtWidth+'px';
	cont.style.left='-'+txtWidth+'px';
	style.insertRule("@-webkit-keyframes mymove {from {left:-"+txtWidth+"px;}to {left:0px;}}",24);

	});
	