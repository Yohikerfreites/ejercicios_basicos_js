// Calcular la suma
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0
  for (const number of numberList) {
    suma += number;
  }
  return suma
}

console.log(sumNumbers(numbers));
