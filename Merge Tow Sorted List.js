/**
 * Created by ZL on 2016-12-14.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var ListNode = function(val) {
    this.val = val;
    this.next = null;
};
function LinkedList() {

    this.length = 0;
    this.head = null;

    this.append=function(ele) {

        var node = new ListNode(ele);
        var current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.length++;

    }

}
var mergeTwoLists = function(l1, l2) {


};