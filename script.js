//your JS code here. If required.
 // Get references to the HTML elements
    const textInput = document.getElementById('text');
    const delayInput = document.getElementById('delay');
    const submitButton = document.getElementById('btn');
    const outputDiv = document.getElementById('output');
    const loadingDiv = document.getElementById('loading');

    // Function that creates a delay using Promise
    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Async function to display message after delay
    async function displayMessageAfterDelay() {
      // Get the values from input fields
      const text = textInput.value;
      const delay = Number(delayInput.value);

      // Validate inputs
      if (!text || !delay) {
        alert('Please fill in both fields!');
        return;
      }

      // Clear previous output
      outputDiv.textContent = '';
      
      // Show loading indicator
      loadingDiv.classList.add('active');
      
      // Wait for the specified delay
      await wait(delay);
      
      // Hide loading indicator
      loadingDiv.classList.remove('active');
      
      // Display the message in the output div
      outputDiv.textContent = text;
    }

    // Add click event listener to the button
    submitButton.addEventListener('click', displayMessageAfterDelay);

    // Allow Enter key to submit
    [textInput, delayInput].forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          displayMessageAfterDelay();
        }
      });
    });