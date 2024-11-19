const pr = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 1000);
})

console.log('시작');
pr.then((result)=> {
    console.log(result)
})

    .catch((err)=>{
        console.log(err);
    })