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