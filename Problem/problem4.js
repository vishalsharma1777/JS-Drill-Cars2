const problem4 = (inventory,property) => {

    // BEST WAY USING SET
    // const years = new Set();
    // for(let i =0;i<inventory.length;i++){
    //     years.add(inventory[i].car_year);
    // }
    // return years;

    // const allYears = [];
    // for(let i =0;i<inventory.length;i++){
    //     allYears.push(inventory[i].car_year);
    // }
    // allYears.sort();
    // const years = [];
    // for(let i =0;i<allYears.length;i++){
    //     if(allYears[i] != allYears[i+1]){
    //         years.push(allYears[i]);
    //     }
    // }
    // return years;

    const prop = [];
    for (let i = 0; i < inventory.length; i++) {
        prop.push(inventory[i][property]);
    }
    const selectedProp = [];
    for (let i = 0; i < prop.length; i++) {
        let repeat = false;
        for (let j = 0; j < selectedProp.length; j++) {
            if (selectedProp[j] == prop[i]) {
                repeat = true;
                break;
            }
        }
        
        if (!repeat) {
            selectedProp.push(prop[i]);
        }
    }
    selectedProp.sort()

    return selectedProp;
}

module.exports = problem4;

