document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menuLinks");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }
});
