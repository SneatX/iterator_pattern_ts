export abstract class Iterator<T> {
    abstract next(): T | null;
    abstract hasMore(): boolean;
}
