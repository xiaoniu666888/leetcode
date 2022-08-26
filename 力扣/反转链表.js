/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    //定义一个空指针
    let pre = null;
    //定义一个指向头部的指针
    let curr = head;
    while(curr !== null){
    //进行交换
       [curr.next,pre,curr] = [pre,curr,curr.next];
    }
    return pre;

};
