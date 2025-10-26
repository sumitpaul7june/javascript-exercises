const palindromes = function (string) {


    let lowerCaseString = string.toLowerCase();

    let lowerCaseStringWithAlphabetsAndDigitsOnly = '';

    for (let i = 0; i < lowerCaseString.length; i++) {
        if ((lowerCaseString[i] >= 'a' && lowerCaseString[i] <= 'z') || (lowerCaseString[i] >= '0' && lowerCaseString[i] <= '9')) {
            lowerCaseStringWithAlphabetsAndDigitsOnly += lowerCaseString[i];
        }
    }

    console.log(lowerCaseStringWithAlphabetsAndDigitsOnly);
    
    let i = 0, j = lowerCaseStringWithAlphabetsAndDigitsOnly.length - 1;

    while (i < j) {
        if (lowerCaseStringWithAlphabetsAndDigitsOnly[i] !== lowerCaseStringWithAlphabetsAndDigitsOnly[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;




};




// Do not edit below this line
module.exports = palindromes;
