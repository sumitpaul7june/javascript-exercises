const sumAll = function(a, b) {

    if(a < 0 || b < 0) return "ERROR";
    
    let max = a > b ? a : b;
    let min = a < b ? a : b;

    if(min === Math.floor(min) && max === Math.floor(max))
    {
        let sum = 0;
        for(let i = min; i <= max; i++)
        {
            sum += i;
        }

        return sum;
    }
    else
    {
        return "ERROR";
    }
    

};

// Do not edit below this line
module.exports = sumAll;
