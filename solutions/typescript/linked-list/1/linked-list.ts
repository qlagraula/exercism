export class LinkedList<TElement> {
  #list: TElement[] = [];

  public push(element: TElement) {
    this.#list.push(element);
  }

  public pop(): TElement {
    const element = this.#list.pop();
    if (element === undefined) {
      throw new Error("Can't pop from an empty list");
    }
    return element;
  }

  public shift(): TElement {
    const element = this.#list.shift();
    if (element === undefined) {
      throw new Error("Can't shift from an empty list");
    }
    return element;
  }

  public unshift(element: TElement) {
    this.#list.unshift(element);
  }

  public delete(element: TElement) {
    const index = this.#list.indexOf(element);
    if (index !== -1) {
      this.#list.splice(index, 1);
    }
  }

  public count(): number {
    return this.#list.length;
  }
}
