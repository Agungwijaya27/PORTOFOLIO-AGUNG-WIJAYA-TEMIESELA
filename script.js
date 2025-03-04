document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // Pastikan elemen slide ditemukan sebelum menjalankan kode
    if (slides.length === 0) {
        console.error("Tidak ada elemen dengan class 'slide'. Pastikan HTML sudah benar.");
        return;
    }

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        if (slides[index]) {
            slides[index].style.display = "block";
        }

        // Sembunyikan tombol Prev jika di slide pertama
        prevButton.style.display = index === 0 ? "none" : "block";
        nextButton.style.display = index === slides.length - 1 ? "none" : "block";
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

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(slideIndex);
});
