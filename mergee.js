//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6
function mergeSort(arr) {
    if (arr.length<=1) {
        return arr
        
    }
    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return sort(mergeSort(left),mergeSort(right))
    
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
    return[...empty,...left,...right]
    
}
let arr = [45,12,6,89,2,5]
console.log(mergeSort(arr));

function binary(num,target) {
    leftindex=0
    rightindex=num.length -1

    while (leftindex<=rightindex) {
        let middle=Math.floor((leftindex+rightindex)/2)
        if (num[middle]===target) {
            return middle
            
        }
        else if(num[middle]>target){
        return rightindex=middle-1
        
    }
    else{
        return leftindex=middle+1
    }
}
    
}
let num=[2,5,6,12,45,89]
let target=6
console.log(binary(num,target));
