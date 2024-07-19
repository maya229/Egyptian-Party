/// < reference types="../@types/jquery" />

$(document).ready(function() {
    let navbar = $('.icon span');
    let aboutScroll = $('#sliderDown').offset().top;

    $(window).on('scroll', function() {
        let currentScroll = $(window).scrollTop();
        if (currentScroll > aboutScroll - navbar.outerHeight(true)) {
            navbar.css('display', 'none');
        } else {
            navbar.css('display', 'block');
        }
    });
});


$('a[href^="#"]').on('click', function(e){

    let aHref = e.target.getAttribute('href')
let aHrefScroll = $(aHref).offset().top;

$('body, html').animate({scrollTop: aHrefScroll}, 1000)
})


$('.icon').on('click', function () {
    $('.inner-menu').animate({ width: 'toggle' }, 1000);
})
$('.inner-menu i').on('click', function () {
    $('.inner-menu').animate({ width: 'toggle' }, 1000);
})
$('.menu-content a').on('click', function (e) {
    $(e.target).addClass("active").siblings().removeClass("active");
})

$('.first').slideDown(700);
$('.toggle').on('click', function (e) {
    var $target = $(e.target);
    var $inner = $target.next('.inner');
    if ($inner.is(':visible')) {
        $inner.slideUp(700);
    } else {
        $('.inner').slideUp(700);
        $('.first').slideUp(700);
        $inner.slideDown(700);
        console.log($('.first').next().css('display'));
    }
});

window.onload = function () {

    countDownToSpecTime("22 september 2023 9:56:00");
}

function countDownToSpecTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(function () { countDownToSpecTime(countTo); }, 1000);
}

let count = 1;
$("textarea").on('keypress', function (e) {
    // count ++;
    // console.log(count);
    let newCount = $('#chars').text() - count
    if ($('#chars').text() > 0) {
        $('#chars').text(newCount)

    } else {
        $('#chars').text("your available character finished")
        $('form').on('submit',function (e) {
 
            e.preventDefault();
        })
    }

})








