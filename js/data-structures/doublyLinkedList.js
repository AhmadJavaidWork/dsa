class Node {
  constructor(value) {
    this.value = value;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return node.value;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return node.value;
  }

  insertAt(index, value) {
    if (index < 0) return;
    if (index > this.length) return;
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);

    const node = new Node(value);
    const parent = this._traverseToIndex(index - 1);
    node.next = parent.next;
    node.next.prev = node;
    node.prev = parent;
    parent.next = node;
    this.length++;
    return node.value;
  }

  getAt(index) {
    if (index < 0) return;
    if (index > this.length - 1) return;
    const node = this._traverseToIndex(index);
    return node.value;
  }

  pop() {
    if (this.length === 0) return;
    const node = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = node.prev;
    }
    node.next = node.prev = null;
    this.tail.next = null;
    this.length--;
    return node.value;
  }

  removeAt(index) {
    if (index < 0) return;
    if (index > this.length - 1) return;
    let node = null;
    if (index === 0) {
      node = this.head;
    } else {
      node = this._traverseToIndex(index);
    }
    if (node.next && node.prev) {
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }
    if (!node.next) {
      this.tail = node.prev;
    }
    if (!node.prev) {
      this.head = node.next;
    }
    node.next = node.prev = null;
    this.length--;
    return node.value;
  }

  reverse() {
    if (this.length < 2) return;
    let curr = this.head;
    let prev = null;
    let next = curr.next;
    while (next) {
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
      next = next.next;
      if (!next) {
        this.tail = this.head;
        this.head = curr;
        curr.prev = null;
        curr.next = prev;
      }
    }
  }

  print() {
    if (this.length === 0) {
      console.log([]);
      return;
    }
    let curr = this.head;
    let list = `${curr.value}`;
    while (curr.next) {
      curr = curr.next;
      list = `${list} <=> ${curr.value}`;
    }
    console.log(`[${list}]`);
  }

  _traverseToIndex(index) {
    if (index < 0) return;
    if (index > this.length - 1) return;
    if (index === this.length - 1) return this.tail;
    let curr = this.head;
    let counter = 0;
    while (counter < index) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }
}

const list = new DoublyLinkedList();

list.append(10);
list.append(12);
list.append(13);
list.append(14);
list.append(15);
list.prepend(9);
list.insertAt(2, 11);
list.pop();
list.insertAt(6, 15);
console.log(list.getAt(6));
list.reverse();
list.print();
