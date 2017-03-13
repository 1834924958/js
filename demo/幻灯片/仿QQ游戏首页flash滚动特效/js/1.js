$(document).ready(function(){
	$("div[id*='listbox']").hover(
		function(){$(this).animate({"margin-top":"-10px"},200)},
		function(){$(this).animate({"margin-top":"0px"},200);}
	);
	var tmp=$("div[id*='listbox']").eq(0).children("img").attr("src");
	//鼠标点击过程
	$("div[id*='listbox']").click(function(){
		  if(parseInt($(this).css("z-index"))<=3){
			  var curZindex = parseInt($(this).css("z-index"));
			  //通过z-index差计算该层需要经过几次轮换效果置顶，
			  var  fntimes = 4-curZindex;
			  //对于当前处于第一位的图片点击无效果.
			  $(document).everyTime(300,function(){
				  $("div[id*='listbox']").each(function(){
					  if(parseInt($(this).css("z-index"))==4){$(this).css("z-index","1");}
					  else{$(this).css("z-index",""+(parseInt($(this).css("z-index"))+1)+"");}
					  $(this).css("margin-top","0px");
					  $(this).animate({"margin-left":((4-parseInt($(this).css("z-index")))*29)+"px"},300);
				  });
			  },fntimes);
		  }
	  });
	


setInterval(function(){
	$("div[id*='listbox']").each(function(){
				if(parseInt($(this).css("z-index"))==4){$(this).css("z-index","1");}
				else{$(this).css("z-index",""+(parseInt($(this).css("z-index"))+1)+"");}
				$(this).animate({"margin-left":((4-parseInt($(this).css("z-index")))*29)+"px"},300);
			});
},3000);

})