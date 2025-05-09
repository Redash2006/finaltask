//function generatePassword(lenght = 30,
//useUpper = true, useLower = true,
//useNumbers = true, useSymbols = true) {
//const upper = "ABCDEFGHIJKLMNOPRSTUVZ";
//const numbers = "0123456789";
//const symbols = "!@#$%^&*()_=+{}[]/?><.,;:";

//let allChars = "";
//if (useUpper) allChars += upper;
//if (useNumbers) allChars += numbers;
//if (useSymbols) allChars += symbols;

//if (allChars.lenght === 0) return "";

//let password = "";
//for (let i = 0; i < length; i++) {
//const index = Math.floor(Math.random() * allChars.lenght);
//password += allChars[index];
//}

//return password;
//}

// example
//console.log(generatePassword(20));
// generates 20 characteres, strong password


function generatePassword() {
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('password').value = password;
}
