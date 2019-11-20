/*
* @Author: feito
* @Date:   2019-11-15 13:58:42
* @Last Modified by:   feito
* @Last Modified time: 2019-11-15 18:53:22
*/
var emailObj;
var usernameObj;
var passwordObj;
var confirmObj;
var telephoneObj;
var emailMsg;
var usernameMsg;
var passwordMsg;
var confirmMsg;
var telephoneMsg;

window.onload=function(){
	emailObj=document.getElementById("email");
	usernameObj=document.getElementById("username");
	passwordObj=document.getElementById("password");
	confirmObj=document.getElementById("repassword");
	telephoneObj=document.getElementById("telephone");
	emailMsg=document.getElementById("emailMsg");
	usernameMsg=document.getElementById("usernameMsg");
	passwordMsg=document.getElementById("passwordMsg");
	confirmMsg=document.getElementById("confirmMsg");
	telephoneMsg=document.getElementById("telephoneMsg");
};
//验证整个表单
function checkForm(){
	var bEmail=checkEmail();
	var bUsername=checkUsername();
	var bPassword=checkPassword();
	var bConfirm=checkConfirm();
	 return bUsername && bPassword && bConfirm && bEmail;
}
//验证邮箱
function checkEmail(){
	var regex = /^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,4}$/; //\w是指包含大小写字母数字和下滑线[0-9a-zA-Z]
	var value = emailObj.value;
	var msg="";
	if(!value){
		msg="邮箱不能为空：";
	}
	else if(!regex.test(value)){
		msg="邮箱格式不合法:";
	}//判断input里面的value否符合正则表达式
		
	emailMsg.innerHTML=msg;
emailObj.parentNode.parentNode.style.color=msg==""?"black":"red"
	return msg=="";
}
//验证昵称
function checkUsername(){
	var regex = /^[a-zA-Z_]\w{0,9}$/;
	var value = usernameObj.value;
	var msg="";
	if(!value){
		msg="昵称必须填写：";
	}
	else if(!regex.test(value)){
		msg="昵称不合法：";
	}
	usernameMsg.innerHTML=msg;
usernameObj.parentNode.parentNode.style.color=msg==""?"black":"red";
	return msg=="";
}
//验证密码
function checkPassword(){
	var regex=/^.{6,16}$/;
	var value=passwordObj.value;
	var msg="";
	if(!value){
		msg="密码必须填写：";
	}
	else if(!regex.test(value)){
		msg="密码不合法："
	}
	passwordMsg.innerHTML=msg;
passwordObj.parentNode.parentNode.style.color=msg==""?"black":"red";
	return msg=="";
}
//验证确认密码
function checkConfirm(){
	var passwordValue=passwordObj.value;
	var confirmValue=confirmObj.value;
	var msg="";
	if(!confirmValue){
		msg="确认密码必须填写";
	}
	else if(passwordValue!=confirmValue){
		msg="密码必须保持一致";
	}
	confirmMsg.innerHTML=msg;
confirmObj.parentNode.parentNode.style.color=msg=="" ? "black" : "red";
 	return msg=="";
}
//验证确认电话号码
function checkTelephone(){
	var regex=/^1[3456789]\d{9}$/;
	var value=telephoneObj.value;
	var msg="";
	if(!value){
		msg="联系电话不能为空";
	}
	else if(!regex.test(value)){
		msg="手机号码有误";
	}
	telephoneMsg.innerHTML=msg;
telephoneObj.parentNode.parentNode.style.color=msg==""?"black":"red";
	return msg=="";
}