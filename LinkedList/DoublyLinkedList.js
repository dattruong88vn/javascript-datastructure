class DoublyNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const node = new DoublyNode(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new DoublyNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const removeValue = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;

    return removeValue;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;

    const removeValue = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;

    return removeValue;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.size === 0) {
      return console.log("List is empty");
    }

    let str = "";
    let curr = this.head;
    for (let i = 0; i < this.size; i++) {
      str += curr.value + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  printReserve() {
    if (this.size === 0) {
      return console.log("List is empty");
    }

    let str = "";
    let curr = this.tail;
    for (let i = 0; i < this.size; i++) {
      str += curr.value + " ";
      curr = curr.prev;
    }
    console.log(str);
  }
}

const list = new DoublyLinkedList();
console.log(list.isEmpty());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(40);

list.print();
list.printReserve();

console.log(list.removeFromFront());
list.print();
console.log(list.removeFromEnd());
list.print();
console.log(list.removeFromFront());
list.print();
console.log(list.removeFromFront());
list.print();
