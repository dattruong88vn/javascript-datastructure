class CircurlarQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;

      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;

    let item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const circularQueue = new CircurlarQueue(5);

console.log("empty", circularQueue.isEmpty());
circularQueue.enqueue(5);
circularQueue.enqueue(10);
circularQueue.enqueue(15);
circularQueue.enqueue(20);
circularQueue.enqueue(25);
console.log("full", circularQueue.isFull());
circularQueue.print();
console.log("dequeue", circularQueue.dequeue());
circularQueue.print();
console.log("peek", circularQueue.peek());
circularQueue.enqueue(5);
circularQueue.print();
