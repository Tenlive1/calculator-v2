const numscreen = document.querySelector('.number');
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
const equal     = document.getElementById('equal');
function math(){
    nine.addEventListener('click',()=>{
        numscreen.textContent = "9";
    });
    eight.addEventListener('click',()=>{
        numscreen.textContent = "8";
    });
    seven.addEventListener('click',()=>{
        numscreen.textContent = "7";
    });
    six.addEventListener('click',()=>{
        numscreen.textContent = "6";
    });
    five.addEventListener('click',()=>{
        numscreen.textContent = "5";
    });
    four.addEventListener('click',()=>{
        numscreen.textContent = "4";
    });
    three.addEventListener('click',()=>{
        numscreen.textContent = "3";
    });
    two.addEventListener('click',()=>{
        numscreen.textContent = "2";
    });
    one.addEventListener('click',()=>{
        numscreen.textContent = "1";
    });
    zero.addEventListener('click',()=>{
        numscreen.textContent = "0";
    });
}

math();