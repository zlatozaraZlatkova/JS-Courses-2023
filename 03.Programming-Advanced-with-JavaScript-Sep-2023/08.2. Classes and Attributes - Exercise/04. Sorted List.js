class List {
  constructor() {
    this.collection = [];
    this.size = 0;
  }

  add(element) {
    this.collection.push(element);
    this.collection.sort((a, b) => a - b);
    this.size = this.collection.length;
  }

  remove(index) {
    if (index < 0 || index >= this.collection.length) {
      throw new Error("Invalid index!");
    }

    this.collection.splice(index, 1);
    return (this.size = this.collection.length);
  }

  get(index) {
    if (index < 0 || index >= this.collection.length) {
      throw new Error("Invalid index!");
    }
    return this.collection[index];
  }
}