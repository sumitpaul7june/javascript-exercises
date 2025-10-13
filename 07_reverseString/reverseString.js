const reverseString = function(str) {

    let reversedStr = "";
    for(let i = str.length - 1; i >= 0; i--)
    {
        reversedStr = reversedStr + str.charAt(i);
    }
    return reversedStr;

};



// Do not edit below this line
module.exports = reverseString;
