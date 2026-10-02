// primitive

// 7types: string ,number,boolean ,null,undefined,symbol,BigInt
const score = 100
const scorevalue = 100.3
const isloggedin =false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);
const bigNumber = 51566461156446531354n
// Reference(non primitive)

//  array,objects,functions
const heros = ["shaktiman","nagraj","doga"];
let myobj = {
    name:"Darshan",
    age :22,
}

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);