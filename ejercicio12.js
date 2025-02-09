// Devolver un array sin duplicados
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  let newList = list.filter((valor, i) => {
    return list.indexOf(valor) === i;
  })
  return newList
}

removeDuplicates(duplicates);

console.log(removeDuplicates(duplicates));

//for (let i= 0; i > list.length; i++) { }

