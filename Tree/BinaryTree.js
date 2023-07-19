class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) return false;

    if (root.value === value) return true;

    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    // use the optimised queue implementation
    const queue = [];
    if (this.root) queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  min(root) {
    if (!root) return undefined;

    if (root.left) {
      return this.min(root.left);
    } else {
      return root.value;
    }
  }

  max(root) {
    if (!root) return undefined;

    if (root.right) {
      return this.min(root.right);
    } else {
      return root.value;
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right); // lấy giá trị min của right thay cho value của node
      root.right = this.deleteNode(root.right, root.value); // xóa giá trị min vừa lấy trong right
    }
    return root;
  }
}

const bst = new BinarySearchTree();

// console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(20);
bst.insert(14);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 20));

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrder();

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

bst.levelOrder();
bst.delete(10);
console.log("--------------");
bst.levelOrder();
