let boys=["samuel","john","james","brian","juma","peter","moses"];
console.log(boys.length);
console.log(boys.sort());
console.log(boys.reverse());
console.log(boys.push("ann"));
console.log(boys.unshift("melo"));
console.log(boys.pop());
console.log(boys.shift())
console.log(boys);
let a=[1,2,3,4];
let b=[5,6,7,8];
let c=a.concat (b);
console.log(c);
let d=a+" "+b;
console.log(d);
let months=["january","february","march","april","may"];
let e=months.splice(1,2,"october");
console.log(months);
console.log(months.lastIndexOf());
console.log(months.indexOf("april"));
console.log(months.slice(0));
console.log(months.includes("january"));
//filter method
let numbers=[1,4,6,5,65,78,22,11,22];
function mynumbers(number){
    if(number%2==0)
    return true
    else
    return false
}
let even=numbers.filter(mynumbers);
console.log(even);
let num1=[2,3,4,5,6,7,8];
let num2=num1.filter(myeven)
function myeven(result){
    return result%2==0;

}
console.log(num2)

let num3=[3,4,5,6,7,8,9]
let num4=num3.filter(myodd);
function myodd(odd){
    return odd%2 !=0
}
console.log(num4);

let age=[12,34,23,22,25,68]
let ages=age.filter(myage)
function myage(years){
    return years>=18

}
console.log(ages);
let numbe=[1,2,3,2,1,3,5,6,4,7,4];
let h=numbe.filter((value,index,arr)=>{
    return arr.indexOf(value)===index;

})
console.log(h);
const people=[{name1:"jane",age:22},{name2:"caro",age:12},{name3:"nelly",age:34},{name4:"melo",age:11}]
let p=people.filter(people=>people.age>=18);
console.log(p);



//map method
let yes=[4,16,36,49,81,64]
let yess=yes.map((yesss)=>{
    return Math.sqrt(yesss);
})
console.log(yess);

let names=["serah","jane","caro","james","nelly"];
let namess=names.map((namsss)=>namsss.length);
console.log(namess);

let nyages=[12,34,56,22,18]
let b1=nyages.filter(agess)
function agess(yours) {
    return yours<18
    console.log(b1);
    
}
