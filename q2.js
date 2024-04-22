// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them

let doubleNumb=[];
let duplicate = []
function doubleTheNumberEceptConsecutive(arr){
    for (let i=0;i<arr.length;i++) {
        if(arr[i]===arr[i+1]){
            duplicate.push(arr[i] * 2);
            i++;
        }else{
            
            duplicate.push(arr[i] * 2)
        }
        
        
        
        
    }
    return duplicate;
}

let array = [3,3,2,4,4,5,6,6,6,7,8,8];
let doublearray = doubleTheNumberEceptConsecutive(array);
console.log("the new array after the doubling of only consecutive is ", doublearray)
