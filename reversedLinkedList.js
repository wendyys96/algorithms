/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     if(head === null || head.next === null) return head;
//     const nodes = [];
//     let iterator = head;
//     while(iterator !== null) {
//         nodes.push(iterator);
//         iterator = iterator.next;
//     }
//     const newHead = nodes[nodes.length - 1];
//     nodes[0].next = null;
//     iterator = newHead;
//     for(let i = nodes.length - 2; i >= 0; i--) {
//         iterator.next = nodes[i];
//         iterator = iterator.next;
//     }
//     return newHead;
// };

var reverseList = function(head) {
  let prevNode = null;
  let currNode = head;
  while(currNode !== null) {
      const temp = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = temp;
  }
  return prevNode;
};