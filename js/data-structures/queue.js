class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node.value;
  }

  dequeue() {
    if (this.length === 0) return;
    const node = this.head;
    this.head = node.next;
    node.next = null;
    return node.value;
  }

  peek() {
    return this.head?.value;
  }

  print() {
    if (this.length === 0) {
      console.log([]);
      return;
    }
    let curr = this.head;
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
