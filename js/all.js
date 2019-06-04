$(function(){
    // 
    var duration = 300;

    var $images = $('#works p'),
        $scrollArrow = $('.cd-scroll-down');

    // WEB WORKS
    $images.filter(':nth-child(1)')
        .on('mouseover', function(){
            $(this).find('span, strong, button').stop(true).animate({opacity: 1}, duration);
        })
        .on('mouseout', function(){
            $(this).find('span, strong, button').stop(true).animate({opacity: 0}, duration);
        });
        

    //cd-scroll-down
    $scrollArrow.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function smoothScroll(target) {
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            900
        );
    }



});
