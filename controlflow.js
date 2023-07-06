//Write a program that takes a string as
 //input and prints whether it is a 
// palindrome or not using an if-else 
 //statement.
 let names=["level"]
 let m=names.reverse()
 console.log(m)

 if (m==names) {
    console.log("the name is a palindrome");
    
 }
 else{
    console.log("the name is not a palindrome");
 }
 
//Write a program that takes two integers as 
//input and prints their sum using a for loop.
let numbers=[50,100];
let e=0
for (let i = 0; i < numbers.length; i++) {
    e+=numbers[i]   
}
console.log(e);

let num=[100,50]
sum=0
for (let k = 0; k < num.length; k++) {
   sum-= num[k]; 
}
console.log(sum);

//Write a program that uses a while loop to find the factorial of
 //a given number.

let n=6, i=1, fact=1
while(i<=n)
{
  fact = fact*i 
  i++
}
console.log(fact)

let pin=[23,12,11,34,35,45,67,78];
for (let r = 0; r < pin.length; r++) {
   console.log(r);
   console.log(pin[r]);
   
}
for (let r = 0; r < pin.length; r++) {
   console.log({"break":pin[r]});
   if (r===4) {
      break;  
   }  
}
for (let r = 0; r < pin.length; r++) {
   
   if (r===4) {
      continue;  
   } 
   console.log({"continue":pin[r]}); 
}
let v=[34,67];
let w=0
for (let o = 0; o < v.length; o++) {
   console.log(o);
   console.log(v[o]);
   
   w+=v[o]   
}
console.log(w);
let u=0;
while (u<100) {
   console.log(u);
   u+=2
   
}
let n1=0;
for (let j = 0;n1 < 100; j++) {
   n1+=2
   console.log(n1);
   
}
let me=[1,2,3,4,6];
let y=0;
let u7=0;
let y2=[1,2,3,4,5,6,7,8,9,10]
let y1=y2.filter(y3=>y3.length *2)
console.log(y1);

let nyages=[12,34,56,22,18]
let b1=nyages.filter(agess)
function agess(yours) {
    return yours<18
    console.log(b1);
    
let hhh=[1,12,11,13];
hhh.forEach(element => {
    console.log(element*2);
    
});
let jjj=[1,12,11,13];
jjj.map(k=>{
   console.log(k+2);
})
let number=[1,2,3,4,5,6,7,8,9];
let p=number.filter(numbers=>numbers%2==0)
console.log(p);

let k=[1,2,3,4,5,6,7,8];
let l=k.filter(even)
function even(value) {
    return value%2==0
}




