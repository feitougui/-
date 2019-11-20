/*
* @Author: feito
* @Date:   2019-11-12 13:17:30
* @Last Modified by:   feito
* @Last Modified time: 2019-11-13 14:48:52
*/
$(document).ready(function(){
	var time = new Date();
	var days=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];		//创建星期数组，等下通过索引显示
	$('.year')[0].innerHTML=time.getFullYear()+" / ";	//年份
	$('.month')[0].innerHTML=time.getMonth()+1+" / ";	//月份
	$('.date')[0].innerHTML=time.getDate()+"&nbsp;&nbsp;";	//日
	$('.day')[0].innerHTML=days[time.getDay()];		//time.getDay作为索引
});