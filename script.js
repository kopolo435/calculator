function add(num1,num2){
    return parseFloat(num1)+parseFloat(num2);
}

function subtract(num1,num2){
    return parseFloat(num1)-parseFloat(num2);
}

function multiply(num1,num2){
    return parseFloat(num1)*parseFloat(num2);
}

function divide(num1,num2){
    return parseFloat(num1)/parseFloat(num2);
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


function getOperation(equation){
    let num1="",num2="",operator;
    let i=0;
    for(i;i<equation.length;i++){
        if("+-*/".indexOf(equation[i])>-1){
            break;
        }
        num1+=equation[i];
    }
    operator=equation[i];
    i++;
    for(i;i<equation.length;i++){
        if("+-*/".indexOf(equation[i])>-1){
            break;
        }
        num2+=equation[i];
    }
    return [operator,num1,num2,i];
}
const calcuDisplay=document.querySelector(".display");
const solutionDisplay=document.querySelector(".solution");
const equalBt=document.querySelector("#equal");
const clearBtn=document.querySelector("#clear");
const backspaceBtn=document.querySelector("#backspace");
const decimalBtn=document.querySelector("#decimalPoint");

let displayValue;

const digitBtns=document.querySelectorAll(".digitBtn");
const operatorBtns=document.querySelectorAll(".operatorBtn");

//Agrega al display la el boton seleccionado
operatorBtns.forEach(operatorbtn => operatorbtn.addEventListener("click", function(){
    updateDisplay(operatorbtn)}))
digitBtns.forEach(digitBtn => digitBtn.addEventListener("click",function() {
    updateDisplay(digitBtn)}));

//limpiea display
clearBtn.addEventListener('click',()=>{
    calcuDisplay.textContent="";
    displayValue="";
    solutionDisplay.textContent="";
    if(!(calcuDisplay.textContent.indexOf(".")>-1)){//Habilita el boton
        decimalBtn.disabled=false;
    }
});

equalBt.addEventListener('click',()=>{
    let solution=0;
    while(displayValue.length>0){
        let operation = [];
        let result=0;
        operation = getOperation(displayValue);
        if(operation[0]==="/" && operation[2]==="0"){
            solution="cero";
            break;
        }
        result=operate(operation[0],operation[1],operation[2]);
        result=Math.round(result*10)/10;
        displayValue=displayValue.slice(operation[3]);
        if(result){ //verifica que si exista un resultado, cuando no lo hay entonces displayvalue sera ""
            displayValue=result+displayValue;
            solution=result;
        }
    }
    if(solution==="cero"){
        solutionDisplay.textContent="Dameeeee!"
    }
    else if(!solution){
        solutionDisplay.textContent="Error";
    }else{
        solutionDisplay.textContent=solution;
    }
});

backspaceBtn.addEventListener("click",()=>{ //elimina ultimo caracter
    calcuDisplay.textContent=calcuDisplay.textContent.slice(0,length-1);
    displayValue=calcuDisplay.textContent;
    if(!(calcuDisplay.textContent.indexOf(".")>-1)){//si se elimina el . decimal habilita el boton
        decimalBtn.disabled=false;
    }
})

decimalBtn.addEventListener("click",()=>{
    updateDisplay(decimalBtn);
    decimalBtn.disabled=true;
})

window.addEventListener('keydown',e=>{
    buttonEle=Array.from(document.querySelectorAll('button')).find(btn =>{//consigue el elemento de la tecla presionada
        return btn.textContent===e.key;//e.key devuelve una string con el texto de la tecla presionada
    })
    if(buttonEle){
        if(buttonEle===decimalBtn){
            if(!(calcuDisplay.textContent.indexOf(".")>-1))updateDisplay(buttonEle);
        }
        else if(buttonEle===equalBt)equalBt.click();//dispara evento de hacer click en equal
        else if(buttonEle===backspaceBtn)backspaceBtn.click();//dispara evento de hacer click en backspace
        else if(buttonEle===clearBtn)clearBtn.click();
        else updateDisplay(buttonEle);
    }
});