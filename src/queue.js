const { NotImplementedError } = require("../lib");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    function convert(node) {
      if (!node) return null;

      return {
        value: node.value,
        next: convert(node.next),
      };
    }

    return convert(this.queue);
  }

  enqueue(value) {
    if (this.queue) {
      let current = this.queue;

      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    } else {
      this.queue = new ListNode(value);
    }
  }

  dequeue() {
    if (!this.queue) {
      return undefined;
    }

    const value = this.queue.value;

    this.queue = this.queue.next;

    return value;
  }
}

module.exports = {
  Queue,
};
