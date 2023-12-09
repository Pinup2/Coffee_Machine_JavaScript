// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let supplies = {
    water: 400, // Example initial quantity
    milk: 540, // Example initial quantity
    coffeeBeans: 120, // Example initial quantity
    disposableCups: 9, // Example initial quantity
    money: 550 // Example initial quantity
};

let coffee =[
    {
        water: 250,
        coffeeBeans: 16,
        disposableCups: 1,
        money: -4
    },
    {
        water: 350,
        milk: 75,
        coffeeBeans: 20,
        disposableCups: 1,
        money: -7
    },
    {
        water: 200,
        milk: 100,
        coffeeBeans: 12,
        disposableCups: 1,
        money: -6
    }

];
function state (){
    return (`The coffee machine has:\n ${supplies.water} ml of water\n ${supplies.milk} ml of milk\n ${supplies.coffeeBeans} g of coffee beans\n ${supplies.disposableCups} disposable cups\n $${supplies.money} of money`);
}
let option;
while(option !=='exit'){
    option = input('Write action (buy, fill, take, remaining, exit)');
    switch (option) {
        case 'buy':
            // console.log(state());
            let choice = parseInt(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino , 4 - back "));
            console.log(choice);
            if (choice === 4){
                continue;
            }else if (choice >= 1 && choice <= 3) {
                let selectedCoffee = coffee[choice - 1];

                // Check if there are enough resources for the selected coffee
                if (supplies.water < selectedCoffee.water) {
                    console.log("Sorry, not enough water!");
                } else if (selectedCoffee.milk && supplies.milk < selectedCoffee.milk) {
                    console.log("Sorry, not enough milk!");
                } else if (supplies.coffeeBeans < selectedCoffee.coffeeBeans) {
                    console.log("Sorry, not enough coffee beans!");
                } else if (supplies.disposableCups < selectedCoffee.disposableCups) {
                    console.log("Sorry, not enough disposable cups!");
                } else {
                    // All resources are sufficient, make the coffee
                    supplies.water -= selectedCoffee.water;
                    supplies.milk -= selectedCoffee.milk || 0; // If milk is undefined, subtract 0
                    supplies.coffeeBeans -= selectedCoffee.coffeeBeans;
                    supplies.disposableCups -= selectedCoffee.disposableCups;
                    supplies.money -= selectedCoffee.money;
                    console.log("I have enough resources, making you a coffee!");
                }
            } else {
                console.log("Invalid selection. Please choose a valid option.");
            }

            // console.log(state());
            break;


        case "fill":
            // console.log(state());
            let waterAdd=parseInt(input('How many ml of water you want to add:'));
            supplies.water +=waterAdd;
            let milkAdd=parseInt(input('Write how many ml of milk you want to add:'));
            supplies.milk +=milkAdd;
            let coffeeAdd=parseInt(input('Write how many grams of coffee beans you want to add:'));
            supplies.coffeeBeans +=coffeeAdd;
            let dispCups=parseInt(input('Write how many disposable cups you want to add:'));
            supplies.disposableCups +=dispCups;
            // console.log(state());
            break;
        case "take":
            // console.log(state());
            console.log(`I gave you $${supplies.money}`);
            supplies.money=0;
            // console.log(state());
            break;
        case "remaining":
            console.log(state());
            break;


    }
}



