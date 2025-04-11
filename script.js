const textarea = document.getElementById("textarea");
const submit = document.getElementById("submit");
const h2 = document.getElementById("h2");
const div = document.getElementById("div");
let currentIndex = 0; // To track the current position in the text
let sentences = []; // To store all sentences

submit.onclick = function () {
    const text = textarea.value; // Get the text from the textarea
    textarea.style.display = 'none'; // Hide the textarea
    submit.style.display = 'none'; // Hide the button

    // Split the text into sentences using periods
    sentences = text.split(".").map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);

    // Display the first sentence
    if (sentences.length > 0) {
        h2.textContent = sentences[currentIndex] + ".";
    } else {
        h2.textContent = "No sentences found.";
        return;
    }

    // Add buttons dynamically to the div
    div.innerHTML = `
        <button id="nextLine">Next Line</button>
        <button id="preLine">Previous Line</button>
        <button id="reset">Reset</button>
        <button id="allLines">All Lines</button>`;

    // Add functionality to the "Next Line" button
    const nextLine = document.getElementById("nextLine");
    nextLine.onclick = function () {
        currentIndex++;
        if (currentIndex < sentences.length) {
            h2.textContent = sentences[currentIndex] + "."; // Display the next sentence
        } else {
            h2.textContent = "No more sentences.";
            currentIndex = sentences.length - 1; // Prevent going out of bounds
        }
    };
    const preLine = document.getElementById("preLine");
    preLine.onclick = function () {
        currentIndex--;
        if (currentIndex < sentences.length) {
            h2.textContent = sentences[currentIndex] + "."; // Display the next sentence
        } 
        else {
            h2.textContent = "No more sentences.";
            currentIndex = sentences.length - 1; // Prevent going out of bounds
        }
    };
    const allLines = document.getElementById("allLines");
    allLines.onclick = function (){
        h2.textContent = sentences.join(". ") + "."; // Display all sentences
        currentIndex = sentences.length - 1; // Prevent going out of bounds
    }
    // Add functionality to the "Reset" button
    const reset = document.getElementById("reset");
    reset.onclick = function () {
        location.reload(); // Reload the page to reset everything
    };
};
