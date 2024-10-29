// Select all text boxes
const textBoxes = document.querySelectorAll('.text-box');

// Function to change background image
const changeBackground = (image) => {
    document.body.style.backgroundImage = `url(${image})`;
};

// Create an IntersectionObserver to observe when text boxes come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the background image from the data attribute
            const bgImage = entry.target.getAttribute('data-bg');
            changeBackground(bgImage);
        }
    });
});

// Observe each text box
textBoxes.forEach(box => {
    observer.observe(box);
});
// JavaScript Document