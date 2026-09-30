let score = "33abc"
  
// const {score} = req.body
console.log(typeof score);
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33"=>33
// "33abc"=>NaN
// true=>1,false=>0
// null=>0
// 1=>true,0=>false
// ""=>false
// "darshan"=>true


// ***********operations***********

let value =3 ;
let negvalue = -value
console.log(negvalue)

console.log("1"+ 2);
console.log(1+"2");
console.log("1"+2+ 2);
console.log(1+2+"2");

console.log(true);
console.log(+true);
console.log(+"");