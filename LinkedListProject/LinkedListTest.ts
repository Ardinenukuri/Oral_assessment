import LinkedList from './LinkedList';

const list = new LinkedList<number>();

console.log('Adding elements...');
list.add(11);
list.add(22);
list.add(33);
list.print();

console.log('Finding element 22...');
const foundNode = list.find(22);
if (foundNode) {
  console.log('Found:', foundNode.data);
} else {
  console.log('Element not found.');
}

console.log('Removing element 22...');
const isRemoved = list.remove(22);
console.log('Removed:', isRemoved);
list.print();

console.log('Removing element 100 (non-existent)...');
const isRemovedAgain = list.remove(100);
console.log('Removed:', isRemovedAgain);
list.print();
