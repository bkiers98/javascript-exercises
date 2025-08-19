const palindromes = function (str) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let cleanedStr = str
        .toLowerCase()
        .split('')
        .filter(letter => chars.includes(letter))
        .join('');

    let cleanedReverseStr = cleanedStr
        .split('')
        .reverse()
        .join('');

    return cleanedStr === cleanedReverseStr;
};

// Do not edit below this line
module.exports = palindromes;
