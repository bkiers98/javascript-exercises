const sumAll = function(a, b) {
    let sum = 0;

    if(Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
        if(a < b) {
            for(let i = a; i <= b; i++) {
                sum += i;
            }
        }else {
            for(let i = a; i >= b; i--) {
                sum += i;
            }
        }
    }else {
        return("ERROR");
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
