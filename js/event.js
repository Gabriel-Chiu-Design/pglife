$(document).ready(function () {
    
    //blogswiper01 Settings
    const swiper1 = new Swiper('.swiper', {
        direction: 'horizontal',
        speed: 400,
        loop: true,
    
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
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    //Open Filter
    $(".filter").click(function (e) { 
        e.preventDefault();
        $('.filter-overlay').addClass('active');
        $('.overlay').addClass('active');
    });

    //Close Filter
    $(".filter-overlay .close").click(function (e) { 
        e.preventDefault();
        $(".filter-overlay").removeClass("active");
        $(".overlay").removeClass("active");
        $(".option").removeClass("active");
    });
    $(".filter-overlay .btn.confirm").click(function (e) { 
        e.preventDefault();
        $(".filter-overlay").removeClass("active");
        $(".overlay").removeClass("active");
        $(".option").removeClass("active");
    });

    //Filter-option Toggle

    $(".filter-overlay .option").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("active");
    });

    // Filter Reset
    $(".action-list .btn.clear").click(function (e) { 
        e.preventDefault();
        $(".option").removeClass("active");
    });
    });