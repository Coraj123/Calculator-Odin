let calcObject = {
    numbArr: [],
    operatorArr: [],
    secondNumbArr: [],
    equalArr: []
}

let numButtons = document.querySelectorAll(".num");
let operateButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelectorAll(".equal");
let display = document.querySelector(".displayDiv");

numButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let clickedValue = button.textContent.trim(); // Extract the value from the button

        if (calcObject.numbArr.length <= 3 && calcObject.operatorArr.length < 1) {

        calcObject.numbArr.push(clickedValue);
        console.log(calcObject.numbArr);
        display.textContent = calcObject.numbArr.join('');

        } else if (calcObject.operatorArr.length >= 1) {
            
            calcObject.secondNumbArr.push(clickedValue);
            console.log(calcObject.secondNumbArr);
            display.textContent = `${calcObject.numbArr.join('')} ${calcObject.operatorArr.join('')} ${calcObject.secondNumbArr.join('')}`

        };

    });
});

operateButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let clickedValue = button.textContent.trim();

        if (calcObject.operatorArr.length !== 1) {
        calcObject.operatorArr.push(clickedValue);
        console.log(calcObject.operatorArr);
        console.log(calcObject.operatorArr.length);
        display.textConent = `${calcObject.numbArr.join('')} ${calcObject.operatorArr.join('')}`

        } else if (calcObject.operatorArr.length == 1) {

        const result = operation(calcObject.numbArr, calcObject.secondNumbArr, calcObject.operatorArr);
        console.log(result);
        display.textContent = result;
        calcObject.numbArr = [];
        calcObject.numbArr.push(result);
        calcObject.operatorArr[0] = clickedValue;
        calcObject.secondNumbArr = []
        console.log(calcObject.operatorArr);
        console.log(calcObject.numbArr);

        };

})});

  
equalButton.forEach(function(button) {
    button.addEventListener('click', function() {
       const result = operation(calcObject.numbArr, calcObject.secondNumbArr, calcObject.operatorArr);
        console.log(result);
        display.textContent = result;
        calcObject.numbArr = [];
        calcObject.numbArr.push(result);
        calcObject.operatorArr = [];
        calcObject.secondNumbArr = [];
        console.log(calcObject.numbArr)
        console.log(calcObject.secondNumbArr);
        
    });
});
   

// Define the operation function
function operation(num1, num2, operatorArr) {
    // Check if the operatorArr includes "+"
    if (operatorArr.includes("+")) {
        // Convert the arrays to numbers and perform addition
        console.log(calcObject.operatorArr);
        const sumNum1 = parseInt(num1.join(''));
        const sumNum2 = parseInt(num2.join(''));
        return sumNum1 + sumNum2;
    } else if (operatorArr.includes("-")) {
        console.log(calcObject.operatorArr);
        const sumNum1 = parseInt(num1.join(''));
        const sumNum2 = parseInt(num2.join(''));
        return sumNum1 - sumNum2;

    } else if (operatorArr.includes("x")) {
        console.log(calcObject.operatorArr);
        const sumNum1 = parseInt(num1.join(''));
        const sumNum2 = parseInt(num2.join(''));
        return sumNum1 * sumNum2;
     
    } else if (operatorArr.includes("/")) {
        console.log(calcObject.operatorArr);
        const sumNum1 = parseInt(num1.join(''));
        const sumNum2 = parseInt(num2.join(''));

        if (sumNum2 == 0 ) {
        return "Sike!" } 
        
        else {return sumNum1 / sumNum2;}
        
    } else {
        return 0; // or any other appropriate value
    }
};




   






















    









