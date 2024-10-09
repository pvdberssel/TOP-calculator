function add(a,b){
    console.log('adding')
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

let firstNumber = '';
let secondNumber = '';
let operator;
let result;

let currentNumber='';




function displayScreen(screenValue){
    const screen=document.querySelector('.screen');
    screen.textContent=screenValue;
}

const numberButtons = document.querySelectorAll('.calculator-number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentNumber = currentNumber.concat(button.textContent);
        displayScreen(currentNumber);
        
    })
})

function memoryNumber(number){
    if(firstNumber == ''){
        firstNumber = number;
    }else{
        secondNumber = number;
    }
}

const operatorButton = document.querySelectorAll('.operator');
    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            memoryNumber(Number(currentNumber));
            currentNumber='';
            operator = button.textContent;
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

        memoryNumber(Number(currentNumber));
        currentNumber='';
        result=operate(Number(firstNumber),Number(secondNumber), operator);
        displayScreen(result);
        if(result === 'stop'){
            firstNumber = '';
            secondNumber = '';
        }else{
            firstNumber = result;
            secondNumber = '';
        }
})



function operate(a,b, sign){
    switch(sign){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = substract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            if(b==0){
                console.log('Do not divide by 0')
                result = 'stop';
            }else{
            result = divide(a,b);
            }
            break;
    }
    return result;
}