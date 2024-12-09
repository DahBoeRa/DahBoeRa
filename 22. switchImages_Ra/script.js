const imageFolder = "images";
const images = [
    `${imageFolder}/image1.jpg`,
    `${imageFolder}/image2.jpg`,
    `${imageFolder}/image3.jpg`,
];

let currentImageIndex = 0;

// Function to update the background image
function updateImage() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// Event listener to cycle images on click
document.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

// Initialize with the first image
updateImage();
// JavaScript Document