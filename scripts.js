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
    let done = true;// this will let the computer to know when the current input can be change to the number that user wanted

    clear.addEventListener('click',()=>{// the user click on clear it will
        num = "0";// set the current input to be 0
        equation.textContent = ""; // set the equation to be nothing
        numscreen.textContent = num;// let the user see that it is reset to 0
        numA = ""; // value is reset
        middle = ""; // operation is reset
        done = true; // this will allow the user to see that 0 will turn into what ever number they have enter
    });

    back.addEventListener('click',()=>{// this will delete one number at a time
        if(num.length !== 1 && num !== "0"){// this will delete one number at a time until there's a single number
            num = num.substring(0,num.length-1);
            numscreen.textContent = num;
        }else{// if there's a single number the computer will change it back to 0
            num = "0";
            numscreen.textContent = num;
            done = true;
        }
    });

    numbers.forEach(numbutton => {// this will display what ever number that user have click
        numbutton.addEventListener('click',()=>{
            if(done){// this will basically change the current input to be nothing like a reset
                num = "";
                equation.textContent = "";
                numscreen.textContent = "";
                numA = "";
                done = false;
            }
            num = num + numbutton.id;
            numscreen.textContent = num;// user will see the number in screen
        });        
    });

    symbols.forEach(symbutton => {// displaying the user operations
        symbutton.addEventListener('click',()=>{
            
            if(numA === "" && num !== ""){// basically numA will hold onto num value
                numA = num;
                
            }
            else if(numA !== "" && num !== ""){// this is what happen when they are not done using the operation but also enter the number as well ex 6+6+6
                numA = operation(numA,num,middle); 
                numscreen.textContent = parseInt(numA);
                
            }
            middle = symbutton.id;//middle will be whatever operation that user have clicked
            equation.textContent = numA + " " + middle;// this will display what user have clicked
            num = "";//current will be nothing
            done = false;
        })
    });
    
    equal.addEventListener('click',()=>{ // displaying the answer when user have click equal
        if(middle == "" && numA === ""){
            equation.textContent = num + " = ";
            numscreen.textContent = parseInt(num);
        }else{
            done = true;
            equation.textContent = numA + " " + middle + " " + num + " = ";
            numA = operation(numA,num,middle);
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