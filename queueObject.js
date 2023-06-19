class QueueObject {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;

    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queueObj = new QueueObject();

console.log("isEmpty", queueObj.isEmpty());

queueObj.enqueue(10);
queueObj.enqueue(20);
queueObj.enqueue(30);

console.log("size", queueObj.size());
queueObj.print();

console.log("dequeue", queueObj.dequeue());

console.log("peek", queueObj.peek());
