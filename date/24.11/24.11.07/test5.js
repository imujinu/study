let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"]

let same = fruits1.filter(el => {return fruits2.includes(el)})

console.log(same)

let diffrent = fruits1.filter (el => {return !fruits2.includes(el)})

console.log(diffrent)

// 아니 이것도 너무 관습적으로 뽑은거 같은데? 왜 배열을 뽑았지? filter라는 메소드가 결국 배열을 반환해주는건데 
// 아 하나 일때는 return을 써야 하는데. 그냥 무조건 return을 쓰고 하나며 지우던가 하자. 이게 이상한 습관이 됐네 .
// 그니까 이거 원리를 보자면 둘이 같은 걸 뽑으려면 a1의 요소가 b1에도 포함되어 있어야 한다라고 해줘야 하잖아. 
// 그럼 includes를 써야하는 건 맞잖아. a1의 객체들을 뽑았을 때 그 객체가 a2에 포함되어 있으면 same이라는 변수에 객체값으로 저장한다 라는 의미가 되면 되겠지.
// 참 간단한 문제였는데 말이죵... 