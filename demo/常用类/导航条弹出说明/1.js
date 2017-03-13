$(document).ready(function(){
	$("ul.side_nav li").hover(function() {
		$(this).find("div").stop()
		.animate({left: "210", opacity:1}, "fast")
		.css("display","block")

	}, function() {
		$(this).find("div").stop()
		.animate({left: "0", opacity: 0}, "fast")
	});

});