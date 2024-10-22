import { ConcreteCollection } from './ConcreteCollection.js';

const collection = new ConcreteCollection<string>();

collection.addItem('Elemento 1');
collection.addItem('Elemento 2');
collection.addItem('Elemento 3');
collection.addItem('Elemento 4');

const iterator = collection.createIterator();

console.log('Recorriendo la colección:');
while (iterator.hasMore()) {
  console.log(iterator.next());
}
