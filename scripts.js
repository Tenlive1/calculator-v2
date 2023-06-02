const numscreen = document.querySelector('.number-screen');
const equation  = document.querySelector('.equation'); 
const numbers    = document.querySelectorAll('.number-button');
const symbols   = document.querySelectorAll('.symbol');
const equal     = document.getElementById('equal');
function math(){
    let num = "";
    let numA = "";
    let middle = "";

    numbers.forEach(numbutton => {
        numbutton.addEventListener('click',()=>{
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
                equation.textContent = numscreen.textContent + " " + middle + " ";
            }
        })
    });
    
    equal.addEventListener('click',()=>{
        done = true;
        if(middle == "+"){
            
            equation.textContent = equation.textContent + num + " = ";
            num = parseInt(numA) + parseInt(num);
            numscreen.textContent = parseInt(num);
            
        }

    });
}

math();