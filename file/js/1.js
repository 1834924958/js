(function(){
	var n=0;
	var obj=document.getElementById("#topNavWrapper");
	if(!obj){return false;}
	var x=0;
	var fe=$("#topNavWrapper");
	window.onscroll=function(){
		obj.style.top=(document.body.scrollTop||document.documentElement.scrollTop)+n+'px';
		x=(document.body.scrollTop||document.documentElement.scrollTop)+n;
		if(x==0){fe.fadeOut().hide()}else{fe.fadeIn().show()};
	};
	window.onresize=function(){obj.style.top=(document.body.scrollTop||document.documentElement.scrollTop)+n+'px'};
})();