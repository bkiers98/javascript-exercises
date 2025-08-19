const fibonacci = function(place) {
    if(place < 0) {
        return "OOPS";
    }else if(place == 0) {
        return 0;
    }else {
        const sequence = [0, 1];
        for(let i = 2; i <= place; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        return sequence[place];
    }
};

// Do not edit below this line
module.exports = fibonacci;
