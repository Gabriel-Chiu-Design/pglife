$(document).ready(function () {
    //side-menu
    $(".header .side-menu-btn").click(function (e) { 
        e.preventDefault();
        $(".side-menu").toggleClass("active");
        $(".overlay").toggleClass("active");
    });
    
    $(".overlay").click(function (e) { 
        e.preventDefault();
        $(".side-menu").removeClass("active");
        $(".overlay").removeClass("active");
        $(".filter-overlay").removeClass("active");
        $(".option").removeClass("active");
    });

    $(".side-menu li a").click(function (e) { 
        $(".side-menu").removeClass("active");
        $(".overlay").removeClass("active");
    });

    $("#live-chat").click(function (e) { 
        e.preventDefault();
        window.tidioChatApi.show();
        window.tidioChatApi.toggle();
    });
});