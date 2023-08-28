const problem6 = (inventory, prop, arrayToCompare) => {
    const selected = [];
    for (let i = 0; i < inventory.length; i++) {
        for (let j = 0; j < arrayToCompare.length; j++) {
            if (inventory[i][prop] === arrayToCompare[j]) {
                selected.push(inventory[i]);
            }
        }
    }
    const selectedStringified = JSON.stringify(selected)
    return selectedStringified;
}

module.exports = problem6;


