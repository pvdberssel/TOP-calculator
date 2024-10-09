function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let firstNumber;
let secondNumber;
let operator;




function displayScreen(screenValue){
    const screen=document.querySelector('.screen');
    screen.textContent=screenValue;
}

const numberButtons = document.querySelectorAll('.calculator-number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('click');
        displayScreen(button.textContent);
    })
})

const operatorButton = document.querySelectorAll('.operator');
    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            console.log('operator')
            displayScreen(button.textContent);
        })
    })


const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
        console.log('click');
        displayScreen('0');
})

const equalButton = document.querySelector('.equals');

equalButton.addEventListener('click', () => {
        console.log('CALCULATE');
        displayScreen('0');
})



function operate(firstNumber,secondNumber, operator){
    switch(operator){
        case '+':
            add(firstNumber,secondNumber);
            break;
        case '-':
            substract(firstNumber,secondNumber);
            break;
        case '*':
            multiply(firstnumber,secondNumber);
            break;
        case '/':
            divide(firstNumber,secondNumber);
            break;
    }
}