window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

function showMenubar() {
    const navmobile = document.querySelector('.navmobile')
    navmobile.style.display = 'flex'
}

function hideMenubar() {
    const navmobile = document.querySelector('.navmobile')
    navmobile.style.display = 'none'
}

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
