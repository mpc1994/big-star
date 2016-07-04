window.onload=function(){
	var oBtn=document.getElementById("button");
	var oMask=document.getElementById("mask-layer");
	var oBtn2=document.getElementById("button2");
	var oUl=document.getElementById("ul-wrap");
	var oSpan=oUl.getElementsByTagName("span");
	console.log(["oSpan",oSpan]);

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
		console.log("我是第一个span");
	}

}