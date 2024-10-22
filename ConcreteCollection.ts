// ConcreteCollection.ts
import { IterableCollection } from './IterableCollection.js';
import { ConcreteIterator } from './ConcreteIterator.js';
import { Iterator } from './Iterator.js';

// Clase concreta que implementa una colección iterable
export class ConcreteCollection<T> extends IterableCollection<T> {
  private items: T[] = [];

  // Agregar un elemento a la colección
  addItem(item: T): void {
    this.items.push(item);
  }

  // Obtener todos los elementos de la colección
  getItems(): T[] {
    return this.items;
  }

  // Crear un iterador para esta colección
  createIterator(): Iterator<T> {
    return new ConcreteIterator<T>(this);
  }
}
