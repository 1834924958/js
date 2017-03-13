$(document).ready(function(){

	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
$(function(){
		$("a img.fade").fadeTo("fast", .5); // This sets the opacity of the thumbs to fade down to 60% when the page loads
		$("a img.fade").hover(function(){
			$(this).fadeTo("slow", 1); // This should set the opacity to 100% on hover
		},function(){
	   		$(this).fadeTo("fast", .5); // This should set the opacity back to 60% on mouseout
		});
	});
});
