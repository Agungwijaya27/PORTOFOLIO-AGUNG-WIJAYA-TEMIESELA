document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (!prevButton || !nextButton || slides.length === 0) {
        console.error("Tombol atau slide tidak ditemukan di HTML.");
        return;
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });

        // Pastikan tombol Prev hanya tersembunyi di slide pertama
        prevButton.style.display = (index === 0) ? "none" : "inline-block";

        // Pastikan tombol Next hanya tersembunyi di slide terakhir
        nextButton.style.display = (index === slides.length - 1) ? "none" : "inline-block";

    }

    function changeSlide(n) {
        slideIndex = Math.max(0, Math.min(slideIndex + n, slides.length - 1));
        showSlide(slideIndex);
    }

    prevButton.addEventListener("click", () => changeSlide(-1));
    nextButton.addEventListener("click", () => changeSlide(1));

    showSlide(slideIndex); // Tampilkan slide pertama saat halaman dimuat
});
