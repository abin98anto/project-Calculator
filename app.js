console.log("Calculator");

let choice = prompt("What operation do you want to perform");
//console.log(`You have chossen ${choice}`)
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
switch(choice){
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

function add(num1,num2){
    const ans = +num1 + +num2;
    console.log(`The sum is ${ans}`);
}
//add(2,8);

function sub(num1,num2){
    const ans = num1 - num2;
    console.log(`The difference is ${ans}`);
}
//sub(2,8);

function mul(num1,num2){
    const ans = num1 * num2;
    console.log(`The product is ${ans}`);
}
//mul(2,8);

function div(num1,num2){
    const ans = num1 / num2;
    console.log(`The quotient is ${ans}`);
}
//div(2,8);