$(document).ready(function () {
    
//blogswiper Settings
const swiper1 = new Swiper('.article-box.box-01 .swiper', {
    direction: 'horizontal',
    speed: 400,
    slidesPerView:3,
    slidesPerGroup:3,
    spaceBetween:48,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
    nextEl: '.box-01 .swiper-button-next',
    prevEl: '.box-01 .swiper-button-prev',
    },

//RWD
breakpoints: {
    // when window width is >= 768px
    320: {
        slidesPerView: 1,
        spaceBetween: 24,
        slidesPerGroup:1
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup:2
    },
    // when window width is >= 1366px
    1024: {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroup:3
    },
    }
});

});