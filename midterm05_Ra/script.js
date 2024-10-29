// Select all text-box elements
const textBoxes = document.querySelectorAll('.text-box');

// Create a function to change the background image
const changeBackground = (image) => {
    // Create the image URL by referencing the images folder
    const imageUrl = `./images/${image}`;
    console.log(`Attempting to load background image: ${imageUrl}`);
    
    // Apply the image as the background
    document.body.style.backgroundImage = `url('${imageUrl}')`;
};

// IntersectionObserver callback function
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // Check if the element is intersecting with the viewport
        if (entry.isIntersecting) {
            const bgImage = entry.target.getAttribute('data-bg');
            console.log(`Text box in view. Changing background to: ${bgImage}`);
            changeBackground(bgImage);
        }
    });
};

// Create an IntersectionObserver
const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5 // Trigger when at least 50% of the box is visible
});

// Observe each text box
textBoxes.forEach(box => {
    observer.observe(box);
});
// JavaScript Document