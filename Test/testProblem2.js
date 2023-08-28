const inventory = require('../Problem/inventory');
const problem2 = require('../Problem/problem2');

const index = problem2(inventory,23);
const words = problem2(inventory,'thiRtieth')
const starting = problem2(inventory,'First');
const ending = problem2(inventory,'last');
const outOfBond1 = problem2(inventory,'huder')
const outOfBond2 = problem2(inventory,-78);
const outOfBond3 = problem2(inventory,178);



console.log(index);
console.log(words);
console.log(starting);
console.log(ending);
console.log(outOfBond1);
console.log(outOfBond2);
console.log(outOfBond3);