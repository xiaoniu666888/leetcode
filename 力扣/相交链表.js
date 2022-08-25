/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {

    let n1 = headA;
    let n2 = headB;
/*让n1和n2走完相同的路程，即n1,n2,以及相交的部分，如果相交，那么必然会出现n1=n2,
如果不相交,那么n1和n2最后都指向空，依然跳出循环
*/
    while(n1 !== n2){
        if(n1 === null){
            n1 = headB;
        }
        else{
            n1 = n1.next;
        }
    if(n2 === null){
            n2 = headA;
        }
        else{
            n2 = n2.next;
        }
    }
    return n1;
};
