// Devolver el string más largo de la lista de array
const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
  let longestWord = "";
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }

  }
  return longestWord
}


findLongestWord(avengers)

console.log(findLongestWord(avengers));





