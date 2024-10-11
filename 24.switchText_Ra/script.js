// Array storing different sentences
const sentences = [
    "This is the motherland.",
    "Never forget.",
    "Where you come from.",
    "How you got here.",
    "Who will you become?."
];

let currentIndex = 0;

// Reference to the image and text box
const image = document.getElementById("image");
const textBox = document.getElementById("text-box");

// Event listener that listens for a click and changes the text
image.addEventListener("click", () => {
    // Cycle through the array of sentences
    currentIndex = (currentIndex + 1) % sentences.length;
    textBox.innerHTML = sentences[currentIndex];
});
