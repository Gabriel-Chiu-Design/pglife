$(document).ready(function () {

    //blogbanner-swiper Settings
    const coverswiper = new Swiper('.blogswiper .swiper', {
        direction: 'horizontal',
        speed: 400,
        loop:true,
        

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.blogswiper .swiper-button-next',
        prevEl: '.blogswiper .swiper-button-prev',
        },
    });

    //blogswiper Settings
    const swiper1 = new Swiper('.bloglist .swiper', {
        direction: 'horizontal',
        speed: 400,
        grid: {
            fill: 'row',
            rows: 3,
          },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        renderBullet: function (index, className) {                 //added
            return `<span class="${className}">${index + 1}</span>` //added
        },                                                          //added
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.bloglist .swiper-button-next',
        prevEl: '.bloglist .swiper-button-prev',
        },

    //RWD
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup:1,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            slidesPerGroup:2,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            slidesPerGroup:3
        },
        // when window width is >= 1024px
        1366: {
            slidesPerView: 3,
            slidesPerGroup:3
        },
        }
    });

    //swiper-button-auto-scroll
    $(".bloglist .swiper-button-prev, .bloglist .swiper-button-next").click(function (e) { 
        e.preventDefault();
        var target=$(this).attr('href');
        var targetPos=$(target).offset().top;
        console.log(target, targetPos);
        $('html, body').stop().animate({scrollTop: targetPos -144}, 1000);
    });
});