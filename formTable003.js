/**
 * Created by lsnlisten on 2017/6/14.
 */
var $ = function(selector) {
    return document.querySelector(selector);
};
/*模拟数据*/
var area=["北京","南京","上海"];
var school=[["北京大学","清华大学","北京师范大学"],["河海大学","南京大学"],["复旦大学","华东师范大学"]];
var option=new Option("nihao","1");
var areaId=$("#areaId");
var selid = $("#schoolId");
/*页面加载时默认选项*/
window.onload=function(){
    for(var i=0;i<school[0].length;i++){
        selid.options.add(new Option(school[0][i],i));
    }

}
/*二级联动*/
var reSelect=function(){
    for(var j=0;selid.options.length;j++){
        selid.options.remove(0);
    }
    var listId=areaId.selectedIndex;
    for(var i=0;i<school[listId].length;i++){
        selid.options.add(new Option(school[listId][i],i));
    }
}
var changeCheck=function(){
    var choice=document.getElementsByName("stage");
    for(var k=0;k<choice.length;k++){
        if(choice[k].checked){
            $("#select"+(k+1)).className="show";
        }
        else{
            $("#select"+(k+1)).className="hide";
        }
    }
}
