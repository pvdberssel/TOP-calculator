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
let operator = '';
let result;

let currentNumber='';




function displayScreen(screenValue){
    const screen=document.querySelector('.screentext');
    screen.textContent=screenValue;
}

const numberButtons = document.querySelectorAll('.calculator-number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentNumber = currentNumber.concat(button.textContent);
        displayScreen(currentNumber);
        console.log(currentNumber);
    })
})


const delButton = document.querySelector('.del');

delButton.addEventListener('click', () => {
        console.log('click del');
        deleteNumber(currentNumber);
    })


function deleteNumber(numberString){
    if(numberString.length>1){
        currentNumber = numberString.slice(0,-1);
        displayScreen(currentNumber);
    }else{
        currentNumber='';
        displayScreen('0');
    }
    console.log(currentNumber);
}


function memoryNumber(number){
    if(firstNumber == ''){
        firstNumber = number;
    }else if(firstNumber !== '' && secondNumber !== ''){
        console.log('hello')
        result=operate(Number(firstNumber),Number(secondNumber), operator);
    }else{
        secondNumber = number;
        console.log('hello2')
        result=operate(Number(firstNumber),Number(secondNumber), operator);
        firstNumber = result;
        secondNumber = '';
        displayScreen(result);
        if(result === 'ʕノ•ᴥ•ʔノ ︵ ┻━┻'){
            firstNumber = '';
            secondNumber = '';
        }else{
            firstNumber = result;
            secondNumber = '';
        }

    }
}

const operatorButton = document.querySelectorAll('.operator');
    operatorButton.forEach((button) => {
        button.addEventListener('click', () => {
            memoryNumber(Number(currentNumber));
            currentNumber='';
            
            if(operator === ''){
                displayScreen(button.textContent);
                operator = button.textContent;
            }else{
                operator = button.textContent;    
            }
        })
    })


const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
        firstNumber = '';
        secondNumber = '';
        currentNumber= '';
        operator = '';
        result = 0;
        displayScreen('0');
})

const equalButton = document.querySelector('.equals');

equalButton.addEventListener('click', () => {
        
        memoryNumber(Number(currentNumber));
        currentNumber='';
        displayScreen(result);
        if(result === 'ʕノ•ᴥ•ʔノ ︵ ┻━┻'){
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
                result = 'ʕノ•ᴥ•ʔノ ︵ ┻━┻';
            }else{
            result = divide(a,b);
            }
            break;
    }
    return result;
}