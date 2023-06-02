const numscreen = document.querySelector('.number-screen');
const equation  = document.querySelector('.equation'); 
const numbers    = document.querySelectorAll('.number-button');
const symbols   = document.querySelectorAll('.symbol');
const equal     = document.getElementById('equal');
function math(){
    let num = "";
    let numA = "";
    let middle = "";
    let done = false;

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
            if(num != "" && numA == ""){
                numA = num;
                middle = symbutton.id
                num = "";
                equation.textContent = numA + " " + middle + " ";
            }
        })
    });
    
    equal.addEventListener('click',()=>{
        done = true;
        if(num == ""){
            num = numscreen.textContent;
            console.log(num);
        }
        equation.textContent = numA + " " + middle + " " + num + " = ";
        numA = operation(numA,num,middle);
        numscreen.textContent = parseInt(numA);

    });
    
}

function operation(numA,num,middle){
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