let count=document.querySelector(".countNo");
let clear=document.querySelector(".clear");
let result=+count.innerText;
console.log(result);
document.querySelector('.increment').addEventListener('click',()=>{
    ++result;
    count.textContent=result;
    clear.style.display='inline-block';
})
document.querySelector('.decrement').addEventListener('click',()=>{
    if(result == 0){
        clear.style.display='none';
        document.querySelector('.error').style.display='block';
        document.querySelector('.decrement').setAttribute(disabled,true);
    }
    --result;
    count.textContent=result;
})
clear.addEventListener('click',()=>{
    result=0;
    count.textContent=result;
    clear.style.display='none';
})
