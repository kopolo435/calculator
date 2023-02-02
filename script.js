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

const addBtn=document.querySelector('#add');
const subtractBtn=document.querySelector("#substract");
const multiplyBtn=document.querySelector("#multiply");
const divideBtn=document.querySelector("#divide");
const equalBt=document.querySelector("#equal");
const clearBtn=document.querySelector("#clear");

const ceroBtn=document.querySelector("#0");
const oneBtn=document.querySelector("#1");
const twoBtn=document.querySelector("#2");
const threeBtn=document.querySelector("3");
const fourthBtn=document.querySelector("#4");
const fiveBtn=document.querySelector("#5");
const sixBtn=document.querySelector("#6");
const sevenBtn=document.querySelector("#7");
const eightBtn=document.querySelector("#8");
const nineBtn=document.querySelector("#9");
