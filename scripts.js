const numscreen = document.querySelector('.number-screen');
const equation  = document.querySelector('.equation'); 
const numbers    = document.querySelectorAll('.number-button');
const symbols   = document.querySelectorAll('.symbol');
const equal     = document.getElementById('equal');
const clear     = document.querySelector('#clear');
const back      = document.querySelector('#backspace');

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
        // if(equation.textContent.includes("=")){
        //     equation.textContent = "";
        //     done = true;
        // }else if(num.length !== 1 && num !== "0" && done == false){// this will delete one number at a time until there's a single number
        //     num = num.substring(0,num.length-1);
        //     numscreen.textContent = num;
        // }else if (num.length == 1 && done == false && numA === ""){// if there's a single number the computer will change it back to 0
        //     num = "0";
        //     numscreen.textContent = num;
        //     done = true;
        // }else if(num.length == 1 && done == false && numA !== ""){
        //     num = "0";
        //     numscreen.textContent = num;
        // }
        if(num.length > 1){// this will delete one number at a time until there's a single number
                num = num.substring(0,num.length-1);
                numscreen.textContent = num;
                console.log("work");
        }
        else if(num.length == 1 && num !== ""){
                num = "";
                numscreen.textContent = 0;
        }else if(equation.textContent.includes("=") && middle !== ""){
            equation.textContent = "";
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
        });        
    });

    symbols.forEach(symbutton => {// displaying the user operations
        symbutton.addEventListener('click',()=>{
            
            if(numA === "" && num !== ""){// basically numA will hold onto num value
                numA = num;// user wanting a second number
                
            }
            else if(numA !== "" && num !== ""){// when they want to evaluate more than 2 number
                numA = operation(numA,num,middle); 
                numscreen.textContent = parseInt(numA);
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
            numscreen.textContent = parseInt(numA);
        }else{//evaluating 2 number with an operation
            equation.textContent = numA + " " + middle + " " + numscreen.textContent + " = ";
            numA = operation(numA,numscreen.textContent,middle);
            numscreen.textContent = parseInt(numA);
            num = "";
        }

    });
    
}

function operation(numA,num,middle){// this will do all of the math so this way i don't have to copy and paste the if statement
    if(middle == "+"){
        numA = parseInt(numA) + parseInt(num);
    }
    else if(middle == "-"){
        numA = parseInt(numA) - parseInt(num);
    }else if(middle == "*"){
        numA = parseInt(numA) * parseInt(num);
    }else if(middle == "/"){
        numA = parseInt(numA) / parseInt(num);
    }
    return numA;
}

math();