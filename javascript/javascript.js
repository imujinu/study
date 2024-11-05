// let name ; 
// console.log(name);

// name = name ?? '아이브';
// console.log(name);

// // ??는 name값이 정의 되지 않았을 때 뒤의 값을 출력해 주세요 라는 의미.

// name = name ?? '임진우';
// console.log(name); 

// // 이미 name값은 아이브로 정의 되었기에 임진우가 출력되지 않는다.

// let name2 ;
// name2 ??='임진우';

// console.log(name2);

// 그러니까 결국?? 는 if의 의미를 어느정도 가진다고 봐도 되려나. name2 ??= '임진우'

// console.log("${typeof 3} isn't ${typeof 하이} datea type");
// console.log(" ${typeof 3} isn't ${typeof "하이"} datea type");

const userInput = parseInt(prompt("숫자를 입력하세요:"))

if (isNaN(userInput)){
    console.log("유효한 숫자를 입력하세요")
}
if(userInput %2 === 0){
    console.log("짝수입니다")
}
else{
    console.log("홀수입니다.")
}

// * 변수에서는 단지 출력되는 값. 피상적으로. 뭔가 딱히 의미가 없어. 단지 숫자나 글자일 뿐이야.
// 여기에 의미를 부여하는 건 밑에 주어진 if값

