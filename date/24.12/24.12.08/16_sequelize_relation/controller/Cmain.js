const {sequelize, Op} = require("sequelize");
const index = require("../models/index");


exports.main = async (req, res) => {
  
  // [1. Op 연산자 or 이용해보기 대괄호안에 값을 입력한다.]
  // try{
  //   const result = await index.Player.findAll({where: {
  //     [Op.or] : [{
  //       player_id: "1"
  //     },
  //      { name : "이강인"},
  //   ]
  //   }})
  //   console.log(result)
  //   res.render("index", result);
  // }catch{(err)=>{
  //   console.error}
  // }

  // [2. include 해보기]

  const result = await index.Player.findAll({
    include: [{
      model : index.Game,
      required : true, 
      attributes : ['user_id']
    }]
  })

  // [3. limit, offset 설정 해보기]

  const result = await index.Player.findAll({
    where: {
      userid : "1"
    },
    limit : 10,
    offset : 0,
  })

  // [4. 정렬 desc asc 이용해보기]

  const result = await index.player.findAll({
    where : {
      name : '임진우'
    },
    order :[
      ['age, desc']
    ]
  })
};

// exports.join = (req, res) => {};
