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
    buttonPress();
});
btn1.addEventListener('click',() => {   
    input.innerHTML+="1";
    buttonPress();
});
btn2.addEventListener('click',() => {
    input.innerHTML+="2";
    buttonPress();
});
btn3.addEventListener('click',() => {
    input.innerHTML+="3";
    buttonPress();
});
btn4.addEventListener('click',() => {
    input.innerHTML+="4";
    buttonPress();
});
btn5.addEventListener('click',() => {
    input.innerHTML+="5";
    buttonPress();
});
btn6.addEventListener('click',() => {
    input.innerHTML+="6";
    buttonPress();
});
btn7.addEventListener('click',() => { 
    input.innerHTML+="7";
    buttonPress();
});
btn8.addEventListener('click',() => {
    input.innerHTML+="8";
    buttonPress();
});
btn9.addEventListener('click',() => {
    input.innerHTML+="9";
    buttonPress();
});
btndot.addEventListener('click',() => {
    input.innerHTML+=".";
    buttonPress();
});

btnadd.addEventListener('click',() => {    // Assigns function for capturing the first number and the operator selected.
    input.innerHTML+="+";
    choice = 1;
    operation(choice);
});
btnmin.addEventListener('click',() => {
    input.innerHTML+="-";
    choice = 2;
    operation(choice);
});
btnmul.addEventListener('click',() => {
    input.innerHTML+="*";
    choice = 3;
    operation(choice);
});
btndiv.addEventListener('click',() => {
    input.innerHTML+="/";
    choice = 4;
    operation(choice);
});

btnequalto.addEventListener('click',() => {    // Solves the problem and displays the result when "=" is pressed.
    console.log("the button = is pressed.");
    buttonPress();
    operation(choice);
});

btndel.addEventListener('click',() => {  //   delete/backspace button.
    console.log("button delete is pressed");
    location.reload();
});

btnac.addEventListener('click',() => {  //  all clear button. 
    clear();
});

function clear(){   // To clear everything in the calculator screen.
    input.innerHTML = "";
    output.innerHTML = "";
}

let choice = 0;
let num1 = 0;
let num2 = 0;
let result = "no";


function buttonPress(){
    if(choice != 0 && input.innerHTML == ""){
        operation(choice);
    }
}

function ap(){
    const selectAll = document.querySelectorAll('button');
    console.log(selectAll);
}
ap();

function operation(choice){
    output.innerHTML="";
    const n2 = input.innerHTML;    // Takes everthing in screen-top div to n2.
    const numArray = n2.match(/\d+/g);   // Takes all numbers from the n2 string.
    const operandArray = n2.match(/[+\-*/]/g);    // Takes operands to array.
    if(operandArray.length==1){
        num1 = numArray[0];
        num2 = numArray[1];
        calculation(num1,num2,choice);
    } else if(operandArray.length==2){
        num1 = result;
        if(choice == "1"){
            input.innerHTML = `${result}+`;
            //output.innerHTML = "";
            secondcalculation(num1,num2,choice);
        }else if(choice == "2"){
            input.innerHTML = `${result}-`;
            //output.innerHTML = "";
            secondcalculation(num1,num2,choice);
        }else if(choice == "3"){
            input.innerHTML = `${result}*`;
            //output.innerHTML = "";
            secondcalculation(num1,num2,choice);
        }else if(choice == "4"){
            input.innerHTML = `${result}/`;
            //output.innerHTML = "";
            secondcalculation(num1,num2,choice);
        }
        //calculation(num1,num2,choice);
    }
}

function secondcalculation(){
    const n2 = input.innerHTML;
    const numArray = n2.match(/\d+/g);
    btn0.addEventListener('click',() => {   // When the buttons (0-9 and ".") are pressed the screen displays those numbers. 
        input.innerHTML+="0";
        buttonPress();
    });
    btn1.addEventListener('click',() => {   
        input.innerHTML+="1";
        buttonPress();
    });
    btn2.addEventListener('click',() => {
        input.innerHTML+="2";
        buttonPress();
    });
    btn3.addEventListener('click',() => {
        input.innerHTML+="3";
        buttonPress();
    });
    btn4.addEventListener('click',() => {
        input.innerHTML+="4";
        buttonPress();
    });
    btn5.addEventListener('click',() => {
        input.innerHTML+="5";
        buttonPress();
    });
    btn6.addEventListener('click',() => {
        input.innerHTML+="6";
        buttonPress();
    });
    btn7.addEventListener('click',() => { 
        input.innerHTML+="7";
        buttonPress();
    });
    btn8.addEventListener('click',() => {
        input.innerHTML+="8";
        buttonPress();
    });
    btn9.addEventListener('click',() => {
        input.innerHTML+="9";
        buttonPress();
    });
    btndot.addEventListener('click',() => {
        input.innerHTML+=".";
        buttonPress();
    });
    
    btnadd.addEventListener('click',() => {    // Assigns function for capturing the first number and the operator selected.
        input.innerHTML+="+";
        choice = 1;
        operation(choice);
    });
    btnmin.addEventListener('click',() => {
        input.innerHTML+="-";
        choice = 2;
        operation(choice);
    });
    btnmul.addEventListener('click',() => {
        input.innerHTML+="*";
        choice = 3;
        operation(choice);
    });
    btndiv.addEventListener('click',() => {
        input.innerHTML+="/";
        choice = 4;
        operation(choice);
    });
    
    btnequalto.addEventListener('click',() => {    // Solves the problem and displays the result when "=" is pressed.
        console.log("the button = is pressed.");
        buttonPress();
        operation(choice);
    });
    
    btndel.addEventListener('click',() => {  //   delete/backspace button.
        console.log("button delete is pressed");
    });
    
    btnac.addEventListener('click',() => {  //  all clear button. 
        clear();
    });
}

function calculation(num1,num2,choice){
    if(choice == "1"){
        result = +num1 + +num2;
        choice = 0;
        //num1 = result;
        output.innerHTML = `${result}`;
        output.innerHTML = isNaN(output.innerHTML) ? '' : output.innerHTML;
    }else if(choice == "2"){
        result = num1 - num2;
        choice = 0;
        //num1 = result;
        output.innerHTML = `${result}`;
        output.innerHTML = isNaN(output.innerHTML) ? '' : output.innerHTML;
    }else if(choice == "3"){
        result = num1 * num2;
        choice = 0;
        //num1 = result;
        output.innerHTML = `${result}`;
        output.innerHTML = isNaN(output.innerHTML) ? '' : output.innerHTML;
    }else if(choice == "4"){
        result = num1 / num2;
        choice = 0;
        //num1 = result;
        output.innerHTML = `${result}`;
        output.innerHTML = isNaN(output.innerHTML) ? '' : output.innerHTML;
    }
    console.log(`calculation: ${result}`);
    return result;
}