// Buscador de nombres
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, element) {
  if (nameList.includes(element) == true) {
    return element + ' es ' + true + ' y su posicion es ' + nameList.indexOf(element);
  } else {
    return false
  }
}

nameFinder(names, 'Jessica');
console.log(nameFinder(names, 'Jessica'));

