const movie = ["아이언맨", " 아이언맨2", "아이언맨3"];
const time = [10, 13, 17];
const pay = [10000];

function check(name) {
  return new Promise((res, rej) => {
    if (movie.includes(name)) {
      res(`${name}은예약가능합니다`);
    } else {
      rej(`${name}은예약불가능합니다.`);
    }
  });
}

function reserve(youtime) {
  return new Promise((res, rej) => {
    if (time.includes(youtime)) {
      res(`${youtime}으로 예약합니다.`);
    } else {
      rej(`${youtime}은 예약 불가능합니다.`);
    }
  });
}

function confirm(money) {
  return new Promise((res, rej) => {
    if (money >= pay[0]) {
      res(`${pay}원을 결제합니다.`);
    } else {
      rej(`잔액이 부족합니다. 결제금액: ${pay[0]}, 잔액: ${money}`);
    }
  });
}

async function exec() {
  try {
    const name = await check("아이언맨");
    console.log(name);
    const time = await reserve(10);
    console.log(time);
    const mon = await confirm(8000);
    console.log(mon);
  } catch (err) {
    console.log(err);
  }
}

exec();
