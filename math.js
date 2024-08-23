// const sum = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(sum('-10', -10));

const multiply = (num1, num2) => {
  const num2ToNum = Number(num2);

  if(num2ToNum === NaN) return 0;

  return num1 * num2;
}

module.exports = {
  multiply
}