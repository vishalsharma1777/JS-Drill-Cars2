const Problem2 = (inventory) => {
    const car = inventory.filter((car)=> car.id == (inventory.length));
    const result = `Last car is a ${car[0].car_make} ${car[0].car_model}`;
    return result;
}

module.exports = Problem2;