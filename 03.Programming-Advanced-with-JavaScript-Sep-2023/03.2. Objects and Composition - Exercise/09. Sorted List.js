function createSortedList() {
  return {
    arr: [],
    //adds a new element to the collection
    add(element) {
      this.arr.push(element);
      this.arr.sort((a, b) => a - b);
    },
    //removes the element at position index
    remove(index) {
      if (index >= 0 && index < this.arr.length) {
        this.arr.splice(index, 1);
      }
    },
    //returns the value of the element at position index
    get(index) {
      if (index >= 0 && index < this.arr.length) {
        return this.arr[index];
      } 
    },
    //number of elements stored in the collection
    get size() {
      return this.arr.length;
    },
  };
  
}
let list = createSortedList();

list.add(5);
list.add(6);
list.add(7); 

console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));