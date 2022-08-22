/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) { 
    if(list1 == null){
        return list2
    }else if(list2 == null){
        return list1
    }
     let l1 = list1;
    let l2 = list2;
    let dummy = new ListNode(-1),
        p = dummy;
    while(l1 && l2){
        if(l1.val  <= l2.val){
        p.next = l1;
        l1 = l1.next;
        }
        else{
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next
    }
    if(l1 !== null){
        p.next = l1
    }
    else if(l2 !== null){
        p.next = l2
    }
    return dummy.next
};