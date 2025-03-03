let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function changeSlide(n) {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");

    // Sembunyikan tombol "Prev" jika di slide pertama
    if (slideIndex === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    // Sembunyikan tombol "Next" jika di slide terakhir
    if (slideIndex === slides.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}

// Panggil fungsi sekali untuk memastikan tombol awal diatur dengan benar
changeSlide(0);
