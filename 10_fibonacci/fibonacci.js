const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS";
    }

    const fibonacci = [0, 1];

    for (let i = 2; i < position + 1; i ++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci[position];
};

// Do not edit below this line
module.exports = fibonacci;
