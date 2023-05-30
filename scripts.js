const numscreen = document.querySelector('.number');
const equation  = document.querySelector('.equation'); 
const nine      = document.getElementById('9');
const eight     = document.getElementById('8');
const seven     = document.getElementById('7');
const six       = document.getElementById('6');
const five      = document.getElementById('5');
const four      = document.getElementById('4');
const three     = document.getElementById('3');
const two       = document.getElementById('2');
const one       = document.getElementById('1');
const zero      = document.getElementById('0');
const mul       = document.getElementById('mul');
const div       = document.getElementById('div');
const sub       = document.getElementById('sub');
const plus       = document.getElementById('plus');
const equal     = document.getElementById('equal');
function math(){
    let num = "";
    let numA = "";
    let middle = "";
    let numB = "";
    nine.addEventListener('click',()=>{
        num = num + "9";
        numscreen.textContent = num;
        
    });
    eight.addEventListener('click',()=>{
        num = num + "8";
        numscreen.textContent = num;
    });
    seven.addEventListener('click',()=>{
        num = num + "7";
        numscreen.textContent = num;
    });
    six.addEventListener('click',()=>{
        num = num + "6";
        numscreen.textContent = num;
    });
    five.addEventListener('click',()=>{
        num = num + "5";
        numscreen.textContent = num;
    });
    four.addEventListener('click',()=>{
        num = num + "4";
        numscreen.textContent = num;
    });
    three.addEventListener('click',()=>{
        num = num + "3";
        numscreen.textContent = num;
    });
    two.addEventListener('click',()=>{
        num = num + "2";
        numscreen.textContent = num;
    });
    one.addEventListener('click',()=>{
        num = num + "1";
        numscreen.textContent = num;
    });
    zero.addEventListener('click',()=>{
        if(num != ""){
            num = num + "0";
            numscreen.textContent = num;
        }
        
    });

    plus.addEventListener('click',()=>{
        if(num != "" && numA == ""){
            numA = num;
            middle = "+"
            num = "";
            equation.textContent = numscreen.textContent + " + ";
        }
    });
    equal.addEventListener('click',()=>{
        console.log("work");
        if(middle == "+"){
            
            equation.textContent = equation.textContent + num + " = ";
            num = parseInt(numA) + parseInt(num);
            numscreen.textContent = parseInt(num);
            console.log(num);
        }

    });
}

math();