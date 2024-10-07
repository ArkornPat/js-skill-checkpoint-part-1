// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
    if(userPassword.length < 6){
        return "Weak"
    }else if(userPassword.length > 10){
        return "Strong"
    }else if(userPassword.length >= 6 && userPassword.length <= 10){
        return "Medium"
    }
}

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword))
userPassword = "Tabcde"
console.log(checkPasswordStrength(userPassword))
userPassword = "abcde"
console.log(checkPasswordStrength(userPassword))
