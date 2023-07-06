//Write a program that prints the multiplication table 
//of a given number using a for loop.
const number=8;

for (let i = 1; i < 10; i++) {
    const count =number*i
    console.log(`${number } *${i}=${count}`)

}
// let num=2;
// for (let k = 0; k < 10; k++) {
//     const element = num*k;
//     console.log(`${num}*${k}=${element}`);
    

for (let v = 2000; v < 2023; v++) {
    if (v%4===0) {
        console.log("its is a leap year");

        
    }
    else{
        console.log("not a leap year");
    }
    
}
for (let num = 0; num < 100; num++) {
  if (num%3===0 && num%5===0) {
    console.log("FizzBuzz");
    
  }
  else if (num%3===0) {
    console.log("Fizz");
    
  }
  else if (num%5===0) {
    console.log("Buzz");
    
  }
  else{
    console.log(num);
  }
    
}
let numArray = [12,87,45,75,23,64,73] 
numArray.forEach(x=> {
    return x
    console.log(x*4);
    
});
x=1
while (x<100) {
  x+=2
  console.log(x);
  
}
let nuum=[13,12,34,45,64,32,90];
for (let l = 0; l < nuum.length; l++) {
  console.log(l);
  console.log(nuum[l]);


  console.log({"break":nuum[l]});
  if (l===4) {
  break;
  }
  

  
  if (l===4) {
  continue;
  }
  console.log({"continue":nuum[l]});
  
}




  


