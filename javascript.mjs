// const adventurer = {
// name: "Robin",
// health: 10,
// inventory: ["sword", "potion", "artifact"],
// companion: {
//     name: "Leo",
//     type: "Cat"
// }
// }

// From the adventurer object, we can access Robin’s inventory using a combination 



// console.log(adventurer.name);
// console.log(adventurer.inventory);
// console.log(adventurer.inventory[0]);


// create a loop that logs each item in Robin’s inventory.

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"]
    }

    }


}

for (let item of adventurer.inventory) {
  console.log(item);
}


// console.log(adventurer.companion.name);

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"]
    }
  }	
}


console.log (adventurer.companion.companion.name);
console.log(adventurer.companion.companion.belongings[1]);






