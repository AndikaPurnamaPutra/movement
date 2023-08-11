$(document).ready(function () {
    $(".slider").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 11000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    speed: 8000,
                },
            },
        ],
    });
});

const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.toggle("active");
});
