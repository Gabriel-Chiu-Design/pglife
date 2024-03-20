$(document).ready(function () {
   
//Concept-swiper Settings
    const conceptswiper = new Swiper('.conceptswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,

    //Autotplay 
    autoplay: {
        delay:3000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});

//Event-swiper Settings

    const eventswiper = new Swiper('.eventswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.eventswiper .swiper-button-next',
      prevEl: '.eventswiper .swiper-button-prev',
    },
  
  });

//Blog-swiper Settings
    
    const blogswiper = new Swiper('.blogswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:500,
    slidesPerView: 2,
    spaceBetween: 48,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 768px
      320: {
        slidesPerView: 1,
        spaceBetween: 24
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // when window width is >= 1366px
      1366: {
        slidesPerView: 2,
        spaceBetween: 48
      },
    }
  
  });

//Sharing-swiper Settings

  const sharingswiper = new Swiper('.sharingswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed:500,
    spaceBetween: 48,

    // Navigation arrows
    navigation: {
      nextEl: '.sharingslider .swiper-button-next',
      prevEl: '.sharingslider .swiper-button-prev',
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      // when window width is >= 768px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // when window width is >= 1366px
      1366: {
        slidesPerView: 2,
        spaceBetween: 48
      },
    }
  });
});