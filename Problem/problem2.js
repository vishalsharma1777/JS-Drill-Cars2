const inWords = require('./inWords');
const problem2 = (inventory, index) => {

    index = String(index).toLowerCase();
    let result = '';
    let car = '';
    let words = '';

    if (index > inventory.length || 0 > index) {
        return "Number Out Of Bond";
    }
    
    let isValidIndex = false;
    for (let i = 0; i < inWords.length; i++) {
        if (index == inWords[i]) {
            isValidIndex = true;
            car = inventory[i];
            words = index.toUpperCase();
            break;
        }
        else if (index == i) {
            isValidIndex = true
            car = inventory[index - 1];
            words = (inWords[index - 1]);
            words = String(words).toUpperCase();
            break;
        }
    }

    if (!isValidIndex && index != 'last') {
        return "Invalid index argument";
    }


    if (index == 'last') {
        car = inventory[inventory.length - 1];
        result = `LAST car is a ${car.car_make} ${car.car_model}.`
        return result;
    }
    else if (index == 'first') {
        car = inventory[0];
        result = `FIRST car is a ${car.car_make} ${car.car_model}.`
        return result;
    }
    else {
        result = `${words} car is a ${car.car_make} ${car.car_model}.`
        return result;
    }
}
module.exports = problem2;