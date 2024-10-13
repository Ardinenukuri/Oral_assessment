"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var list = new LinkedList_1.default();
console.log('Adding elements...');
list.add(11);
list.add(22);
list.add(33);
list.print();
console.log('Finding element 22...');
var foundNode = list.find(22);
if (foundNode) {
    console.log('Found:', foundNode.data);
}
else {
    console.log('Element not found.');
}
console.log('Removing element 22...');
var isRemoved = list.remove(22);
console.log('Removed:', isRemoved);
list.print();
console.log('Removing element 100 (non-existent)...');
var isRemovedAgain = list.remove(100);
console.log('Removed:', isRemovedAgain);
list.print();
