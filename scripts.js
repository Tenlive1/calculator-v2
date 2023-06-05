const numscreen = document.querySelector('.number-screen');
const numtext   = document.querySelector('.num-text');
const equation  = document.querySelector('.equation'); 
const numbers   = document.querySelectorAll('.number-button');
const symbols   = document.querySelectorAll('.symbol');
const equal     = document.getElementById('equal');
const clear     = document.querySelector('#clear');
const back      = document.querySelector('#backspace');
const sign      = document.querySelector('#pos-neg');
const dec       = document.querySelector('#decimal');
let counter = 0;
let blank = 1;
numtext.style.fontSize = "78px"
function math(){
    let num = "0";// this is current input
    let numA = "";// this will hold the number
    let middle = "";// this will hold the operation

    clear.addEventListener('click',()=>{// the user click on clear it will
        num = "0";// set the current input to be 0
        equation.textContent = ""; // set the equation to be nothing
        numtext.textContent = num;// let the user see that it is reset to 0
        numA = ""; // value is reset
        middle = ""; // operation is reset
        counter = 0;
    });

    back.addEventListener('click',()=>{// this will delete one number at a time
        if(num.length > 1){// this will delete one number at a time until there's a single number
                num = num.substring(0,num.length-1);
                numtext.textContent = num;
        }
        else if(equation.textContent.includes("=") && middle !== ""){
            equation.textContent = "";
            num = "";
        }
        else if(num.length == 1 && num !== ""){// when the length of the number is 1 it will turn that number into 0/ show the user that it is now 0
                num = "";
                numtext.textContent = 0;
        }
        if(counter > 0){
            counter--;
        }
        insize();
        console.log(numtext.clientWidth);
    });

    numbers.forEach(numbutton => {// this will display what ever number that user have click
        numbutton.addEventListener('click',()=>{
            
                
                if(num === "0"){ // when num is 0 it's basically nothing
                    num = "";
                    count = 0;
                }else if(equation.textContent.includes("=") && middle !== ""){// if there's an equal and a operation than reset everything
                    num = "";
                    numA = "";
                    equation.textContent = "";
                    numtext.textContent = "";
                    counter = 0;
                }

                if(counter < 15){
                    counter++;
                    num = num + numbutton.id;
                    numtext.textContent = num;// user will see the number in screen
                    resize();
                }
            
        });        
    });

    symbols.forEach(symbutton => {// displaying the user operations
        symbutton.addEventListener('click',()=>{
            
            if(numA === "" && num !== ""){// basically numA will hold onto num value
                numA = num;// user wanting a second number
                
            }
            else if(numA !== "" && num !== "" && !equation.textContent.includes("=")){// when they want to evaluate more than 2 number
                numA = operation(numA,num,middle); 
                numtext.textContent = numA;
            }
            middle = symbutton.id;//middle will be whatever operation that user have clicked
            equation.textContent = numA + " " + middle;// this will display what user have clicked
            num = "";
            counter = 0;
        })
    });
    
    equal.addEventListener('click',()=>{ // displaying the answer when user have click equal
        if(middle === "" && numA === ""){// evaluating a single number
            numA = num;
            equation.textContent = numA + " = ";
            numtext.textContent = numA;

        }else if(middle !== "" && num === ""){
            equation.textContent = numA + " " + middle + " " + numtext.textContent + " = ";
            numA = operation(numA,numtext.textContent,middle);
            num = numtext.textContent;
            numtext.textContent = numA;
            
        }
        else{//evaluating 2 number with an operation
            equation.textContent = numA + " " + middle + " " + num + " = ";
            numA = operation(numA,num,middle);
            numtext.textContent = numA;
        }

    });

    sign.addEventListener('click',()=>{
        
        if(equation.textContent.includes('=') && middle !== ""){
            num = -numtext.textContent;
            equation.textContent = ""
            middle = "";
            numA = "";
            numtext.textContent = num;
        }else if(numA !== ""){
            num = -parseFloat(numtext.textContent);
            numtext.textContent = num;
        }  
        else if(num !== "0"){
            num = -num;
            numtext.textContent = num;
        }
        if(blank == 1){
            resize();
            blank=-blank;
        }else{
            insize();
            blank=-blank;
        }
        
    });
    dec.addEventListener('click',()=>{
        if(!numtext.textContent.includes('.')){
            num = num + ".";
            numtext.textContent = num;
            resize();
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
    if(numA >= 10000000000000 ){
        return numA.toExponential(3);
    }else if(numA <= -10000000000000){
        return numA.toExponential(3);
    }

    return numA;
}

numtext.style.fontSize = "78px"
let max = 0;
function resize(){
    max = numtext.clientWidth;
    while(numtext.clientWidth === numscreen.clientWidth){
        numtext.style.fontSize = parseInt(numtext.style.fontSize,10) - parseInt(1,10) + "px";   
    }
    console.log(max);
}

function insize(){
    while(numtext.clientWidth !== numscreen.clientWidth && numtext.style.fontSize < "78px"){
        numtext.style.fontSize = parseInt(numtext.style.fontSize,10) + parseInt(1,10) + "px";     
    }
    if(numtext.style.fontSize !== "78px"){
        numtext.style.fontSize = parseInt(numtext.style.fontSize,10) - parseInt(1,10) + "px"; 
    }
}

math();