const numscreen = document.querySelector('.number-screen');
const equation  = document.querySelector('.equation'); 
const numbers    = document.querySelectorAll('.number-button');
const symbols   = document.querySelectorAll('.symbol');
const equal     = document.getElementById('equal');
const clear     = document.querySelector('#clear');
const back      = document.querySelector('#backspace');

function math(){
    let num = "";
    let numA = "";
    let middle = "";
    let done = false;

    clear.addEventListener('click',()=>{
        num = "";
        equation.textContent = "";
        numscreen.textContent = "";
        numA = "";
        middle = "";
        done = false;
    });
    back.addEventListener('click',()=>{
        if(num.length !== 0){
            num = num.substring(0,num.length-1);
            numscreen.textContent = num;
        }
    });
    numbers.forEach(numbutton => {
        numbutton.addEventListener('click',()=>{
            if(done){
                num = "";
                equation.textContent = "";
                numscreen.textContent = "";
                numA = "";
                done = false;
            }
            num = num + numbutton.id;
            numscreen.textContent = num;
        });        
    });

    symbols.forEach(symbutton => {
        symbutton.addEventListener('click',()=>{
            
            if(numA === "" && num != ""){
                numA = num;
            }
            else if(numA !== "" && num != ""){
                numA = operation(numA,num,middle); 
                numscreen.textContent = parseInt(numA);
                
            }else if(numA !== "" && num !== ""){
                numA = operation(numA,num,middle);
                numscreen.textContent = parseInt(numA);
            }
            middle = symbutton.id;
            equation.textContent = numA + " " + middle;
            num = "";
        })
    });
    
    equal.addEventListener('click',()=>{
        done = true;
        if(num == ""){
            num = numscreen.textContent;
        }
        equation.textContent = numA + " " + middle + " " + num + " = ";
        numA = operation(numA,num,middle);
        numscreen.textContent = parseInt(numA);

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