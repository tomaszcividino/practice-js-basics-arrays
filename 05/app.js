const numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

const evenArray = numbers.filter(evenNumbers)
console.log(evenArray)

evenArray.forEach(sumNumbers)

function sumNumbers(element) {
  sum = sum + element
}

console.log(sum)


function evenNumbers(element) {
  if (element % 2 == 0) {
    return element
  }
}

