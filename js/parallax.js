$(document).ready(function(){
//----- Se ejecuta cada vez que hay un cambio de posicion en el  scroll---- .scroll -----
    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform':'translate(0px,' + scroll / 6 + '%)'
            });

            $('.acerca_de  article').css({
                'transform':'translate(0px,-' + scroll / 8 + '%)'
            });
            
        }
    });
//----- Se ejecuta cada vez que hay un cambio en el tamaño de la pantalla---- .resize -----
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800) {
            $('.acerca_de article').css({
                'transform' : 'translate(0px 0px)'
            });
        }
    });
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 400) {
            $('.acerca_de article').css({
                'transform' : 'translate(0px 0px)'
            });
        }
    });


});