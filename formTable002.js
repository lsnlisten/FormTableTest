/**
 * Created by lsnlisten on 2017/6/13.
 */
var $ = function(selector) {
    return document.querySelector(selector);
};
var checkFocus=function(identifyID){
    if(identifyID=="name"){
        $("#"+identifyID+"-tip").innerText='必填，长度为4~16个字符';
    }else if(identifyID=="password"){
        $("#"+identifyID+"-tip").innerText='密码格式是数字，英文大小写以及下划线';
    }else if(identifyID=="repassword"){
        $("#"+identifyID+"-tip").innerText='再次确认密码';
    }else if(identifyID=="email"){
        $("#"+identifyID+"-tip").innerText='请输入常用的电子邮箱';
    }else if(identifyID="phone"){
        $("#"+identifyID+"-tip").innerText='请输入联系方式';
    }

}
var checkBlur=function(identifyID){
    if(identifyID=="name"){
        verifyName(identifyID);
    }else if(identifyID=="password"){
        verifyPass(identifyID);
    }else if(identifyID=="repassword"){
        verifyRepass(identifyID);
    }else if(identifyID=="email"){
        verifyEmail(identifyID);
    }else if(identifyID="phone"){
        verifyPhone(identifyID);
    }
}
var verifyName=function(ID){
    var inputid=$("#"+ID);
    var infoId=$("#"+ID+"-tip");
    var inputText=inputid.value.replace(/^\s*|\s*$/g, '').replace(/[\u4e00-\u9fa5]/g,'AB');
    var lenReg=/^[^.]{4,16}$/;
    if(inputText.length==0){
        infoId.innerText="姓名不能为空";
        infoId.style.color="red";
        inputid.style.borderColor="red";
        return false;
    }else if(!lenReg.test(inputText)){
        infoId.innerText="字符长度必须为4到16个字符";
        infoId.style.color="red";
        inputid.style.borderColor="red";
        return false;
    }else{
        infoId.innerText="名称格式正确";
        infoId.style.color="green";
        inputid.style.borderColor="green";
        return true;
    }
}
var verifyPass=function(ID){
    var inputid=$("#"+ID);
    var infoId=$("#"+ID+"-tip");
    var inputText=inputid.value.replace(/^\s*|\s*$/g, '');
    var lenReg=/^[0-9a-zA-Z_]{6,}$/;
    if(inputText.length<6){
        infoId.innerText="密码长度至少为6位字符";
        infoId.style.color="red";
        inputid.style.borderColor="red";
        return false;
    }else if(!lenReg.test(inputText)){
        infoId.innerText="密码格式有误";
        infoId.style.color="red";
        inputid.style.borderColor="red";
        return false;
    }else{
        infoId.innerText="密码可用";
        infoId.style.color="green";
        inputid.style.borderColor="green";
        return true;
    }
}
var verifyRepass=function(ID){
    var inputid=$("#"+ID);
    var infoId=$("#"+ID+"-tip");
    var inputText=inputid.value;
    if($("#password").value.length==0){
        infoId.innerText="密码未填写";
        infoId.style.color="red";
        inputid.style.borderColor="red";
        return false;
    } else if(inputText==$("#password").value){
        infoId.innerText="密码输入一致";
        infoId.style.color="green";
        inputid.style.borderColor="green";
        return true;
    }else{
        infoId.innerText="确认密码有误";
        infoId.style.color="red";
        inputid.style.borderColor="red";
        return false;
    }
}
var verifyEmail=function(ID) {
    var inputid = $("#" + ID);
    var infoId = $("#" + ID + "-tip");
    var inputText = inputid.value.replace(/^\s*|\s*$/g, '');
    var lenReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!lenReg.test(inputText)) {
        infoId.innerText = "邮箱格式错误";
        infoId.style.color = "red";
        inputid.style.borderColor = "red"
        return false;
    } else {
        infoId.innerText = "邮箱格式正确";
        infoId.style.color = "green";
        inputid.style.borderColor = "green";
        return true;
    }
}
var verifyPhone=function(ID){
    var inputid = $("#" + ID);
    var infoId = $("#" + ID + "-tip");
    var inputText = inputid.value.replace(/^\s*|\s*$/g, '');
    var lenReg = /^[0-9]{11}$/;
    if (!lenReg.test(inputText)) {
        infoId.innerText = "手机格式错误";
        infoId.style.color = "red";
        inputid.style.borderColor = "red";
        return false;
    } else {
        infoId.innerText = "手机格式正确";
        infoId.style.color = "green";
        inputid.style.borderColor = "green";
        return true;
    }
}
$("#validate").onclick=function(){
    if(verifyName("name")&&verifyPass("password")&&verifyRepass("repassword")&&verifyEmail("email")&&verifyPhone("phone")){
        alert("验证通过！");
    }else{
        alert("信息有误！！")
    }
}