class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return node.value;
  }

  pop() {
    if (this.length === 0) return;
    const node = this.head;
    this.head = node.next;
    node.next = null;
    this.length--;
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
    let stack = `${curr.value}`;
    while (curr.next) {
      curr = curr.next;
      stack = `${stack} -> ${curr.value}`;
    }
    console.log(stack);
  }
}

const stack = new Stack();
stack.push(19);
stack.push(18);
stack.push(17);
stack.push(16);
stack.push(15);
stack.push(14);
stack.push(13);
console.log(stack.pop());
console.log(stack.peek());
stack.print();
