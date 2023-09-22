class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertR(this.root, value);
  }
  remove(value) {
    this.root = this._removeR(this.root, value);
  }
  bfs(value) {
    return this._bfsR([this.root], value);
  }
  dfsPreOrder(value) {
    return this._dfsPreOrderR(this.root, value);
  }
  dfsInOrder(value) {
    return this._dfsInOrderR(this.root, value);
  }
  dfsPostOrder(value) {
    return this._dfsPostOrderR(this.root, value);
  }
  invertBFS() {
    this.root = this._invertBFSR([this.root]);
  }
  invertDFS() {
    this.root = this._invertDFSR(this.root);
  }

  _insertR(curr, value) {
    if (!curr) {
      curr = new Node(value);
      return curr;
    }
    if (value < curr.value) {
      curr.left = this._insertR(curr.left, value);
      return curr;
    }
    if (value > curr.value) {
      curr.right = this._insertR(curr.right, value);
      return curr;
    }
  }
  _removeR(curr, value) {
    if (!curr) {
      return null;
    }
    if (value < curr.value) {
      curr.left = this._removeR(curr.left, value);
      return curr;
    }
    if (value > curr.value) {
      curr.right = this._removeR(curr.right, value);
      return curr;
    }

    if (!curr.left) {
      const temp = curr.right;
      curr = null;
      return temp;
    } else if (!curr.right) {
      const temp = curr.left;
      curr = null;
      return temp;
    }

    let leftmostParent = curr;
    let leftmost = curr.right;

    while (leftmost.left) {
      leftmostParent = leftmost;
      leftmost = leftmost.left;
    }

    if (leftmostParent.value !== curr.value) {
      leftmostParent.left = leftmost.right;
    } else {
      leftmostParent.right = leftmost.right;
    }

    curr.value = leftmost.value;
    leftmost = null;
    return curr;
  }
  _bfsR(queue, value) {
    const curr = queue.shift();
    if (curr.value === value) {
      return true;
    }
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
    if (queue.length > 0) {
      this._bfsR(queue, value);
    }
    return false;
  }
  _dfsPreOrderR(curr, value) {
    if (!curr) {
      return false;
    }
    if (curr.value === value) {
      return true;
    }
    if (value < curr.value) {
      return this._dfsPreOrderR(curr.left, value);
    }
    if (value > curr.value) {
      return this._dfsPreOrderR(curr.right, value);
    }
  }
  _dfsInOrderR(curr, value) {
    if (!curr) {
      return false;
    }
    if (value < curr.value) {
      return this._dfsInOrderR(curr.left, value);
    }
    if (curr.value === value) {
      return true;
    }
    if (value > curr.value) {
      return this._dfsInOrderR(curr.right, value);
    }
  }
  _dfsPostOrderR(curr, value) {
    if (!curr) {
      return false;
    }
    if (value < curr.value) {
      return this._dfsPostOrderR(curr.left, value);
    }
    if (value > curr.value) {
      return this._dfsPostOrderR(curr.right, value);
    }
    if (value === curr.value) {
      return true;
    }
  }
  _invertDFSR(curr) {
    if (!curr) return null;

    const left = this._invertDFSR(curr.left);
    const right = this._invertDFSR(curr.right);

    curr.left = right;
    curr.right = left;

    return curr;
  }
  _invertBFSR(queue) {
    const curr = queue.shift();
    if (!curr) return null;

    const temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }

    if (queue.length > 0) {
      this._invertBFSR(queue);
    }

    return curr;
  }
}

function compare(curr1, curr2) {
  if (!curr1 && !curr2) return true;
  if (!curr1 || !curr2) return false;
  if (curr1.value !== curr2.value) return false;
  return compare(curr1.left, curr2.left) && compare(curr1.right, curr2.right);
}

const bst1 = new BST();
bst1.insert(10);
bst1.insert(14);
bst1.insert(24);
bst1.insert(34);
bst1.insert(9);
bst1.insert(8);
bst1.insert(7);
bst1.insert(6);
bst1.insert(5);

const bst2 = new BST();
bst2.insert(10);
bst2.insert(14);
bst2.insert(24);
bst2.insert(34);
bst2.insert(9);
bst2.insert(8);
bst2.insert(7);
bst2.insert(6);
bst2.insert(5);

bst1.invertDFS();
bst2.invertDFS();
console.log(compare(bst1.root, bst2.root));
