let n = "name";
let a = "age";

const uer = {
    [n] : "mike",
    [a] : 30,
    [1+4] : 5,
}
// ,,,,,,,,, 반드시 키값과 키값 사이에는 쉼표를 찍어 구분해주기. 컴퓨터는 몰라!


console.log(uer)

function makeObj( key, value) {
    return {
        [key] : value,
    }
}

const Obj = makeObj("이름", "임진우")
console.log (Obj)

