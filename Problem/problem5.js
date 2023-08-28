const problem4 = require('./problem4');

const problem5 = (inventory,criteria,prop) => {
    const criteriaCars = problem4(inventory,criteria);
    const  propCars=[];
    for (let i = 0; i < criteriaCars.length; i++) {
        if (criteriaCars[i] < prop) {
            propCars.push(criteriaCars[i]);
        }
    }
    const selectedCars =[];
    for(let i =0;i<inventory.length;i++){
        for(let j=0;j<criteriaCars.length;j++){
            if(inventory[i][criteria]==propCars[j]){
                selectedCars.push(inventory[i]);
            }
        }
    }
    const answer = {
        "Count of the cars made before the given criteria is ": selectedCars.length,
        "The above mentioned cars are ": selectedCars
        
    };
    return answer;
}

module.exports = problem5;