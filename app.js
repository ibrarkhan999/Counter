let count = document.querySelector('#count')
let reset = document.querySelector('#reset')
let dec = document.querySelector('#decrement')
let display = document.querySelector('#display')
let counted = 0;

count.addEventListener('click' , ()=>{
counted++;
display.innerHTML= counted
})

reset.addEventListener('click' , rst)
function rst(){
    counted = 0
    display.innerHTML = counted
}

dec.addEventListener('click' , ()=>{
    if(counted === 0){
        display.innerHTML ='0'
    }else{
        counted--;
        display.innerHTML = counted

    }
})





