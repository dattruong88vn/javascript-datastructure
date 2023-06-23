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
console.log("isEmpty", list.isEmpty());
console.log("getSize", list.getSize());

list.insert(108, 0);
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

console.log("remove", list.remove(4));
list.print();
console.log("remove", list.remove(5));
list.print();
console.log("remove", list.remove(0));
list.print();
