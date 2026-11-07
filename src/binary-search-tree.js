const { NotImplementedError } = require("../lib");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = addNode(this.root, data);

    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }

      return node;
    }
  }

  find(data) {
    let current = this.root;

    while (current) {
      if (current.data === data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let rightMinNode = node.right;

        while (rightMinNode.left) {
          rightMinNode = rightMinNode.left;
        }

        node.data = rightMinNode.data;

        node.right = removeNode(node.right, rightMinNode.data);
      }

      return node;
    }

    this.root = removeNode(this.root, data);
  }

  min() {
    let current = this.root;

    if (current) {
      while (current.left) {
        current = current.left;
      }

      return current.data;
    }

    return null;
  }

  max() {
    let current = this.root;

    if (current) {
      while (current.right) {
        current = current.right;
      }

      return current.data;
    }

    return null;
  }
}

module.exports = {
  BinarySearchTree,
};
