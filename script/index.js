let base = document.querySelectorAll('input')[0];
let height = document.querySelectorAll('input')[1];
let button = document.querySelector('button')
let span = document.querySelector('span')

button.addEventListener('click', ()=>{
    span.innerText = 0.5 * base.value * height.value + " cm²" //calculating the area of the traingle 
})