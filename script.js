let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Fungsi untuk menampilkan slide yang benar
function showSlide(index) {
    // Sembunyikan semua slide
    slides.forEach(slide => slide.style.display = "none");

    // Tampilkan slide yang sedang aktif
    slides[index].style.display = "block";

    // Atur visibilitas tombol prev & next
    prevButton.style.display = (index === 0) ? "none" : "block";
    nextButton.style.display = (index === slides.length - 1) ? "none" : "block";
}

// Fungsi untuk mengganti slide
function changeSlide(n) {
    slideIndex += n;

    // Pastikan indeks tetap dalam batas
    if (slideIndex < 0) {
        slideIndex = 0;
    } else if (slideIndex >= slides.length) {
        slideIndex = slides.length - 1;
    }

    showSlide(slideIndex);
}

// Panggil showSlide untuk menampilkan slide pertama saat halaman dimuat
showSlide(slideIndex);
