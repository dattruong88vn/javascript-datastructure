//value 1

// value1 - next1 --> value2 - next2 --> value3 - next3 --> value4 - null
// null
// value1 - null --> prev null -> this.head = curr.next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);

    if (!this.isEmpty()) node.next = this.head;
    this.head = node;
    this.size += 1;
  }

  // O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size += 1;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) return this.prepend(value);

    const node = new Node(value);
    let prev = this.head;

    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    node.next = prev.next;
    prev.next = node;

    this.size += 1;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removeNode;

    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removeNode = prev.next;
      if (removeNode) prev.next = removeNode.next;
    }

    this.size -= 1;

    return removeNode.value;
  }

  removeByValue(value) {
    if (this.size === 0) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let prev = this.head;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }

    if (prev.next) {
      const removeNode = prev.next;
      prev.next = removeNode.next;
      this.size--;
      return value;
    }

    return null;
  }

  search(value) {
    let i = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value === value) return i;
      curr = curr.next;
      i++;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let str = "";
      let curr = this.head;

      while (curr) {
        str += curr.value + " ";
        curr = curr.next;
      }
      console.log(str);
    }
  }
}

const list = new LinkedList();
console.log("search", list.search(108));
list.print();

console.log("isEmpty", list.isEmpty());
console.log("getSize", list.getSize());

list.insert(108, 0);
list.print();

console.log("removeByValue", list.removeByValue(108));
list.print();

list.prepend(10);
list.print();

list.prepend(20);
list.prepend(30);
list.print();

list.append(99);
list.append(700);
list.print();

list.insert(9, 2);
list.print();

// console.log("remove", list.remove(4));
// list.print();
// console.log("remove", list.remove(5));
// list.print();
// console.log("remove", list.remove(0));
// list.print();

// console.log("removeByValue", list.removeByValue(108));
// list.print();
// console.log("removeByValue", list.removeByValue(30));
// list.print();

// console.log("search", list.search(108));
// list.print();
// console.log("search", list.search(30));
// list.print();
// console.log("search", list.search(99));
// list.print();

list.reverse();
list.print();
