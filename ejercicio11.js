// Calcular promedio mezclado
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  let sumaNumber = 0
  let sumaString = 0
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    if (typeof word == 'number') {
      sumaNumber += word;
    } else {
      sumaString += word.length
    }
  }
  let sumaTotal = (sumaNumber + sumaString)
  const mensaje = "La suma de " + sumaNumber + " y " + sumaString + " es: " + (sumaTotal)
  return (mensaje)
}


console.log(averageWord(mixedElements));

