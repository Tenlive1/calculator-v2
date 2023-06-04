const numscreen = document.querySelector('.number-screen');
const equation  = document.querySelector('.equation'); 
const numbers   = document.querySelectorAll('.number-button');
const symbols   = document.querySelectorAll('.symbol');
const equal     = document.getElementById('equal');
const clear     = document.querySelector('#clear');
const back      = document.querySelector('#backspace');
const sign      = document.querySelector('#pos-neg');
const dec       = document.querySelector('#decimal');

function math(){
    let num = "0";// this is current input
    let numA = "";// this will hold the number
    let middle = "";// this will hold the operation

    clear.addEventListener('click',()=>{// the user click on clear it will
        num = "0";// set the current input to be 0
        equation.textContent = ""; // set the equation to be nothing
        numscreen.textContent = num;// let the user see that it is reset to 0
        numA = ""; // value is reset
        middle = ""; // operation is reset
    });

    back.addEventListener('click',()=>{// this will delete one number at a time
        if(num.length > 1){// this will delete one number at a time until there's a single number
                num = num.substring(0,num.length-1);
                numscreen.textContent = num;
        }
        else if(equation.textContent.includes("=") && middle !== ""){
            equation.textContent = "";
            num = "";
        }
        else if(num.length == 1 && num !== ""){// when the length of the number is 1 it will turn that number into 0/ show the user that it is now 0
                num = "";
                numscreen.textContent = 0;
        }
    });

    numbers.forEach(numbutton => {// this will display what ever number that user have click
        numbutton.addEventListener('click',()=>{
            if(num === "0"){ // when num is 0 it's basically nothing
                num = "";
            }else if(equation.textContent.includes("=") && middle !== ""){// if there's an equal and a operation than reset everything
                num = "";
                numA = "";
                equation.textContent = "";
                numscreen.textContent = "";
            }
            num = num + numbutton.id;
            numscreen.textContent = num;// user will see the number in screen
            checkover();
        });        
    });

    symbols.forEach(symbutton => {// displaying the user operations
        symbutton.addEventListener('click',()=>{
            
            if(numA === "" && num !== ""){// basically numA will hold onto num value
                numA = num;// user wanting a second number
                
            }
            else if(numA !== "" && num !== "" && !equation.textContent.includes("=")){// when they want to evaluate more than 2 number
                numA = operation(numA,num,middle); 
                numscreen.textContent = numA;
            }
            middle = symbutton.id;//middle will be whatever operation that user have clicked
            equation.textContent = numA + " " + middle;// this will display what user have clicked
            num = "";
        })
    });
    
    equal.addEventListener('click',()=>{ // displaying the answer when user have click equal
        if(middle === "" && numA === ""){// evaluating a single number
            numA = num;
            equation.textContent = numA + " = ";
            numscreen.textContent = numA;
        }else if(middle !== "" && num === ""){
            equation.textContent = numA + " " + middle + " " + numscreen.textContent + " = ";
            numA = operation(numA,numscreen.textContent,middle);
            num = numscreen.textContent;
            numscreen.textContent = numA;
            
        }
        else{//evaluating 2 number with an operation
            equation.textContent = numA + " " + middle + " " + num + " = ";
            numA = operation(numA,num,middle);
            numscreen.textContent = numA;
        }

    });

    sign.addEventListener('click',()=>{
        
        if(equation.textContent.includes('=') && middle !== ""){
            num = -numscreen.textContent;
            equation.textContent = ""
            middle = "";
            numA = "";
            numscreen.textContent = num;
        }else if(numA !== ""){
            num = -numscreen.textContent;
            numscreen.textContent = num;
        }  
        else if(num !== "0"){
            num = -num;
            numscreen.textContent = num;
        }
    });
    dec.addEventListener('click',()=>{
        if(!num.includes(".") || !numscreen.textContent.includes('.')){
            num = num + ".";
            numscreen.textContent = num;
        }
    });
    
}

function operation(numA,num,middle){// this will do all of the math so this way i don't have to copy and paste the if statement
    
    if(middle == "+"){
        numA =  parseFloat(numA) + parseFloat(num);
    }
    else if(middle == "-"){
        numA = numA - num;
    }else if(middle == "*"){
        numA = numA * num;
    }else if(middle == "/"){
        numA = numA / num;
    }
    return numA;
}
const h = numscreen.offsetHeight;
let og = numscreen.style.fontSize;
function checkover(){
    const box = numscreen.getBoundingClientRect();
    if(box.height !== h){
        console.log(box.height);
        numscreen.style.fontSize = "60px";
    }else{
        console.log(h);
        numscreen.style.fontSize = "64px";
    }
}
math();