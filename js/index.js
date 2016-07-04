window.onload=function(){
	var oBtn=document.getElementById("button");
	var oMask=document.getElementById("mask-layer");
	var oBtn2=document.getElementById("button2");
	var oBtn1=document.getElementById("button1");
	var oUl=document.getElementById("ul-wrap");
	var oSpan=oUl.getElementsByTagName("span");
	var oCh=document.getElementById("changebox");
	//显示遮盖层
	oBtn.onclick=function(){
		oMask.style.display="block";

	};


	//隐藏遮盖层
	oBtn2.onclick=function(){
		oMask.style.display="none";
	};

	//第一个span按钮操作
	oSpan[0].onclick=function(){
       oCh.style.background="red";
	}
	oSpan[1].onclick=function(){
       oCh.style.background="yellow";
	}
	oSpan[2].onclick=function(){
       oCh.style.background="blue";
	}

 	oSpan[3].onclick=function(){
 		oCh.style.width="200px";
 	}
 	oSpan[4].onclick=function(){
 		oCh.style.width="300px";
 	}
 	oSpan[5].onclick=function(){
 		oCh.style.width="400px";
 	}
 	oSpan[6].onclick=function(){
 		oCh.style.height="50px";
 	}
 	oSpan[7].onclick=function(){
 		oCh.style.height="100px";
 	}
 	oSpan[8].onclick=function(){
 		oCh.style.height="150px";
 	}
 	oBtn1.onclick=function(){
 		oCh.style.background="black";
 		oCh.style.width="200px";
 		oCh.style.height="200px";
 	}
}