window.addEventListener("load", function () {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((img) => {
        img.src = img.dataset.src;
    });
});
