class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

console.log("isEmpty", stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log("size", stack.size());
stack.print();

console.log("peek", stack.peek());
console.log("pop", stack.pop());
console.log("peek", stack.peek());
