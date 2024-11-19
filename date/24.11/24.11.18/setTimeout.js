setTimeout(() => {
    console.log('3초가 지났습니다.')
}, 1000);

let time = 0

const interval = setInterval(() => {
    
    console.log(`${time++} 초가 지났습니다.`)
    if ( 4 <= time){
        clearInterval(interval) // clearInterval 안에는 변수값이 들어가야 한다. setInterval을 다른 변수에 저장해주어야함. 
    }
}, 1000);

//어떤 일이 완료됐을 때 실행되는 함수를 콜백함수라고 한다. 

const pr = new Promise ( (resolve, reject)=>{ // promise는 resolve와 reject를 매개변수로 갖는 함수. 

})

let test = new Promis ()
console.log(test)

pr.then(
    function(result){})
  .catch(
    fucntion(err){}
  )    
  .finally(
    
  ){}


