let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showImage(index) {
    // Calculate the correct transform value to shift images
    const offset = -index * 100;  // Shift by 100% width per image

    // Apply the transform to the carousel container to show the correct image
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

// Initialize carousel
showImage(currentIndex);
