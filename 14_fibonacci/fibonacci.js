const fibonacci = function(num) {

    num = parseInt(num)
    if(num < 0) return 'OOPS';
    if(num === 0) return 0;
    let prev = 1, next = 1;

    if(num === 1  || num === 2) return prev;
    let value = 0;
    for(let i = 2; i < num; i++) 
    {
        value = prev + next;
        prev = next;
        next = value;
    }
    return value;

};

// Do not edit below this line
module.exports = fibonacci;
