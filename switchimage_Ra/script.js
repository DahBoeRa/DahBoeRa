// Paths to the images in the "images" folder
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let currentIndex = 0;

// Get the image container element
const imageContainer = document.getElementById('imageContainer');

// Function to update the displayed image
const updateImage = () => {
    imageContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
};

// Initialize with the first image
updateImage();

// Change the image on click
document.body.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});
// JavaScript Document