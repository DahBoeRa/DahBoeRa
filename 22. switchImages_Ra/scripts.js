// Select the image element from the DOM
const imageElement = document.getElementById('current-image');

// Array of images to cycle through
const images = [
    'images/siblings.jpg',
    'images/mikko.jpg',
    'images/BKO.jpg'
];

// Keep track of the current image index
let currentIndex = 0;

// Function to update the image source to the next one in the array
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

// Add event listener for click event to cycle through images
imageElement.addEventListener('click', showNextImage);
// JavaScript Document