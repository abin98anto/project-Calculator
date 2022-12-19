const btn7 = document.getElementById("b7"); //asigning short cuts to each button in a calculator
const btn8 = document.getElementById("b8");
const btn9 = document.getElementById("b9");
const btndel = document.getElementById("bdel");
const btnac = document.getElementById("bac");
const btn4 = document.getElementById("b4");
const btn5 = document.getElementById("b5");
const btn6 = document.getElementById("b6");
const btnmul = document.getElementById("bmul");
const btndiv = document.getElementById("bdiv");
const btn1 = document.getElementById("b1");
const btn2 = document.getElementById("b2");
const btn3 = document.getElementById("b3");
const btnadd = document.getElementById("badd");
const btnmin = document.getElementById("bmin");
const btn0 = document.getElementById("b0");
const btndot = document.getElementById("bdot");
const btnequalto = document.getElementById("bequalto");

const input = document.querySelector("#screen-top >p"); // selecting the p tag in the screen-top div.
const output = document.querySelector("#screen-bottom >p"); // selecting the p tag in the screen-bottom div.

btn0.addEventListener('click',() => {   // When the buttons (0-9 and ".") are pressed the screen displays those numbers. 
    input.innerHTML+="0";
    numbuttonPress();
});
btn1.addEventListener('click',() => {   
    input.innerHTML+="1";
    numbuttonPress();
});
btn2.addEventListener('click',() => {
    input.innerHTML+="2";
    numbuttonPress();
});
btn3.addEventListener('click',() => {
    input.innerHTML+="3";
    numbuttonPress();
});
btn4.addEventListener('click',() => {
    input.innerHTML+="4";
    numbuttonPress();
});
btn5.addEventListener('click',() => {
    input.innerHTML+="5";
    numbuttonPress();
});
btn6.addEventListener('click',() => {
    input.innerHTML+="6";
    numbuttonPress();
});
btn7.addEventListener('click',() => { 
    input.innerHTML+="7";
    numbuttonPress();
});
btn8.addEventListener('click',() => {
    input.innerHTML+="8";
    numbuttonPress();
});
btn9.addEventListener('click',() => {
    input.innerHTML+="9";
    numbuttonPress();
});
btndot.addEventListener('click',() => {
    input.innerHTML+=".";
    numbuttonPress();
});

btnadd.addEventListener('click',() => {    // Assigns function for capturing the first number and the operator selected.
    if(input.innerHTML==""){
        console.log("nothing on screen");
    }else {
        input.innerHTML+="+";
        choice = 1;
        operandPress(choice);
    }
});
btnmin.addEventListener('click',() => {
    input.innerHTML+="-";
    choice = 2;
    operandPress(choice);
});
btnmul.addEventListener('click',() => {
    if(input.innerHTML==""){
        console.log("nothing on screen");
    }else {
        input.innerHTML+="*";
        choice = 3;
        operandPress(choice);
    }
});
btndiv.addEventListener('click',() => {
    if(input.innerHTML==""){
        console.log("nothing on screen");
    }else {
        input.innerHTML+="/";
        choice = 4;
        operandPress(choice);
    }
});

btnequalto.addEventListener('click',() => {    // Solves the problem and displays the result when "=" is pressed.
    console.log("the button = is pressed.");
    //buttonPress();
    equaltopressed();
    //operation(choice);
});

btndel.addEventListener('click',() => {  //   delete/backspace button.
    console.log("button delete is pressed");
    backspace();
});

btnac.addEventListener('click',() => {  //  all clear button. 
    location.reload();     //   Reloads the whole page hence clears everything on calculator screen.
});

let choice = 0;
let num1 = 0;
let num2 = 0;

function numbuttonPress(){  //  when number button is pressed.
    const numArray = input.innerHTML.match(/\d+/g);
    const operandArray = input.innerHTML.match(/[+\-*/]/g);
    const array = [input.innerHTML];
    //const splitArray = array.split(`${operandArray[0]}`);
    //console.log(array);
    if(operandArray==null){ //  normal case.
        console.log("no operands");
    }else if(operandArray.length==1 && numArray.length==1){ //  when num1 is negative.
        // if(splitArray[0] == operandArray[0] == "-"){
            console.log("num1 is negative");
            // num1 = -numArray[0];
        }else {
            console.log("logical error");
        }
}

function operandPress(choice){  //  when operator button is pressed.
    const numArray = input.innerHTML.match(/\d+/g);
    const operandArray = input.innerHTML.match(/[+\-*/]/g);
    if(numArray == null && operandArray.length!=0){
        console.log("only operands on screen");  //  do nothing.
        if(operandArray.length == 1){
            console.log("do nothing");
        }else {
            console.log("logical error");
        }
    }else if(numArray.length<=2 && operandArray.length==2){ //  when second operator is pressed.
        console.log("numbers and operator on screen");   //  find the result of whats on the screen and write the result and the operator on screen.
        if(operandArray[0] == "+"){
            num1 = +numArray[0] + +numArray[1];
        }else if(operandArray[0] == "-"){
            num1 = numArray[0] - numArray[1];
        }else if(operandArray[0] == "*"){
            num1 = numArray[0] * numArray[1];
        }else if(operandArray[0] == "/"){
            num1 = numArray[0] / numArray[1];
        }
        return input.innerHTML=`${num1}${operandArray[1]}`;
    }else if(numArray.length==1){
        console.log("only numbers on screen"); //  do not add operand to screen.
    }
    return choice;
}

function equaltopressed(){    //  when equal to button is pressed. 
    const numArray = input.innerHTML.match(/\d+/g);
    const operandArray = input.innerHTML.match(/[+\-*/]/g);
    if(numArray == null && operandArray == null){   //  when there is nothing on screen.
        console.log("no numbers and operands"); //  do nothing.
    }else if(numArray.length<operandArray.length ){    // when there is only number of operators greater than number of numbers.
        if(operandArray.length == 2 && numArray.length == 2){   // when there are exactly 2 operators.
            if(operandArray[1] == "-"){ //  when the second operator is "-".
                console.log("the num2 is a negative value");
                num1 = numArray[0];
                num2 = -numArray[1];
                calculate(num1,num2,numArray[0]);
            }else if(operandArray.length==2 && numArray.length==1){ //  when the second operator is not "-".
                console.log("math error");
                num1 = -numArray[0];
            }
        }else if(operandArray.length == 2 && numArray == null){ //  when there is only one operator and no numbers.ie the num1 is negative.
            console.log("num1 is a  negative value");
            if(operandArray[0] == "-"){ //  
                console.log("do the operation with num1 as negative value");
                num1 = -numArray[0];
                num2 = numArray[1];
                calculate(num1,num2,operandArray[0]);
            }else {
                console.log("math error");
            }
        }
    }else if(numArray.length>operandArray.length){  //  normal case when there are 2 numbers and an operator.
        console.log("do the operations");
        num1 = numArray[0];
        num2 = numArray[1];
        calculate(num1,num2,operandArray[0]);
    }
}

function calculate(num1,num2,choice){
    let result = 0;
    if(choice == "+"){
        result = +num1 + +num2;
    }else if(choice == "-"){
        result = num1 -num2;
    }else if(choice == "*"){
        result = num1 * num2;
    }else if(choice == "/"){
        result = num1 / num2;
    }
    input.innerHTML=result.toFixed(3);
}

function backspace(){
    const numArray = input.innerHTML.match(/\d+/g);
    const operandArray = input.innerHTML.match(/[+\-*/]/g);
    const array = [...input.innerHTML];
    const lastElement = array.pop();
    //const splitArray = array.;
    console.log(array);
    console.log(array.join(""));
    input.innerHTML=`${array.join("")}`;
}