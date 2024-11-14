let btn1 = document.querySelector('.btn1')
btn1.addEventListener('click' , function(){
    let ul = document.querySelector('ul')
    ul.classList.add('btn1transform')
    
    let search = document.querySelector('#search')
    search.style.display = 'block'

    let search1=document.querySelector('.search1')
    search1.classList.add('btntransform')
})

let navbar = document.querySelectorAll('.header2 a')
let hbox=document.querySelectorAll('.h-box')

navbar.forEach(el1=>{
    el1.addEventListener('mouseover', function(){
        hbox.forEach(el=>{
            el.classList.add('boxtransform')
        })})
        el1.addEventListener('mouseout', function(){
            hbox.forEach(el=>{
                el.classList.remove('boxtransform')
            })}    


)})
