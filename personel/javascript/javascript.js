let name ; 
console.log(name);

name = name ?? '아이브';
console.log(name);

// ??는 name값이 정의 되지 않았을 때 뒤의 값을 출력해 주세요 라는 의미.

name = name ?? '임진우';
console.log(name); 

// 이미 name값은 아이브로 정의 되었기에 임진우가 출력되지 않는다.

let name2 ;
name2 ??='임진우';

console.log(name2);

그러니까 결국?? 는 if의 의미를 어느정도 가진다고 봐도 되려나. name2 ??= '임진우'

