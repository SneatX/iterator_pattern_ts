import { Iterator } from './Iterator.js';
import { ConcreteCollection } from './ConcreteCollection.js';

export class ConcreteIterator<T> extends Iterator<T> {
  private collection: ConcreteCollection<T>;
  private position: number = 0;

  constructor(collection: ConcreteCollection<T>) {
    super();
    this.collection = collection;
  }

  // Devuelve el siguiente elemento si existe
  next(): T | null {
    if (this.hasMore()) {
      return this.collection.getItems()[this.position++];
    }
    return null;
  }

  // Verifica si hay más elementos por recorrer
  hasMore(): boolean {
    return this.position < this.collection.getItems().length;
  }
}
