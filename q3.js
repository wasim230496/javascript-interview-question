// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function reversingTheString(str){
    let reversedString = str.split("").reverse().join("");
    reversedString = str.concat(reversedString)
    return reversedString;
}
let newStr = reversingTheString("Hello");
console.log(newStr)