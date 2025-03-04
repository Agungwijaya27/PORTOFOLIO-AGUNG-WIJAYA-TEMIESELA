document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (!prevButton || !nextButton) {
        console.error("Tombol Prev atau Next tidak ditemukan di HTML.");
        return;
    }

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    
        // Sembunyikan tombol Prev jika di slide pertama
        prevButton.style.visibility = index === 0 ? "hidden" : "visible";
    
        // Sembunyikan tombol Next jika di slide terakhir
        nextButton.style.visibility = index === slides.length - 1 ? "hidden" : "visible";
    }
    

    function changeSlide(n) {
        slideIndex = Math.min(Math.max(slideIndex + n, 0), slides.length - 1);
        showSlide(slideIndex);
    }

    prevButton.addEventListener("click", function () {
        changeSlide(-1);
    });

    nextButton.addEventListener("click", function () {
        changeSlide(1);
    });

    showSlide(slideIndex);
});
