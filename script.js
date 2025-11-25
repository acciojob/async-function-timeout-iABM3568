// Get references to the HTML elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const submitButton = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Function that creates a delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to display message after delay
async function displayMessageAfterDelay() {
  // Get the values from input fields
  const text = textInput.value;
  const delay = Number(delayInput.value);
  
  // Clear previous output
  outputDiv.textContent = '';
  
  // Wait for the specified delay
  await wait(delay);
  
  // Display the message in the output div
  outputDiv.textContent = text;
}

// Add click event listener to the button
submitButton.addEventListener('click', displayMessageAfterDelay);