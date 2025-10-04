/* ========================================
   PART 2: JAVASCRIPT FUNCTIONS
   Demonstrating Scope, Parameters & Return Values
   ======================================== */

// GLOBAL SCOPE VARIABLES
// These variables are accessible throughout the entire script
const globalAppName = "CSS & JavaScript Portfolio";
let globalCounter = 0;

/**
 * Function demonstrating parameters and return values
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - Mathematical operation to perform
 * @returns {number} - Result of the calculation
 */
function calculate(a, b, operation) {
    // LOCAL SCOPE - these variables only exist within this function
    let result;
    
    switch(operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b !== 0 ? a / b : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
    }
    
    return result; // RETURN VALUE - sends data back to caller
}

/**
 * Function demonstrating multiple calculations with parameters
 * Showcases how functions can call other functions
 */
function demonstrateCalculations() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    // Call calculate function with different parameters
    const sum = calculate(num1, num2, 'add');
    const difference = calculate(num1, num2, 'subtract');
    const product = calculate(num1, num2, 'multiply');
    const quotient = calculate(num1, num2, 'divide');
    
    // Display results using return values
    const resultDiv = document.getElementById('calcResult');
    resultDiv.innerHTML = `
        <strong>Results using function return values:</strong><br>
        Addition: ${num1} + ${num2} = <strong>${sum}</strong><br>
        Subtraction: ${num1} - ${num2} = <strong>${difference}</strong><br>
        Multiplication: ${num1} × ${num2} = <strong>${product}</strong><br>
        Division: ${num1} ÷ ${num2} = <strong>${quotient}</strong>
    `;
}

/**
 * Function demonstrating variable scope (local vs global)
 * Shows how variables behave in different scopes
 */
function demonstrateScope() {
    // LOCAL SCOPE VARIABLE - only exists in this function
    const localVariable = "I'm a local variable";
    let localCounter = 100;
    
    // Accessing GLOBAL SCOPE variable
    globalCounter++;
    
    // Inner function demonstrating nested scope
    function innerFunction() {
        // This function can access:
        // 1. Its own local variables
        // 2. Parent function's variables (localVariable, localCounter)
        // 3. Global variables (globalAppName, globalCounter)
        
        const innerLocal = "I'm in the inner function";
        return `Inner function sees: ${localVariable} and ${globalAppName}`;
    }
    
    const innerResult = innerFunction();
    
    // Display scope demonstration
    const resultDiv = document.getElementById('scopeResult');
    resultDiv.innerHTML = `
        <strong>Variable Scope Demonstration:</strong><br>
        <strong>Global Variable:</strong> ${globalAppName}<br>
        <strong>Global Counter:</strong> ${globalCounter} (persists across calls)<br>
        <strong>Local Variable:</strong> ${localVariable}<br>
        <strong>Local Counter:</strong> ${localCounter}<br>
        <strong>Nested Function:</strong> ${innerResult}<br>
        <em>Note: Local variables are destroyed when function ends</em>
    `;
}

/**
 * Reusable string manipulation function with parameters
 * @param {string} text - Input text to manipulate
 * @param {string} operation - Type of transformation
 * @returns {string} - Transformed text
 */
function transformString(text, operation) {
    // LOCAL SCOPE variables
    let result;
    
    switch(operation) {
        case 'uppercase':
            result = text.toUpperCase();
            break;
        case 'lowercase':
            result = text.toLowerCase();
            break;
        case 'reverse':
            result = text.split('').reverse().join('');
            break;
        case 'wordCount':
            result = text.trim().split(/\s+/).length;
            break;
        case 'charCount':
            result = text.length;
            break;
        default:
            result = text;
    }
    
    return result; // RETURN the transformed value
}

/**
 * Function that uses other functions (demonstrating modularity)
 */
function manipulateString() {
    const inputText = document.getElementById('userText').value;
    
    // Call transformString with different parameters
    const uppercase = transformString(inputText, 'uppercase');
    const lowercase = transformString(inputText, 'lowercase');
    const reversed = transformString(inputText, 'reverse');
    const wordCount = transformString(inputText, 'wordCount');
    const charCount = transformString(inputText, 'charCount');
    
    // Display all transformations
    const resultDiv = document.getElementById('stringResult');
    resultDiv.innerHTML = `
        <strong>String Transformation Results:</strong><br>
        <strong>Original:</strong> ${inputText}<br>
        <strong>Uppercase:</strong> ${uppercase}<br>
        <strong>Lowercase:</strong> ${lowercase}<br>
        <strong>Reversed:</strong> ${reversed}<br>
        <strong>Word Count:</strong> ${wordCount}<br>
        <strong>Character Count:</strong> ${charCount}
    `;
}
/* ========================================
   PART 3: COMBINING CSS & JAVASCRIPT
   JavaScript Controls CSS Animations
   ======================================== */

/**
 * Reusable function to trigger animations by adding/removing CSS classes
 * @param {string} elementId - ID of the element to animate
 * @param {string} animationClass - CSS animation class to apply (default: 'bounce')
 */
function triggerAnimation(elementId, animationClass = 'bounce') {
    const element = document.getElementById(elementId);
    
    if (!element) return;
    
    // Remove existing animation class if present
    element.classList.remove('bounce', 'shake', 'pulse');
    
    // Trigger reflow to restart animation
    void element.offsetWidth;
    
    // Add animation class
    element.classList.add(animationClass);
    
    // Remove class after animation completes (clean up)
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 600);
}

/**
 * Function to toggle card flip using CSS classes
 * Demonstrates state management with JavaScript
 */
function flipCard() {
    const card = document.getElementById('flipCard');
    
    // Toggle the 'flipped' class which triggers CSS transition
    card.classList.toggle('flipped');
}

/**
 * Function to open modal with fade-in animation
 * Shows how JavaScript can control CSS animation timing
 */
function openModal() {
    const modal = document.getElementById('modal');
    
    // Add 'active' class which triggers CSS animations
    modal.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Function to close modal with fade-out effect
 * Demonstrates cleanup and state management
 */
function closeModal() {
    const modal = document.getElementById('modal');
    
    // Remove 'active' class to trigger fade-out
    modal.classList.remove('active');
    
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
}

/**
 * Function to generate random colors with parameters
 * @returns {string} - Random hex color code
 */
function generateRandomColor() {
    // LOCAL SCOPE variables
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    // Generate 6-digit hex color
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color; // RETURN the generated color
}

/**
 * Function that combines color generation with CSS animation
 * Demonstrates integration of JavaScript logic with CSS transitions
 */
function changeColorWithAnimation() {
    const colorBox = document.getElementById('colorBox');
    const colorValue = document.getElementById('colorValue');
    
    // Generate new random color using function
    const newColor = generateRandomColor();
    
    // Add pulse animation class
    colorBox.classList.add('pulse');
    
    // Change background color (CSS transition handles smooth change)
    colorBox.style.backgroundColor = newColor;
    
    // Display color value
    colorValue.textContent = `Current Color: ${newColor}`;
    colorValue.style.color = newColor;
    
    // Remove animation class after completion
    setTimeout(() => {
        colorBox.classList.remove('pulse');
    }, 500);
}

/**
 * Utility function to add smooth scroll behavior
 * @param {string} targetId - ID of element to scroll to
 */
function smoothScrollTo(targetId) {
    const element = document.getElementById(targetId);
    
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
