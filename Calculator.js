
let displayValue = ""; // Initialize the display value as an empty string
let operator = ""; // Initalize the operator value as an emptry string
let equal = ""; // Initalize the equal operator value as an emptry string
let secondValue = ""; // Initalize the second value as an emptry stirng..

    let numButtons = document.querySelectorAll(".num");
    let operateButtons = document.querySelectorAll(".operator");
    let equalButton = document.querySelectorAll(".equal");

    numButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let clickedValue = button.textContent.trim(); // Extract the value from the button
            displayValue += clickedValue; // Append the clicked value to the display value
            // Call a function to update the display with the new value
            updateDisplay(displayValue, 10);
            // if .... clear display with return number.
        });
    });

    operateButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let clickedValue = button.textContent.trim(); // Extract the value from the button
            operator += clickedValue; // Append the clicked value to the display value
    
        });
    });

    equalButton.forEach(function(button) {
        button.addEventListener('click', function() {
            let clickedValue = button.textContent.trim(); // Extract the value from the button
            equal += clickedValue; // Append the clicked value to the display value
            //call operate function when clicked
            //operate function will call one of the operator function that passess displayValue, operator, and secondValue as parameters which will return the result.
    
        });
    });
    
    
    function updateDisplay(variable, x) {
        let display = document.querySelector(".displayDiv");
        let length = variable.length;

        if (length <= x) {
        
            display.textContent = variable;
        
        };
    };



























    









