/**
 * Created by Administrator on 2016/8/23.
 */
var boxNode=document.getElementById("box");
var asNode=boxNode.getElementsByTagName("a");
var leftNode=asNode[0];//左箭头
var rightNode=asNode[asNode.length-1];//右箭头
var boxNodeWidth=boxNode.clientWidth;//div的可视宽度

boxNode.onmouseenter=function(){//移入出现箭头
    leftNode.style.display="block";
    rightNode.style.display="block";
    window.clearInterval(autoDo);
}
boxNode.onmouseleave=function(){//移出箭头消失
    leftNode.style.display="none";
    rightNode.style.display="none";
    window.setInterval(rightNode.onclick,3000);
}


var bool=true;
leftNode.onclick=function(){//按左箭头
    if(bool) {
        leftMove(0);
        bool=false;
    }
}
rightNode.onclick=function(){//按右箭头
    if(bool) {
        rightMove(0);
        bool=false;
    }
}


function leftMove(num){
    var lisNode=boxNode.getElementsByTagName("li");
    if(num==0){
        var lastLi=lisNode[lisNode.length-1];
        var ulNode=lastLi.parentNode;
        lastLi.style.marginLeft=-boxNodeWidth+"px";
        ulNode.insertBefore(lastLi,ulNode.firstChild);
    }
    num+=3;
    if(num<=boxNodeWidth){
        lisNode[0].style.marginLeft=(-boxNodeWidth+num)+"px";
        window.setTimeout(function(){ leftMove(num);},10);
    }
    else{
        bool=true;
    }
}
function rightMove(num){
    var firstLi=boxNode.getElementsByTagName("li")[0];
    num+=3;
    if(num<=boxNodeWidth){
        firstLi.style.marginLeft=-num+"px";
        window.setTimeout(function(){ rightMove(num);},10);
    }
    else{
        firstLi.parentNode.appendChild(firstLi);
        firstLi.style.marginLeft=0;
        bool=true;
    }
}

var autoDo=window.setInterval(rightNode.onclick,3000);
