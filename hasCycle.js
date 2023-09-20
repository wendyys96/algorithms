/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const nodes = new Map();
  let iterator = head;
  while(iterator && !nodes.has(iterator)) {
      nodes.set(iterator, true);
      iterator = iterator.next;
  }
  return iterator !== null;
};