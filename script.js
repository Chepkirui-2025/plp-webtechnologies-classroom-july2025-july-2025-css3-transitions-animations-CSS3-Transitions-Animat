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