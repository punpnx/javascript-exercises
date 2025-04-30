const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanStr.split('').reverse().join('');

    if (reversedStr === cleanStr) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
