const fibonacci = function(index) {
    index = parseInt(index);
    let index0 = 0;
    let index1 = 1;
    let index2 = 1;
    if (index === 0) {
        return index0;
    } else if (index === 2) {
        return index2;
    } else if (index === 2) {
        return index2;
    } else if (index < 0) {
        return "OOPS";
    } else {
        for (let i = 3; i <= index; i++) {
            const result = index1 + index2;
            index1 = index2;
            index2 = result;
        }
        return index2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
