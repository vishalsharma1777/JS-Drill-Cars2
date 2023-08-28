const problem1 = (inventory, id) => {
    for(let i =0;i<inventory.length;i++){
        if(inventory[i].id == id){
            const car = inventory[i];
            const result = `Car of id ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}.`;
            return result;
        }
    }
}

module.exports = problem1;