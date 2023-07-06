//Write a function that takes two numbers as arguments and returns their sum.
function add(a,b) {
    console.log(a+b);
    
}
add(50,50)
//Write a function that takes a string as an argument and returns the length of the string.
function names(str) {
    console.log(str.length);
    
}
names("serah")
//Write a function that takes an array of numbers as an argument and returns
// the sum of all the numbers in the array.
function number(array) {
    let a=[23,12,11,56,78]
    let sum=0
    for (let i = 0; i < a.length; i++) {
      
        sum+=a[i]   
    }
    return sum   
}
console.log(number([23,12,11,56,78]))
function numb(x) {
    smm=0
    x.forEach(item => {
        smm+=item
        
    });
    return smm
    
}
let l=[1,2,3,4,5,6,7]
let f=numb(l)
console.log(f);
//Write a function that takes an array of strings as an argument and returns 
//a new array with all the strings converted to uppercase.
function upper(arr){
    const upparr=[];
    for (let f = 0; f < arr.length; f++) {
        upparr.push(arr[f].toUpperCase());
        
    }
    return upparr;
    
}
let n=["maim","cash","mkdir"];
let m=upper(n);
console.log(m);

function uppercaseStrings(arr) {
    return arr.map(str => str.toUpperCase());
  }
  let y=["hello","hey","merry","chrismas"];
  let r=uppercaseStrings(y);
  console.log(r);

  
function serah(liz) {
    let y=[]
    for (let o = 0; o < liz.length; o++) {
        y.push(liz[o].toLowerCase())
       
        
    }
    return y
    
}  
let nm=["HELLO","CHRISMAS","KALEKALE"];
let rm=uppercaseStrings(nm);
console.log(rm);

function uppercase(arr1) {
    return arr1.map(str => str.toUpperCase());
  }
  let lm=["hello","hey","merry","chris"];
  let k=uppercaseStrings(lm);
  console.log(k);
  //Write a function that takes a number as an argument and returns true
  // if the number is even and false if it is odd.
function checkodd(nmd) {
    if (nmd%2===0) {
        return true
        
    }
    else{
        return false
    }
   
}
let v=11;
let h=checkodd(v);
console.log(h);

//Write a function that takes an array of numbers as an argument and returns a new array
// with all the even numbers from the original array.
    let g=[12,13,14,15,16,17,18];
    let c=g.filter(even)
    function even(num) {
        return num%2===0;
    }
console.log(c);
//Write a function that takes an array of strings as an argument and 
//returns a new array with all the strings sorted in alphabetical order.
function namess(persons) {
    console.log(persons.sort());
    
}
let z=["serah","mary","brenda","ann"];
let yo=namess(z);
console.log(yo);

//Write a function that takes an array of numbers as an argument and returns
// the average of all the numbers in the array.
function findavg(numbb) {
    let sum=numbb.reduce((a,b)=>a+b)
    let average=sum/numbb.length
    return average
    
}
let yu=[1,2,3,4,5,67];
let nj=findavg(yu)
console.log(nj);
//Write a function that takes a string as an argument and returns true if the string is a palindrome
// (reads the same backwards and forwards) and false if it is not.

function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const str2 = "hello";
console.log(isPalindrome(str2));
//Write a function that takes an array of strings as an argument and returns a new array
// with all the strings that have a length of 4 or greater.
let jk=["serah","cat","mentorship","dog","lift"]
let jin=jk.filter(findlength)
function findlength(mesh) {
    return mesh.length>3
    
}
console.log(jin);
//Write a function that takes an array of numbers 
//as an argument and returns a new array with all the numbers in the array squared.
function squaree(squared) {
    let suum=[]
    for (let jk = 0; jk < squared.length; jk++) {
       suum.push(squared[jk] **2)
    
        
    }
    return suum 
    
    
}
let u=[1,2,3,4,5,6];
let ni=squaree(u)
console.log(ni);
//Write a function that takes a string as an argument and returns the
// string with the first letter of each word capitalized.

function me(key) {
    let re=[]
    for (let po = 0; po < key.length; po++) {
        re.push(key[po].charAt(0).toUpperCase()+key[po].substring(1))
        
        
    }
    return re
    
}
let yuu=["serah","mary","caro","camilla"];
let njj=me(yuu)
console.log(njj);

//Write a function that takes an array of strings as an 
//argument and returns the string with the longest length.
function findLongString(strings) {
    let longestString = "";
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > longestString.length) {
        longestString = strings[i];
      }
    }
    return longestString;
  }
  let zz=["serah","mary","brenda","ann"];
let yoz=findLongestString(zz);
console.log(yoz);
  











