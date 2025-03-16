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

document.addEventListener("DOMContentLoaded", () => {
    const readMoreButton = document.querySelector(".read-more-btn");
    const extraContent = document.querySelector(".extra-content");

    readMoreButton.addEventListener("click", () => {
        extraContent.classList.toggle("show");
        
        if (extraContent.classList.contains("show")) {
            readMoreButton.textContent = "Read Less";
        } else {
            readMoreButton.textContent = "Read More";
        }
    });
});
