let number=[1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    console.log(i);
    console.log(number[i]);
    
}
let numbers=[1,2,3,4,5,6,7,8,9,10];
let num=numbers.filter(nums=>nums%2 !=0);
console.log(num);

let b =["serah","cat","dog","maryann","jane"];
let c=b.filter(s=>s.length>4);
console.log(c);
let x=[3,5,6,4];
x.forEach(element => {
    console.log(element*2);
    
});
let y=[3,5,6,4];
let v=y.map(h=>{
    console.log(h+2);
})
let k=[1,2,3,4,5,6,7,8];
let l=k.filter(even)
function even(value) {
    return value%2==0
    
}
console.log(l);
let n="beautiful"
let v=n.slice[5]
console.log(v);