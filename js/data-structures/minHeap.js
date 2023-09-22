class MinHeap {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  enqueue(value) {
    this.data[this.length] = value;
    this._heapifyUp(this.length);
    this.length++;
  }
  dequeue() {
    if (this.length === 0) return;
    const out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }
    this.data[0] = this.data[this.length];
    this._heapifyDown(0);
    this.data.pop();
    return out;
  }
  _heapifyDown(index) {
    if (index >= this.length) return;

    const leftIndex = this._leftChild(index);
    const rightIndex = this._rightChild(index);

    if (leftIndex >= this.length) return;

    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];
    const value = this.data[index];

    if (leftValue < rightValue && leftValue < value) {
      this.data[leftIndex] = value;
      this.data[index] = leftValue;
      this._heapifyDown(leftIndex);
    } else if (rightValue < leftValue && rightValue < value) {
      this.data[rightIndex] = value;
      this.data[index] = rightValue;
      this._heapifyDown(rightIndex);
    }
  }
  _heapifyUp(index) {
    if (index <= 0) return;

    const parentIndex = this._parent(index);
    const parentValue = this.data[parentIndex];
    const value = this.data[index];

    if (value < parentValue) {
      this.data[parentIndex] = value;
      this.data[index] = parentValue;
      this._heapifyUp(parentIndex);
    }
  }
  _parent(index) {
    return Math.floor((index - 1) / 2);
  }
  _rightChild(index) {
    return index * 2 + 2;
  }
  _leftChild(index) {
    return index * 2 + 1;
  }
}

const heap = new MinHeap();
heap.enqueue(1);
heap.enqueue(12);
heap.enqueue(13);
heap.enqueue(14);
heap.enqueue(15);
heap.enqueue(2);
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.data);
