let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showImage(index) {
    const offset = -index * 100; // Move the images to show the correct one
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
