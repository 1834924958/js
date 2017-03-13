$(function() {            
    $('#ad_1 > img').each(function(i,e){
        rotate($(this),500,3000,i);
    });
    function rotate(elem1,speed,timeout,i){
        elem1.animate({'marginLeft':'18px','width':'0px'},speed,function(){
            var other;
            if(elem1.parent().attr('id') == 'ad_1')
                other = $('#ad_2').children('img').eq(i);
            else
                other = $('#ad_1').children('img').eq(i);
                other.animate({'marginLeft':'0px','width':'35px'},speed,function(){
                var f = function() { rotate(other,speed,timeout,i) };
                setTimeout(f,timeout);
            });
        });
    }
});
