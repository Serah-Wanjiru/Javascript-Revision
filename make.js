let word="beautiful";
console.log(word.slice(5));
const food="I was feeling hungry today";
let c="eat"
let a=`I was feeling ${c} hungry today`
console.log(a);
const story="the quick brown fox jumps over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/g).length);
const string1="we are now going to school"
console.log(string1.includes("now"));
const string2="The child was sitting on the table before it fell";
console.log(string2.includes("sitting"));
const amazed="wonderful"
console.log(amazed.toUpperCase());
let b=("amazing","BEneath");
console.log(b.toLowerCase());
let n="hello";
let m="world"
let r=n.concat(m);
console.log(r);
for (let i = 0; i < n.length; i++) {
    const element = n[i];
    console.log(i);
    console.log(n[i]);
    console.log(n.slice(0));
    console.log(n.split());

    
}
let g=["jane","caro"];
console.log(g.toString);
console.log(g.sort());
console.log(g.push("melo","serah","mercy"));
console.log(g);
console.log(g.unshift("karis","sammy","jemo"));
console.log(g);
console.log(g.shift());
console.log(g.pop());
console.log(g.sort());
let number=[1,2,3,4,5,6,7,8,9];
let p=number.filter(numbers=>numbers%2==0)
console.log(p);
console.log(number.reverse());
console.log(number.slice(1));
console.log(number.includes(5));
let num=[1,2,3,4];
num.forEach(element => {
    console.log(element*2);
    
});











