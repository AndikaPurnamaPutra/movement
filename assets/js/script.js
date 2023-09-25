$(document).ready(function () {
    $(".slider-logo").slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".btn-arrow",
    },
    loop: true,
});

const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.toggle("active");
});
