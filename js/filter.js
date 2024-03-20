$(document).ready(function () {
   
    //filter-type
    $(".filter .event.type .menuheader").click(function (e) { 
        e.preventDefault();
        $(".event.type .filter-menu").toggleClass("active");
        $(".event.type .menuheader").toggleClass("active");
    });
    
    //filter-type-items (checkbox)
    $(".filter .event.type .filter-item.item-1").click(function (e) { 
        e.preventDefault();
        $(".event.type .filter-menu .filter-item.item-1").toggleClass("active");
    });
    $(".filter .event.type .filter-item.item-2").click(function (e) { 
        e.preventDefault();
        $(".event.type .filter-menu .filter-item.item-2").toggleClass("active");
    });
    $(".filter .event.type .filter-item.item-3").click(function (e) { 
        e.preventDefault();
        $(".event.type .filter-menu .filter-item.item-3").toggleClass("active");
    });
    $(".filter .event.type .filter-item.item-4").click(function (e) { 
        e.preventDefault();
        $(".event.type .filter-menu .filter-item.item-4").toggleClass("active");
    });
    $(".filter .event.type .filter-item.item-5").click(function (e) { 
        e.preventDefault();
        $(".event.type .filter-menu .filter-item.item-5").toggleClass("active");
    });

    //clear-filter-type
    $(".filter .event.type .clear-box").click(function (e) { 
        e.preventDefault();
        $(".event.type .filter-menu .filter-item").removeClass("active");
    });

    //filter-age
    $(".filter .event.age .menuheader").click(function (e) { 
        e.preventDefault();
        $(".event.age .filter-menu").toggleClass("active");
        $(".event.age .menuheader").toggleClass("active");
    });
    //filter-age-items (checkbox)
    $(".filter .event.age .filter-item.item-1").click(function (e) { 
        e.preventDefault();
        $(".event.age .filter-menu .filter-item.item-1").toggleClass("active");
    });
    $(".filter .event.age .filter-item.item-2").click(function (e) { 
        e.preventDefault();
        $(".event.age .filter-menu .filter-item.item-2").toggleClass("active");
    });
    $(".filter .event.age .filter-item.item-3").click(function (e) { 
        e.preventDefault();
        $(".event.age .filter-menu .filter-item.item-3").toggleClass("active");
    });
    $(".filter .event.age .filter-item.item-4").click(function (e) { 
        e.preventDefault();
        $(".event.age .filter-menu .filter-item.item-4").toggleClass("active");
    });
    $(".filter .event.age .filter-item.item-5").click(function (e) { 
        e.preventDefault();
        $(".event.age .filter-menu .filter-item.item-5").toggleClass("active");
    });

    //clear-filter-age
    $(".filter .event.age .clear-box").click(function (e) { 
        e.preventDefault();
        $(".event.age .filter-menu .filter-item").removeClass("active");
    });

    //filter-date
    $(".filter .event.date .menuheader").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu").toggleClass("active");
        $(".event.date .menuheader").toggleClass("active");
    });
    //filter-date-items (checkbox)
    $(".filter .event.date .filter-item.item-1").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu .filter-item.item-1").toggleClass("active");
    });
    $(".filter .event.date .filter-item.item-2").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu .filter-item.item-2").toggleClass("active");
    });
    $(".filter .event.date .filter-item.item-3").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu .filter-item.item-3").toggleClass("active");
    });
    $(".filter .event.date .filter-item.item-4").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu .filter-item.item-4").toggleClass("active");
    });
    $(".filter .event.date .filter-item.item-5").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu .filter-item.item-5").toggleClass("active");
    });
    $(".filter .event.date .filter-item.item-6").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu .filter-item.item-6").toggleClass("active");
    });
    $(".filter .event.date .filter-item.item-7").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu .filter-item.item-7").toggleClass("active");
    });

    //clear-filter-date
    $(".filter .event.date .clear-box").click(function (e) { 
        e.preventDefault();
        $(".event.date .filter-menu .filter-item").removeClass("active");
    });

});