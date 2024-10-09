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


const numberButtons = document.querySelectorAll('.calculator-number');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('click');
        const screen=document.querySelector('.screen');
        screen.textContent=button.textContent;
    })
})

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
        console.log('click');
        const screen=document.querySelector('.screen');
        screen.textContent='0';
})

const equalButton = document.querySelector('.equals');

equalButton.addEventListener('click', () => {
        console.log('CALCULATE');
        const screen=document.querySelector('.screen');
        screen.textContent='0';
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