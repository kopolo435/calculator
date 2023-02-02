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
    displayValue=calcuDisplay.textContent;
}
const calcuDisplay=document.querySelector(".display");
const equalBt=document.querySelector("#equal");
const clearBtn=document.querySelector("#clear");

let displayValue;

const digitBtns=document.querySelectorAll(".digitBtn");
const operatorBtns=document.querySelectorAll(".operatorBtn");

//Agrega al display la el boton seleccionado
operatorBtns.forEach(operatorbtn => operatorbtn.addEventListener("click", function(){
    updateDisplay(operatorbtn)}))
digitBtns.forEach(digitBtn => digitBtn.addEventListener("click",function() {
    updateDisplay(digitBtn)}));




