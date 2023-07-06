function merge(num) {
    if (num.length<=1) {
        return num
        
    }
    let middle=Math.floor(num.length -1)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
    return sort(merge(left),merge(right))
    
}
function sort(left,right) {
    let empty=[]
    while (left.length && right.length) {
        if (left[0]<right[0]) {
            empty.push(left.shift())
            
        }
        else{
            empty.push(right.shift())
        }
        
    }
    return[...empty,...left,...right];
    
}
let num=[45,12,6,89,2,5]
console.log(merge(num));

function binary(num1,target) {
    let leftindex=0;
    let rightindex=num1.length -1;
    
    while (leftindex<=rightindex) {
        let middle=Math.floor((leftindex+rightindex)/2) 
        if (num1[middle]===target) {
            return middle
        }
        else if (num1[middle]>target) {
            rightindex=middle-1
            
        }
        else{
            leftindex=middle+1
        }    
    }
    
}
let num1=[2,5,6,12,45,89];
let target=6;
console.log(binary(num1,target));