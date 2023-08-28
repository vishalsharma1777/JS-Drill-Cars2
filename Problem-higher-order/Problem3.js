const Problem3 = (inventory) => {
    const sortedInventory = inventory.sort(
        (a, b) => a.car_model.localeCompare(b.car_model));

    return sortedInventory;
}

module.exports = Problem3;

