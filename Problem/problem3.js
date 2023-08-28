const problem3 = (inventory,sortedBy) => {
    
    const sortedInventory = inventory.sort(
        (a, b) => a[sortedBy].localeCompare(b[sortedBy]))

    return sortedInventory;
}

module.exports = problem3;

