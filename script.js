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
    
        // Perbaikan: Pastikan tombol Prev hanya tersembunyi di slide pertama
        if (index === 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block"; // Pastikan muncul di slide selain pertama
        }
    
        // Perbaikan: Pastikan tombol Next hanya tersembunyi di slide terakhir
        if (index === slides.length - 1) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }
    
        // Debugging tambahan
        console.log("Slide Index:", index);
        console.log("Prev Button Display:", prevButton.style.display);
        console.log("Next Button Display:", nextButton.style.display);
    }
    
    function changeSlide(n) {
        slideIndex = Math.max(0, Math.min(slideIndex + n, slides.length - 1));
        showSlide(slideIndex);
    }

    prevButton.addEventListener("click", () => changeSlide(-1));
    nextButton.addEventListener("click", () => changeSlide(1));

    showSlide(slideIndex); // Tampilkan slide pertama saat halaman dimuat
});
