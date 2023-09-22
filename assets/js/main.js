console.log("hallo");

// Navbar Responsive

const navbarToggler = document.querySelector(".nav-btn-responsive");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
});

// logic respondsive

// const btnRes = document.querySelector(".nav-btn-responsive");
// const menu = document.querySelector(".nav-menu");

// btnRes.addEventListener("click", () => {
//     menu.classList.toggle("active");
//     btnRes.classList.toggle("cross");
// });

// slick

$(document).ready(function () {
    $(".slider-touch").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 5000,
    });
    $(".slider-card-project").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        variableWidth: true,
    });
});

// Mengatur navigasi prev dan next menggunakan button
$('.btn-arrow-previous').click(function(){
    $('.slider-card-project').slick('slickPrev');
});

$('.btn-arrow-next').click(function(){
    $('.slider-card-project').slick('slickNext');
});

// counterup

jQuery(document).ready(function ($) {
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
});
$(".counter").addClass("animated fadeInDownBig");
$(".subtext-text-desc").addClass("animated fadeIn");

// logic copy clipboard

const copyButtonLabel = "Copy Code";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");

        button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });
    }
});

async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerText = "Code Copied!";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
}
