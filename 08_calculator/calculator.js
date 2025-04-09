const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	return numArray.reduce((total, currentNum) => total + currentNum, 0,);
};

const multiply = function(numArray) {
  return numArray.reduce((tot, current) => tot * current, 1)
};

const power = function(a, b) {
  let power = 0;
  let partial = a;
	for (let i = 1; i < b; i++) {
    power = partial * a;
    partial = power;
  }
  return power;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
