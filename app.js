console.log("Calculator");

let choice = prompt("What operation do you want to perform");
//console.log(`You have chossen ${choice}`)
switch(choice){
    case "1":
        console.log("You have chossen Addition.");
        break;
    case "2":
        console.log("You have chossen Substraction.");
        break;
    case "3":
        console.log("You have chossen Multiplication.");
        break;
    case "4":
        console.log("You have chossen Division.");
        break;
    default:
        console.log("Invalid selection");
        break;
}

function add(num1,num2){
    let ans=num1+num2;
    console.log(ans);
}
add(2,8);

function sub(num1,num2){
    let ans=num1-num2;
    console.log(ans);
}
sub(2,8);

function mul(num1,num2){
    let ans=num1*num2;
    console.log(ans);
}
mul(2,8);

function div(num1,num2){
    let ans=num1/num2;
    console.log(ans);
}
div(2,8);