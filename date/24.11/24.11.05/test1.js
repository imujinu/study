
// let schedule = {};

// let isEmpty(obj) = function (){
//     for (let key in schedule) {
//         return false}

//         return true
// }

// alert( isEmpty(schedule) ); 

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) );

// sum = 0 

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   for (let key in salaries){
//     sum += salaries[key]
//   }

//   console.log(sum)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// const superman = {
//     name : 'clark',
//     age : 30,
// }

// superman.hairColor = 'black' ; 
// superman['hobby'] = 'soccer'

// delete superman.age;

// function makeObject(name,age){
//     return{
//         name : name,
//         age : age,
//         hobby : 'football'
//     }
// }

// const Mike = makeObject ( 'mike' , 30)
// console.log(mike)

// 이름 입력창 만들기
// const name = prompt("이름을 입력해주세요")
// console.log (`환영합니다 ${name} 님`) 

// function Item (title, price) {
//     // this = {};
//     this.title : title;
//     this.price : price;
//     this.showPrice : function(){
//         console.log(`가격은 ${price}원 입니다. `)
//     }
// }
 
// const item1 = new Item('인형' , 3000); 
// const item2 = new Item('가방' , 4000); 
// const item3 = new Item('지갑' , 9000);

// console.log( item1, item2, item3)

// function User(name, age){ 
//     this.name = name;
//     this.age = age;
//     this.sayName = function(){
//         console.log(this.name);
//     }

// }

// let user5 = new user ('han' , 40);
// user5.sayName();

// let desc = "hi guys. Nice to meet you."

// desc.toUpperCase();

// desc.toLowerCase();

let list = {
    "01. 들어가며",
    "02. 들어가며",
    "03. 들어가며",
    "04. 들어가며",
    "05. 들어가며",
    "06. 들어가며",
}

let newList = [];

for ( i=0; i < list.length ; i++){
    newList.push(list[i].slice(4))


    console.log(
        newList
    );
}