$(function(){

    var tl = anime.timeline({
        
    });

    tl.add({
        targets:'.section1 .line-one h1' ,
        translateY: ['100%', '0'],
        easing:'easeOutCubic',
    },0).add({
        targets:'.section1 .line-two h1',
        translateY: ['100%', '0'],
        easing:'easeOutCubic',
    },0).add({
        targets:'.section1 .line-three h1',
        translateY: ['100%', '0'],
        easing:'easeOutCubic',
    },750).add({
        targets:'.section1 .line-four h1',
        translateY: ['100%', '0'],
        //color:[' #b36c5d', '#ffffff'],
        easing:'easeOutCubic',
    },750).add({
        targets:'.section1 .intro h4',
        translateX: ['-100%', '0'],
        easing:'easeOutCubic',
        durtaion:0,
    },1300)

    var anime1 = anime({
        targets:'.vertical-filled',
        translateX: [0, '-700vw'],
        easing:'linear',
        autoplay:false,
    })

    var anime2 = anime({
        targets:'.vertical-filled .text-area',
        opacity:[0,0.25],
        easing:'linear',
        autoplay:false,
    })

    var anime3 = anime({
        targets:'.vertical-stroke',
        translateX: [0, '-700vw'],
        easing:'linear',
        autoplay:false,
    })

    var anime4 = anime({
        targets:'.vertical-stroke .text-area',
        opacity:[0,0.25],
        easing:'linear',
        autoplay:false,
    })

    var menuColor = anime({
        targets:'.menu .bar-icon',
        color:['#a87680', '#ffffff'],
        autoplay:false,
    })

    var s3TextArea = $('.vertical-filled .text-area').offset().top
    var s2 = $('.section2').offset().top

    $(document).on('scroll',function(){

    //sticky menu
    let headerOffset = $('.topnav').offset().top;
    let scrollTopValue = $(document).scrollTop();
    console.log('scroll top value is '+scrollTopValue)

        var scrollTop = $(document).scrollTop()+1000;
        console.log(s2)

        var progress = (scrollTop - s3TextArea+2000)/20000
        var progressTwo = (scrollTop - s3TextArea+2000)/1500
        var progessThree = (scrollTop - s2)/12500

        anime1.seek(anime1.duration * progress)
        anime2.seek(anime2.duration * progressTwo)
        anime3.seek(anime3.duration * progress)
        anime4.seek(anime4.duration * progressTwo)
        menuColor.seek(menuColor.duration * progessThree)
    })

})