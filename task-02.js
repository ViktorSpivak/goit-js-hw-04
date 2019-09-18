"use strict";
const inventory = {
  items: ["Монорельса", "Фильтр"]
};
function add(itemName) {
  this.items.push(itemName);
}
function remove(itemName) {
  this.items = this.items.filter(item => item !== itemName);
}

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction.call(inventory, itemName);
};

invokeInventoryOperation("Аптечка", add);
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryOperation("Фильтр", remove);
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
// console.dir(inventory);
