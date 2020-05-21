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
});