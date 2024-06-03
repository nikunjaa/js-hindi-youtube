// let score = 33
// let score = "33"
// let score = "33abc"
let score = true  
// let score = null  



console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber)); 
console.log(valueInNumber);     //  o/p  for 33abc= NaN, op for null = 0

let isLoggedIn= ""

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true, 0=> false
// ""  => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);