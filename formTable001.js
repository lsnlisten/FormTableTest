/**
 * Created by lsnlisten on 2017/6/12.
 */
/*
 校验规则：
 1.字符数为4~16位
 2.每个英文字母、数字、英文符号长度为1
 3.每个汉字，中文符号长度为2
 编码思路：
 按钮的时候触发事件。
 1：获取输入框的值
 2：中文字符替换成英文字符，以方便计数
 3：检查值：
 输入值不为空
 字符长度应在4-16个字符间
 满足条件
 4：根据返回值处理改变边框颜色和内容提示
 */
var $ = function(selector) {
    return document.querySelector(selector);
};
var lenReg=/^[^.]{4,16}$/;
$("#validate").onclick=function(){
    validateFun();
    $("#name").value="";
}
var validateFun=function(){
    var inputname=$("#name").value;
    var newname=inputname.replace(/^\s*|\s*$/g, '').replace(/[\u4e00-\u9fa5]/g,'AB');
    if(newname.length==0){
        $(".verifyInfo").innerText="姓名不能为空";
        $(".verifyInfo").style.color="red";
        $("#name").style.borderColor="red";
    }else if(!lenReg.test(newname)){
        $(".verifyInfo").innerText="字符长度必须为4到16个字符";
        $(".verifyInfo").style.color="red";
        $("#name").style.borderColor="red";
    }else{
        $(".verifyInfo").innerText="名称格式正确";
        $(".verifyInfo").style.color="green";
        $("#name").style.borderColor="green";
    }
}



