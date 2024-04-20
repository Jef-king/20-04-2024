let count=document.querySelector(".countNo");
let clear=document.querySelector(".clear");
let error=document.querySelector('.error');
let decrement=document.querySelector('.decrement');
let result=+count.innerText;
document.querySelector('.increment').addEventListener('click',()=>{
    ++result;
    count.textContent=result;
    if(result == 1){
        error.style.display='none';
        decrement.disabled=false;
    }
})
decrement.addEventListener('click',()=>{
    --result;
    if(result < 0){
        error.style.display='block';
        decrement.disabled=true;
        result=0;
    }
    count.textContent=result;
})
clear.addEventListener('click',()=>{
    result=0;
    count.textContent=result;
    error.style.display='none';
})