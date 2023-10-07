function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['CM', 900],
    2: ['D', 500],
    3: ['CD', 400],
    4: ['C', 100],
    5: ['XC', 90],
    6: ['L', 50],
    7: ['XL', 40],
    8: ['X', 10],
    9: ['IX', 9],
    10: ['V', 5],
    11: ['IV', 4],
    12: ['I', 1]
  };

  if (num < 1 || num > 100000) {
    return "Invalid input. Please enter a number between 1 and 100,000.";
  }

  let result = "";

  for (let key = 0; key <= 12; key++) {
    while (num >= obj[key][1]) {
      result += obj[key][0];
      num -= obj[key][1];
    }
  }

  return result;
}

console.log(convertToRoman(799)); // Output: "DCCXCIX"




// do not edit below this line
module.exports = convertToRoman
