let btn1 = document.querySelector('.btn1')
btn1.addEventListener('click' , function(){
    let text1 = document.querySelector('#text')
    text1.classList.toggle('visible')
    let search=document.querySelector('.search')
    search.setAttribute('width' , '18%')
    search.setAttribute('height' , '5%')


})