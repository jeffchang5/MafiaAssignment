'use strict';

const createDict = (numberOfPeople) => {
  let assignments = {};
  let numberOfMafia = Math.floor(Math.sqrt(numberOfPeople));
  assignments[0] = "Doctor"
  assignments[1] = "Police"
  for (let i = 2; i < numberOfMafia + 2; i++) { assignments[i] = 'Mafia'; }
  for (let i = 2 + numberOfMafia; i < numberOfPeople; i++) { assignments[i] = "Towns" }
  return assignments;
}

const shuffle = (array) =>  {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const pickMafia = (numberOfPeople) => {
  let range = [];
  for (let i = 0; i < numberOfPeople; i++) {
    range.push(i);
  }
  let roles = createDict(numberOfPeople);
  range = shuffle(range);
  return range.map(position => roles[position]);


};
export default pickMafia;
