//Write a program that takes a number as input and outputs whether it is positive, negative, or zero.
let num=-34;
if (num>0) {
    console.log("number is positive");
    
}
else if (num<0) {
    console.log("number is negative");
    
}
else{
    console.log("number is zero");
}

//Write a program that takes a user's age as input and determines whether they are eligible to vote (i.e., over 18 years old).
let age=19;
if (age>18) {
    console.log("you are eligible to vote");
    
}
else{
    console.log("you are not eligible yo vote");
}
//Write a program that takes a year as input and 
//outputs whether it is a leap year or not. 
//(A leap year is a year that is divisible by 4, except for years 
//that are divisible by 100 but not divisible by 400.)
let year = 2024
if (year % 4 === 0 && (year % 100 === 0 || year % 400 !== 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}


let l=[1,2,3,4,5,6,7,8]
for(let r of l){
    console.log(r*2);
}
let k=[1,2,3,4,5,6,7,8];
let t=k.filter(even)
function even(value) {
    return value%2==0
}
console.log(t);
let ages=[18,23,12,11]
let agees=ages.filter(personage)
function personage(miaka) {
    return miaka<18
    
}
console.log(agees);