function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(operator,num1,num2){
    switch (operator){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
    }
}

function updateDisplay(digitBtn){
    calcuDisplay.textContent+=digitBtn.textContent;
}
const calcuDisplay=document.querySelector(".display");
const addBtn=document.querySelector('#add');
const subtractBtn=document.querySelector("#substract");
const multiplyBtn=document.querySelector("#multiply");
const divideBtn=document.querySelector("#divide");
const equalBt=document.querySelector("#equal");
const clearBtn=document.querySelector("#clear");

const digitBtns=document.querySelectorAll(".digitBtn");
digitBtns.forEach(digitBtn => digitBtn.addEventListener("click",function() 
{updateDisplay(digitBtn)}));


