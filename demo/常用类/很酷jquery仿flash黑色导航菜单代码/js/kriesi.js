 function main_kwicks(){
	$('.kwicks').kwicks({  
        maxWidth: 190,  
		duration: 800,  
        easing: 'easeOutQuint'  
    });  
}


function stardust(){
var mysrc = 'http://www.kriesi.at/wp-content/themes/dark_rainbow/js/Particles.swf';
$('#wrapper h1').after('<div id="particles"></div><div id="particles_hover"></div>');

$('#particles').flash(
    { src: mysrc,
          width: 190,
          height: 100 }, 
    { update: false }
);	
	
	
	$('#particles_hover').flash(
    { src: mysrc,
          width: 190,
          height: 70 }, 
    { update: false }
);	
	
	
	
	}
	
	
function starhover(){

var my_kwickitem = $('.kwicks  li');
var particles = $('#particles_hover');
my_kwickitem.mouseover(function(){
			 switch ($(this).attr('id')) {
				case "kwick1": var my_position =  10; break;
				case "kwick2": var my_position = 116; break;
				case "kwick3": var my_position = 222; break;
				case "kwick4": var my_position = 328; break;
				case "kwick5": var my_position = 434; break;
				case "kwick6": var my_position = 540; break;
				default: var my_position = 0; 
			  }
			  
	  
			particles.css({left: my_position, display:'block'})					
													});

my_kwickitem.mouseout(function(){particles.css({display:'none'})	});
	
}
 
 
 
 
function togglebar(){
	var box = $('#sidebar .box');
	var box_title =$('#sidebar .box h2');
	box.eq(0).addClass('togglebox');
	box.eq(1).addClass('togglebox inaktiv');
	box_title.wrapInner('<a href="" title=""></a>');
	box_title.eq(0).addClass(' title_1');
	box_title.eq(1).addClass('inaktiv_text title_2');
	box_title.click(function(){
							 $('#sidebar .box:not(.inaktiv) h2').addClass('inaktiv_text');
							 $('#sidebar .inaktiv h2').removeClass('inaktiv_text'); 
							 $('#sidebar .box:not(.inaktiv) ul').slideUp("slow", function(){
																	$('#sidebar .inaktiv ul').slideDown('slow', function(){
																							var active_box = $('#sidebar .box').not('.inaktiv');
							 																var inaktiv_box = $('#sidebar .inaktiv');
																						    active_box.addClass('inaktiv');
																						    inaktiv_box.removeClass('inaktiv');
																						  });
																	});
							 return false;
							 });
	}
	
function my_lightbox(){
	
	$('.entry a[href$=jpg], .entry a[href$=png], .entry a[href$=gif], .entry a[href$=jpeg], a[@rel*=lightbox]').contents("img").parent().lightBox();
	}
	
	
function my_slide(){
	
jQuery("div#slider1").codaSlider();

	
	}



function my_smothscroll(){
$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 700);
       return false;
      }
    }
  });

	}
	
	

 
 $(document).ready(function(){					
	 main_kwicks();
	 stardust();
	 // starhover();
	 togglebar();
	 my_lightbox();
	 my_slide();
	 my_smothscroll();
});