const convertToCelsius = function(f) {
  if (typeof f !== 'number') {
    return "ERROR"
  } else {
    return Math.round((f - 32) * (5 / 9) * 10) / 10
  }
};

const convertToFahrenheit = function(c) {
  if (typeof c !== 'number') {
    return "ERROR"
  } else {
    return Math.round((c * (9 / 5) + 32) * 10 ) / 10
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
