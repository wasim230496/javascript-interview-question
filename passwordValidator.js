// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.  

function passwordcehcker(str){

    return /[a-z]/.test(str) && /[A-Z]/.test(str) && str.length>7 && /[0-9]/.test(str);
}
let newPassword = passwordcehcker("wasimE23g");

if(newPassword == true ){
console.log("your password is generated")}
else{
    console.log("follow the criteria")
}
