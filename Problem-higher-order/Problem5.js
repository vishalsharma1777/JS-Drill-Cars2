const inventory = require('./inventory')
const Problem4 = require('./Problem4');

const Problem5 = (inventory) => {
    const carYears = Problem4(inventory);

    const olderCars = inventory.filter((car) => carYears.includes(car.car_year) && car.car_year < 2000);

    const answer ={[olderCars.length]:olderCars}

    return answer;
}


module.exports = Problem5;

