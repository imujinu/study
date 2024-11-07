let first = document.getElementById("first")
first.style.backgroundColor = 'red';

let second = document.getElementsByClassName("box")[1];
second.textContent = "나는 h2가 맞습니다. "


let third = document.querySelector("#third")
third.style.fontSize = '20px'

first.addEventListener("click", function(){
    first.style.backgroundColor = "blue"
})
second.addEventListener("mouseover", function(){
    second.style.color="pink"
});