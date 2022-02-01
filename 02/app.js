const randomArray = createRandomArray();
console.log(randomArray)


const showArray = iteration(randomArray)
                            
function iteration(ran) {   
  for(let i=0; i < ran.length; i++) {
  return ran[0]
  }
}

console.log('Show array is', showArray)

const lastNumber = lastIndex(randomArray)


function lastIndex(arr) {
  const lastArray = arr.length - 1
  return randomArray[lastArray]
   };


console.log('Last Number is', lastNumber)

// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10)
    for(let i=0; i<len; i++) {
        arr.push( getRandomInteger(1, 100) );
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


