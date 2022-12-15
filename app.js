// let choice = prompt("What operation do you want to perform");
// //console.log(`You have chossen ${choice}`)
// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
// switch(choice){ //user selection is accepted and appropriate action is taken here
//     case "1":
//         console.log("You have chossen Addition.");
//         add(num1,num2);
//         break;
//     case "2":
//         console.log("You have chossen Substraction.");
//         sub(num1,num2);
//         break;
//     case "3":
//         console.log("You have chossen Multiplication.");
//         mul(num1,num2);
//         break;
//     case "4":
//         console.log("You have chossen Division.");
//         div(num1,num2);
//         break;
//     default:
//         console.log("Invalid selection");
//         break;
// }

function numberCatch(){
    const num1 = input.textContent;
    console.log(num1);
    input.innerHTML = " ";
}

function add(num1,num2){ //add function
    const ans = +num1 + +num2;
    output.innerHTML = ans;
}

function sub(num1,num2){ //minus function 
    const ans = num1 - num2;
    console.log(`The difference is ${ans}`);
}

function mul(num1,num2){ // multiplication function
    const ans = num1 * num2;
    console.log(`The product is ${ans}`);
}

function div(num1,num2){ //division function
    const ans = num1 / num2;
    console.log(`The quotient is ${ans}`);
}

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

btn7.addEventListener('click',() => { // assigning function to each buttons.
    input.innerHTML+="7";
});
btn8.addEventListener('click',() => {
    input.innerHTML+="8";
});
btn9.addEventListener('click',() => {
    input.innerHTML+="9";
});
btndel.addEventListener('click',() => {
    console.log("button delete is pressed");
});
btnac.addEventListener('click',() => {
    clear();
});
btn4.addEventListener('click',() => {
    input.innerHTML+="4";
});
btn5.addEventListener('click',() => {
    input.innerHTML+="5";
});
btn6.addEventListener('click',() => {
    input.innerHTML+="6";
});
btnmul.addEventListener('click',() => {
    console.log("multiplication is pressed");
    numberCatch();
});
btndiv.addEventListener('click',() => {
    console.log("button div is pressed");
});
btn1.addEventListener('click',() => {
    input.innerHTML+="1";
});
btn2.addEventListener('click',() => {
    input.innerHTML+="2";
});
btn3.addEventListener('click',() => {
    input.innerHTML+="3";
});
btnadd.addEventListener('click',() => {
    add(1,2);
});
btnmin.addEventListener('click',() => {
    console.log("button minus is pressed");
});
btn0.addEventListener('click',() => {
    input.innerHTML+="0";
});
btnequalto.addEventListener('click',() => {
    console.log("button equal to is pressed");
});

function clear(){
    input.innerHTML=" ";
}