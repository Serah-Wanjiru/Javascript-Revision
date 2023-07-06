// // Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// // let num = [45,12,6,89,2,5]
// // let target = 6
// function merge(num) {
//     if (num.length<=1) {
//         return num
        
//     }
//     let middle=Math.floor(num.length /2)
//     let left=num.slice(0,middle)
//     let right=num.slice(middle)
//     return sort(merge(left),merge(right))
    
// }
// function sort(left,right) {
//     let emptyarray=[]
//     while (left.length && right.length) {
//         if (left[0]<right[0]) {
//             emptyarray.push(left.shift())

            
//         }else{
        
//             emptyarray.push(right.shift())
//         }
        
//          }
//          return[...emptyarray,...left,...right]
         
// }
// let num=[45,12,6,89,2,5]
// console.log(merge(num))
// //BINARY
// function binary(numi,target) {
//     let leftindex=0;
//     let rightindex=numi.length -1;
//     while (leftindex<=rightindex) {
//         let middle=Math.floor((leftindex+rightindex)/2)
//         if (num[middle]===target) {
//             return middle
            
//         }
//         else if (num[middle]>target) {
//             rightindex=middle-1
            
//         }
//         else{
//             leftindex=middle+1
//         }
        
//     }

    
// }
// let numi=[2,5,6,12,45,89]
// let target=6
// console.log(binary(numi,target));
// function merge(arr) {
//     if (arr.length<=1) {
//         return arr
        
//     }
//     let middle=Math.floor(arr.length/2)
//     let left=arr.slice(0,middle)
//     let right=arr.slice(middle)
//     return sortarray(merge(left),merge(right))
    
// }
// function sortarray(left,right) {
//     let empty=[]
//     while (left.length && right.length) {
//         if(left[0]<right[0]){
//             empty.push(left.shift())
//         }
//         else{
//             empty.push(right.shift())
//         }
        
//     }
//     return[...empty,...left,...right]
    
// }
// let arr=[123,89,5,23,9,56];
// console.log(merge(arr));

// function binary(arr1,target) {
//     let leftindex=0;
//     let rightindex=arr.length -1
//     while (leftindex<=rightindex) {
//         let middle=Math.floor((leftindex+rightindex)/2)
//         if (arr1[middle]===target) {
//             return middle
            
//         }
//         else if (arr1[middle]>target) {
//             rightindex=middle-1
            
//         }
//         else{
//             leftindex=middle+1
//         }
        
//     }
    
// }
// let arr1=[1,4,78,2,67,3];
// let target=34;
// console.log(binary(arr1,target));

//Given an array of unsorted numbers,
 //return the index of the following target 
 //if the target exists in the array. 
//If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6
function merge(num) {
    if (num.length<=1) {
        return num
        
    }
    let middle=Math.floor(num.length /2);
    let left=num.slice(0,middle);
    let right=num.slice(middle)
    return sort(merge(left),merge(right))
    
}
function sort(left,right) {
    let empty=[]
    while (left.length && right.length) {
        if(left[0]<right[0]){
            empty.push(left.shift())
        }
        else{
            empty.push(right.shift())
        }
        
    }
    return[...empty,...left,...right]
    
}
let num = [45,12,6,89,2,5]
console.log(merge(num));

function binary(num1,target) {
    let leftindex=0;
    let rightindex=num1.length -1;
    while (leftindex<=rightindex) {
        let middle=((leftindex+rightindex)/2);
        if (num1[middle]===target) {
            return middle
            
        }
        else if (num1[middle]>target) {
            rightindex=middle-1
            
        }
        else{
            leftindex=middle+1;

        }
        
       
    }
    
    
}

let num1=[2,5,6,12,45,89];
let target=6;
console.log(binary(num1,target));

function merge(arr) {
    if (arr.length<=1) {
        return arr
        
    }
    let middle=Math.floor(arr.length -1)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return sort(merge(left),merge(right))
    
}
function sort(left,right) {
    let empty=[]
    while (left.length && right.length) {
        if (left[0]>right[0]) {
            empty.push(left.shift())
            
        }
        else{
            empty.push(right.shift())

        }
        
    }
    return[...empty,...left,...right]
    
}
let arr=[123,89,5,23,9,56]
console.log(merge(arr));


function merge(arr1) {
    if (arr1.length<=1) {
        return arr1
        
    }
    let middle=Math.floor(arr1.length -1)
    let left=arr1.slice(0,middle)
    let right=arr1.slice(middle)
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
    return[...empty,...left,...right]
    
}
let arr1=[1,4,78,2,67,3]
console.log(merge(arr1));
    


























































































































































































    



