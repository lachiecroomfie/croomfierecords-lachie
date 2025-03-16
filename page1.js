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
