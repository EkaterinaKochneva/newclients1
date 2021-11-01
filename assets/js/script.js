$(function () {
    $(".before-after").twentytwenty({
        no_overlay: true
    });
  });

$(document).ready(function(){
    $('.cases-slider').bxSlider({
        touchEnabled: false,
        infiniteLoop: true,
        pager: false
    });

    $(".cases__link--js").click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle().parents('.cases__item').toggleClass("active");
    });

 });
