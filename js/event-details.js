$(document).ready(function () {

    /*Event on click "Comment" Tab*/
    $(".comments, .overview").click(function (e) { 
        e.preventDefault();
        $(".overview-title, .overview, .comments, .comments-title, .event-introduction, .event-coordinators, .comment-row").toggleClass("active");
    });

});