const years = [1980, 1934, 2002, 2019];

const reducedYears = years.map(reduceYears);

function reduceYears(element) {
  return 2021 - element;
}

console.log(reducedYears)
