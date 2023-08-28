const Problem6 = (inventory) => {
    const BMWAndAudi = [];

    inventory.forEach((car) => {
        if (car.car_make === 'BMW' || car.car_make === 'Audi') {
            BMWAndAudi.push(car);
        }
    });

    const answer = JSON.stringify(BMWAndAudi);
    return answer;
}
module.exports = Problem6;
