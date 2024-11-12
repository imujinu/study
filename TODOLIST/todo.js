let btn = document.querySelector('form')
let work = document.querySelector('#work')
let ul = document.querySelector('ul')

let workvalue = work.value.trim()

btn.addEventListener('submit', (p)=>{
    p.preventDefault()
    
    
    let list = document.createElement('li')
    list.innerHTML=workvalue
    list.classList.add('li')
    
    ul.append(list)  
    work.value= " " 
} 
)