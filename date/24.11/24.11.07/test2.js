let h1 = document.getElementsByTagName("h1")[0];
h1.style.color="blue" ;

let article1 = document.getElementsByTagName("article")[0];
article1.style.fontSize = "30px"

let p1 = document.getElementsByTagName("p")[3]
p1.style.backgroundColor="gray"

let section = document.querySelectorAll("article")

section.forEach( (el, index) => {
    if(index%2===0){
        el.style.backgroundColor="green"

    }

    else {
        el.style.backgroundColor="orange"
    }
})

//반복문을 사용해야 할 거 같은데. 순차적으로 배경 컬러를 변경하니까.
// 색상을 변경해야 하는데. 이게 구체적으로 명시를 해야하잖아. 그럼 하나하나 해줘야 되는 거 아니야?
//그러니까 내가 하고 싶은게 이 노드리스트의 각 개체 값을 뽑아내고 싶었는데 그게 안디는거야. 그래서 하나하나 색을 부여하려고 한건고.
// 근데 사실은 하나하나 뽑을 수 있떤거지. 그래서 거기에 조건갑승ㄹ 머겻어 홀수라면 무슨색 짝수라면 무슨색

const art = document.querySelectorAll("main section")
art.forEach((el) => {
    el.querySelector("h2").textContent="기사입니다"
    el.querySelector("p").textContent="내용이없습니다."
})

const foop = document.querySelector("footer>p");
foop.style.backgroundColor="lightgray"


for (const al of art) {al.addEventListener("click" , ()=>{al.style.backgroundColor="yellow"})}

const h2 = document.querySelectorAll("h2")
h2.forEach( el => {
    el.addEventListener("click" )
 })

 const article_h2=document.querySelectorAll("article h2")
 article_h2.forEach((fs) => {return fs.style.fontSize="50px" })

 const secon_article = document.getElementsByTagName("article")[1]
 secon_article.style.backgroundColor="pink"
