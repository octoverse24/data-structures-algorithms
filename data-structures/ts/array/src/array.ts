export class MyArray<T> {
  private length: number;
  private element: T[];

  constructor() {
    this.length = 0;
    this.element = [];
  }

  push(item: T) {
    this.element[this.length] = item;
    this.length++;
  }

  get(index: number): T {
    return this.element[index];
  }

  pop(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    const lastItem = this.element[this.length - 1];
    this.length--;
    this.element.length = this.length;
    return lastItem;
  }

  toString(): string {
    return this.element.slice(0, this.length).toString();
  }
}
