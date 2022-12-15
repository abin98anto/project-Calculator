let choice = prompt("What operation do you want to perform");
//console.log(`You have chossen ${choice}`)
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
switch(choice){ //user selection is accepted and appropriate action is taken here
    case "1":
        console.log("You have chossen Addition.");
        add(num1,num2);
        break;
    case "2":
        console.log("You have chossen Substraction.");
        sub(num1,num2);
        break;
    case "3":
        console.log("You have chossen Multiplication.");
        mul(num1,num2);
        break;
    case "4":
        console.log("You have chossen Division.");
        div(num1,num2);
        break;
    default:
        console.log("Invalid selection");
        break;
}

function add(num1,num2){ //add function
    const ans = +num1 + +num2;
    console.log(`The sum is ${ans}`);
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

const btn7 = document.getElementById("b7");
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

btn7.addEventListener('click',() => {
    console.log("button 7 is pressed");
});
btn8.addEventListener('click',() => {
    console.log("button 8 is pressed");
});
btn9.addEventListener('click',() => {
    console.log("button 9 is pressed");
});
btndel.addEventListener('click',() => {
    console.log("button delete is pressed");
});
btnac.addEventListener('click',() => {
    console.log("button ac is pressed");
});
btn4.addEventListener('click',() => {
    console.log("button 4 is pressed");
});
btn5.addEventListener('click',() => {
    console.log("button 5 is pressed");
});
btn6.addEventListener('click',() => {
    console.log("button 6 is pressed");
});
btnmul.addEventListener('click',() => {
    console.log("multiplication is pressed");
});
btndiv.addEventListener('click',() => {
    console.log("button div is pressed");
});
btn1.addEventListener('click',() => {
    console.log("button 1 is pressed");
});
btn2.addEventListener('click',() => {
    console.log("button 2 is pressed");
});
btn3.addEventListener('click',() => {
    console.log("button 3 is pressed");
});
btnadd.addEventListener('click',() => {
    console.log("button add is pressed");
});
btnmin.addEventListener('click',() => {
    console.log("button minus is pressed");
});
btn0.addEventListener('click',() => {
    console.log("button 0 is pressed");
});
btnequalto.addEventListener('click',() => {
    console.log("button equal to is pressed");
});