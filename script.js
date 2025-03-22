window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showImage(index) {
    const offset = -index * 100; 

    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

showImage(currentIndex);

function toggleOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('active');  // Toggle visibility
}
