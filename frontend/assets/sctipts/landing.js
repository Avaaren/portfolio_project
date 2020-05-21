$(document).ready(function(){
    $('.nav-item a').on('click', function(event){
        event.preventDefault();
        let id = $(this).attr('href');
        let destination = $(id).offset().top;
        $('body,html').animate({scrollTop: destination}, 500);
    });

    $('.slider-down').on('click',function(){
       let sibling = $(this).closest('.container').next('.container');
       let destination = $(sibling).offset().top;
       $('body,html').animate({scrollTop: destination},500);
    });

    $(window).on('scroll', function(){
        if (window.scrollY > 300){
            $('.to-start-button').show(200);
        }
        else {
            $('.to-start-button').hide(200);
        }
    });

    $('.to-start-button').on('click', function(){
        let nav = $('body').find('nav');
        let destination = $(nav).offset().top;
        $('body,html').animate({scrollTop: destination},500);
    });
});