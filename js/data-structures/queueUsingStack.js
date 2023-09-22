const Stack = require("./stack");

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    while (this.s1.length !== 0) {
      this.s2.push(this.s1.pop());
    }

    this.s2.push(value);

    while (this.s2.length !== 0) {
      this.s1.push(this.s2.pop());
    }
  }

  dequeue() {
    if (this.s1.length === 0) return;
    return this.s1.pop();
  }

  peek() {
    return this.s1.peek();
  }

  print() {
    if (this.length === 0) {
      console.log([]);
      return;
    }
    let curr = this.s1.head;
    let queue = `${curr.value}`;
    while (curr.next) {
      curr = curr.next;
      queue = `${queue} -> ${curr.value}`;
    }
    console.log(`[${queue}]`);
  }
}

const queue = new Queue();

queue.enqueue(19);
queue.enqueue(18);
queue.enqueue(17);
queue.enqueue(16);
queue.enqueue(15);
queue.enqueue(14);
queue.enqueue(13);
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
