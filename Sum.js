
// Element references
const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('resultDisplay');

/**
 * Calculates the sum of the two numbers and updates the display.
 * Only runs when the button is clicked.
 */
function calculateSum() {
    // Get values from the input fields
    const val1 = num1Input.value;
    const val2 = num2Input.value;

    // Convert values to floating-point numbers.
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);

    // Check if both conversions were successful (i.e., not NaN)
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        // Display the result, fixed to 2 decimal places if it's not a whole number
        resultDisplay.textContent = sum.toFixed(2).replace(/\.00$/, '');
    } else {
        // If input is incomplete or invalid, show an error state
        resultDisplay.textContent = 'Invalid Input';
    }
}

// Make function globally accessible for HTML attribute
window.calculateSum = calculateSum;
