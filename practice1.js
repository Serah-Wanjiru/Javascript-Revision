//Write a function that takes two numbers as 
//input and returns their sum.
function add2(num) {
    sum=0
    for (let a = 0; a < num.length; a++) {
        sum+=num[a]    
    }
    return sum   
}
let num=[34,12]
console.log(add2(num));
//Write a function that takes an array 
//of numbers as input and returns the largest number in the array.
function largestnum(number) {
    let maxnum=Math.max(...number)
    return maxnum
    
}
let number=[12,78,34,23,60]
console.log(largestnum(number));
//Write a function that takes
 //a string as input and returns 
 //the reverse of the string.
 function reversename(names) {
    let b=names.split("").reverse().join("")
    return b
    
 }
let names="serah" 
console.log(reversename(names));
//Write a function that takes a number as input and returns true if the number
// is even and false if the number is odd.
function removevowels(vowels) {
        if (vowels%2==0) {
            return true    
        }
        else{
            false
        }    
    }
let y=12
console.log(removevowels(y)); 


//Write a function that takes an array of numbers as
// input and returns a new array that contains only 
//the even numbers from the input array.
function even(nuums) {
    let r=[]
    for (let i = 0; i < nuums.length; i++) {
        if (i%2==0) {
            r.push(nuums[i])  
        }   
    }
    return r   
}
let e=[12,13,14,15,16,17,18,19,20];
console.log(even(e));
//Write a function that takes 
//an array of numbers as input 
//and returns the product of all
// the numbers in the array.
function multiply(numb){
    let l=1
    for (let k = 0; k < numb.length; k++) {
        l*=numb[k]  
    }
    return l
}

let ee=[12,13,14,15,16,17,18,19,20];
console.log(multiply(ee));
function removedup(numms) {
  return[...new Set(numms)];
    
    
}
let yy=[1,2,3,1,2,3,4,4,5];
console.log(removedup(yy));
function sorting(namess) {
    let i=namess.sort()
    return i
    
}
let d=["hellen","brenda","serah"];
console.log(sorting(d));

function sortnum(numbb) {
    numbb.sort(function(a,b) =>{
        return a-b   
    }) 
      
}
let f=[72,45,67,12,13,7,24];
console.log(sortnum(f));



  
 