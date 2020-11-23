$(document).on('scroll', function () {
    let scrollTopValue = $(document).scrollTop();
    let section3 = $('.about-section3').offset().top;
    // console.log(section3)
    // console.log(scrollTopValue)

    
    if (scrollTopValue > (section3-20)) {
        console.log('hoy')
        $('.about-menu .bar-icon').css('color','white');

    } else {
        //$('.menu').removeClass('fixed');
        // $('ul>li>a').css('color', 'white');
        // $('.header-container ul>li>a>span').css('background-color', 'white');
        $('.about-menu .bar-icon').css('color','#a87680');
    }

    if (scrollTopValue > (100)) {
        // $('.header-container').addClass('fixed');
        // $('.header-container ul>li>a').css('color', '#00a78e');
        // $('.header-container ul>li>a>span').css('background-color', '#00a78e');

        $('.topnav').css('background-color','rgb(238, 238, 238)');
        $('.topnav').addClass('shadow-bot')

    } else {
        $('.topnav').css('background-color','#00000000');
        $('.topnav').removeClass('shadow-bot')

    }//end of sticky menu
})

//menu click
$('.bar-icon').click(function(){
    $('.side-menu').removeClass('hide');
    $('.side-menu').addClass('show');
});
//side-menu click
$('.fa-times').click(function(){
    $(this).parent().parent().removeClass('show');
    $(this).parent().parent().addClass('hide');
})