const convertToCelsius = function(fahrenheitDegrees) {
  let celsiusDegrees = (fahrenheitDegrees - 32) * 5/9;
  celsiusDegrees = Math.round(celsiusDegrees * 10) / 10;
  return celsiusDegrees;
};

const convertToFahrenheit = function(celsiusDegrees) {
  let fahrenheitDegrees = celsiusDegrees * 9/5 + 32;
  fahrenheitDegrees = Math.round(fahrenheitDegrees * 10) / 10;
  return fahrenheitDegrees;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
