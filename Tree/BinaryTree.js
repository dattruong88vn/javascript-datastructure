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
    // delete node method return new node after delete and update
    // start from root and recursion inside
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return node;
    }
    // if value not equal with node.value
    // check node.right or node.left with value depends condition
    if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else {
      // case node.value equal value
      // no child
      if (!node.left && !node.right) {
        return null;
      }

      // only one child
      if (!node.right) {
        return node.left;
      } else if (!node.left) {
        return node.right;
      }

      // 2 child
      // get min value of right subtree
      root.value = this.min(node.right);

      // delete node store min value and update right subtree
      node.right = this.deleteNode(node.right, root.value);
    }
    return node;
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
