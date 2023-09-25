console.log("hallo");

// Navbar Mobile
const navbarToggler = document.querySelector(".nav-btn-responsive");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
});

// logic respondsive

// const btnRes = document.querySelector('.nav-btn-respondsive');
// const menu = document.querySelector('.nav-menu');

// btnRes.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   btnRes.classList.toggle('cross');
// });

// slick
$(document).ready(function () {
    $(".slider-partner").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 5000,
    });

    $(".slider-control").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 5000,
    });
});

document.addEventListener("DOMContentLoaded", function () {
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
});

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
