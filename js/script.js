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

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result;
let currentNumber='';
let decimalBool = false;




function displayScreen(screenValue){
    const screen=document.querySelector('.screentext');
    if(typeof(screenValue)!=='string'){
        
        screenValue=screenValue.toString();

    }
    if(screenValue.length> 8){
     
        screenValue = 'OVERFLOW';
    }
    screen.textContent=screenValue;
}

const numberButtons = document.querySelectorAll('.calculator-number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentNumber = currentNumber.concat(button.textContent);
        displayScreen(currentNumber);

    })
})

const decimalButton = document.querySelector('.decimal')

decimalButton.addEventListener('click', () => {
    addDecimal();
})

function addDecimal(){
    if(decimalBool == false){
        currentNumber = currentNumber.concat('.');
        displayScreen(currentNumber);
        decimalBool = true;
    } 
}

const delButton = document.querySelector('.del');

delButton.addEventListener('click', () => {

        deleteNumber(currentNumber);
    })


function deleteNumber(numberString){
    if(numberString.length>1){
        if(numberString.split("").pop() === '.'){
            decimalBool = false;
        }
        currentNumber = numberString.slice(0,-1);
        displayScreen(currentNumber);
    }else{
        currentNumber='';
        displayScreen('0');
    }

}


function memoryNumber(number){
    if(firstNumber == ''){
        firstNumber = number;
    }else{
        secondNumber = number;
        result=operate(Number(firstNumber),Number(secondNumber), operator);
        if(result.toString().includes('.')){
            result=parseFloat(result).toFixed(2);
        }
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
            decimalBool = false;
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
        clearMemory();
        displayScreen('0');
})

function clearMemory(){
    firstNumber = '';
    secondNumber = '';
    currentNumber= '';
    operator = '';
    decimalBool = false;
    result = 0;
}
const equalButton = document.querySelector('.equals');

equalButton.addEventListener('click', () => {
        
        memoryNumber(Number(currentNumber));
        currentNumber='';
        if(result.toString().includes('.')){
            result=parseFloat(result).toFixed(2);
        }
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