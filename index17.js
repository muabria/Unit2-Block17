const coffeeMenu = require("./coffee_data");

// 2. Print an array of all the drinks on the menu //

const drinkList = coffeeMenu.map(coffeeMenu =>  
    {return [coffeeMenu.name, coffeeMenu.price]});

console.table(drinkList);



// 3. Print an array of drinks that cost 5 and under.

const drinkCost = coffeeMenu.filter(coffeeMenu => coffeeMenu.price <= 5);


console.table(drinkCost);


// 4. Print an array of drinks that are priced at an even number.
const drinkEven = coffeeMenu.filter(coffeeMenu => coffeeMenu.price % 2 === 0);

console.log(drinkEven);
console.table(drinkEven);

// 5. Print the total if you were to order one of every drink. //

// 6. Print an array with all the drinks that are seasonal. //

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans" //