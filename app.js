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
const btnequalto = document.getElementById("bequalto");

const input = document.querySelector("#screen-top >p"); // selecting the p tag in the screen-top div.
const output = document.querySelector("#screen-bottom >p"); // selecting the p tag in the screen-bottom div.

let choice;

function add(num1,num2){ //add function
    const ans = +num1 + +num2;
    input.innerHTML = `${num1} + ${num2}`;
    output.innerHTML = ans;
}

function sub(num1,num2){ //minus function 
    const ans = num1 - num2;
    input.innerHTML = `${num1} - ${num2}`;
    output.innerHTML = ans;
}

function mul(num1,num2){ // multiplication function
    const ans = num1 * num2;
    input.innerHTML = `${num1} * ${num2}`;
    output.innerHTML = ans;
}

function div(num1,num2){ //division function
    const ans = num1 / num2;
    input.innerHTML = `${num1} / ${num2}`;
    output.innerHTML = ans;
}

btn7.addEventListener('click',() => { // assigning function to each buttons.
    clear();
    input.innerHTML+="7";
});
btn8.addEventListener('click',() => {
    clear();
    input.innerHTML+="8";
});
btn9.addEventListener('click',() => {
    clear();
    input.innerHTML+="9";
});
btndel.addEventListener('click',() => {
    console.log("button delete is pressed");
});
btnac.addEventListener('click',() => {
    clear();
});
btn4.addEventListener('click',() => {
    clear();
    input.innerHTML+="4";
});
btn5.addEventListener('click',() => {
    clear();
    input.innerHTML+="5";
});
btn6.addEventListener('click',() => {
    clear();
    input.innerHTML+="6";
});
btnmul.addEventListener('click',() => {
    console.log("multiplication is pressed");
    caputre1();
    choice = 3;
});
btndiv.addEventListener('click',() => {
    console.log("button div is pressed");
    caputre1();
    choice = 4;
});
btn1.addEventListener('click',() => {
    clear();
    input.innerHTML+="1";
});
btn2.addEventListener('click',() => {
    clear();
    input.innerHTML+="2";
});
btn3.addEventListener('click',() => {
    clear();
    input.innerHTML+="3";
});
btnadd.addEventListener('click',() => {
    console.log("add");
    caputre1();
    choice = 1;
});
btnmin.addEventListener('click',() => {
    console.log("button minus is pressed");
    caputre1();
    choice = 2;
});
btn0.addEventListener('click',() => {
    clear();
    input.innerHTML+="0";
});
btnequalto.addEventListener('click',() => {
    console.log("button equal to is pressed");
    console.log(`the choice:${choice}`);
    capture2();
    console.log(`num1: ${num1}`);
    console.log(`num2: ${num2}`);
    if(choice=="1"){
        add(num1,num2);
    }else if(choice=="2"){
        sub(num1,num2);
    }else if(choice=="3"){
        mul(num1,num2);
    }else{
        div(num1,num2);
    }
});

let num1;
let num2;

function caputre1(){
    let temp = input.textContent;
    num1 = parseInt(temp);
    input.innerHTML = "";
    //console.log(typeof num1);
    return num1;
}
function capture2(){
    let temp = input.textContent;
    num2 = parseInt(temp);
    input.innerHTML = "";
    return num2;
}


function clear(){
    input.innerHTML = "";
    output.innerHTML = "";
}