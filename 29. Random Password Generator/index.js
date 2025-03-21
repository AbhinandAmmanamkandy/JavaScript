function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowercase ? lowerChars : "";
    allowedChars += includeUppercase ? upperChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `Password length must be atleast one`;
    }
    if(allowedChars.length === 0){
        return `Atleast one set of characters needs to be selected`;
    }

    for (let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                    includeLowercase, 
                                    includeUppercase, 
                                    includeNumbers, 
                                    includeSymbols);
console.log(`Generated password: ${password}`);