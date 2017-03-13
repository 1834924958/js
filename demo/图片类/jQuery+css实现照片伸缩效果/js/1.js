 $(function() {
        $('#col img').hover(
            function(){
                var $this = $(this);
                $this.stop().animate({'opacity':'1.0','height':'200px','top':'0px','left':'0px'});
            },
            function(){
                var $this = $(this);
                $this.stop().animate({'opacity':'0.5','height':'500px','top':'-66.5px','left':'-150px'});
            }
        );
    });