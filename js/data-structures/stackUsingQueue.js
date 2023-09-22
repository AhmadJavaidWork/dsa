class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(value) {
    this.q2.push(value);

    while (this.q1.length !== 0) {
      this.q2.push(this.q1.shift());
    }

    const q = this.q1;
    this.q1 = this.q2;
    this.q2 = q;
  }

  pop() {
    if (this.q1.length === 0) return;
    return this.q1.shift();
  }

  peek() {
    if (this.q1.length === 0) return;
    return this.q1[0];
  }

  print() {
    if (this.q1.length === 0) {
      console.log([]);
      return;
    }
    let curr = this.q1[0];
    let stack = `${curr}`;
    let counter = 1;
    while (counter < this.q1.length) {
      curr = this.q1[counter];
      stack = `${stack} -> ${curr}`;
      counter++;
    }
    console.log(`[${stack}]`);
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
