import { Iterator } from './Iterator.js';

export abstract class IterableCollection<T> {
    
    abstract createIterator(): Iterator<T>;
}
