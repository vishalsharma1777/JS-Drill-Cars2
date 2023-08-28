const advanceProblem1 = (inventory) => {
    const car = inventory.filter((car)=> car.id == 33);
    const result = `Car 33 is a ${car[0].car_year} ${car[0].car_make} ${car[0].car_model}`;
    return result;
}


module.exports = advanceProblem1;