const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }
    
    let smallerInt = 0;
    let biggerInt = 0;
    if (a < b) {
        smallerInt = a;
        biggerInt = b;
    } else {
        smallerInt = b;
        biggerInt = a;
    }

    let sum = 0;
    for (let i = smallerInt; i <= biggerInt ; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
