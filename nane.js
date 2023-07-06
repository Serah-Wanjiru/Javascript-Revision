//Write a function that takes two numbers as arguments and 
//returns their sum.
function add(number){
    let sum=0
    for (let i = 0; i < number.length; i++) {
       sum+=number[i]     
    }  
    return sum    
}
let number=[12,12]
console.log(add(number));
//Write a function that takes a string as
// an argument and returns the length of the string.
function names(namw){
    return namw.length

}
let namw="serah"
console.log(names(namw));
//Write a function that takes an array of numbers as an 
//argument and returns the sum of all the numbers in the array.
function numbers(arrays) {
    let x=0
    for (let A = 0; A < arrays.length; A++) {
       x+=arrays[A]
        
    }
    return x
    
}
let arrays=[12,12,13,45,14]
console.log(add(arrays));

function lift(num) {
    let z=0
    num.forEach(item => {
        z+=num[item]
        
    });
    return z
    
}
let num=[12,12,13,45]
console.log(add(num));

//Write a function that takes an array of strings as an argument and 
//returns a new array with all the strings converted to uppercase.

function fruits(me) {
    
    return me.map(str=>str.toUpperCase());

}
let me=["serah","mary","ann","lyn"];
console.log(fruits(me));
function back(nmmm) {
    let v=[]
    for (let l = 0; l < nmmm.length; l++) {
        v.push(nmmm[l].toUpperCase())
       
        
    }
    return v
    
}
let nmmm=["serah","mary","ann","lyn"];
console.log(back(nmmm));

//Write a function that takes a number as an argument and returns true if 
//the number is even and false if it is odd.
function kales(numb) {
    if (numb%2===0) {
        return true
    }
  
    else{
        return false
    }
    } 
let numb=12;
console.log(kales(numb));

//Write a function that takes an array of numbers as an argument and returns a 
//new array with all the even numbers from the original array.
let k=[1,2,3,4,5,6,7,8];
let p=k.filter(even)
function even(value) {
    return value%2===0
}
console.log(p);
function fame(numberr) {
    let u=[]
    for (let k = 0; k < numberr.length; k++) {
        if (numberr[k]%2===0) {
            u.push(numberr[k])
            
        }
        
    }
    return u
    
}
let numberr=[1,2,3,4,6,7,8];
console.log(fame(numberr));

//Write a function that takes an array of strings as an argument and returns a new array 
//with all the strings sorted in alphabetical order.
function ilara(tryy) {
    return tryy.sort();
    
}
let tryy=["serah","mary","ann","lyn"];
console.log(ilara(tryy));

//Write a function that takes an array of numbers 
//as an argument and returns the average of all the numbers in the array.
function jk(mane) {
    let sum=mane.reduce((a,b)=>a+b)
    let avg=sum/mane.length
    return avg
    
}
let mane=[1,2,3,4,6,7,8];
console.log(jk(mane));
//Write a function that takes an array of numbers as an argument and returns a 
//new array with all the numbers in the array squared.
function POK(PK) {
    let fm=[];
    for (let y = 0; y < PK.length; y++) {
        fm.push(PK[y]**2)
       
        
    }
    return fm  
    }
let PK=[1,2,3,4,6,7,8];
console.log(POK(PK));

let tryyy=["serah","mary","ann","lyn","mentorship"];
let ki=tryyy.filter(oop)
function oop(ooop) {
    return ooop.length>=4

    
}
console.log(ki);
function ikulu(mkdir) {
    let ju=[]
    for (let op = 0; op < mkdir.length; op++) {
      if (mkdir[op].length >= 4) {
        ju.push(mkdir[op])
      }
        
    }
    return ju
    
}
let mkdir=["serah","mary","ann","lyn","mentorship"];
console.log(ikulu(mkdir));




    





    



