// Contador de repeticiones
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  const repeatList = []
  list.forEach((element) => {
    repeatList[element] = repeatList[element] + 1 || 1
  });
  return repeatList
}
console.log(repeatCounter(words));


// Segunda forma de resolver con bucle for

/* function repeatCounter(list) {
 const repeatList = [];
 for (let i = 0; i < list.length; i++) {
   repeatList[list[i]] = ((repeatList[list[i]] + 1) || 1)
 }
 return repeatList
}
console.log(repeatCounter(words)); */

