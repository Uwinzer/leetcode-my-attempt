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

function showLinkedList(node) {
    var arr=[];
    while(node.next){
        arr.push(node.value);
        arr.val=arr.next;
    }
    console.log(arr)
}
var firstLinkedList=new LinkedList();
firstLinkedList.append(1);
firstLinkedList.append(2);
firstLinkedList.append(3);

var sectLinkedList=new LinkedList();
sectLinkedList.append(2);
sectLinkedList.append(3);
sectLinkedList.append(4);


var mergeTwoLists = function(l1, l2) {

    var result=new ListNode(0);
    var current =result;

    while(l1!=null&&l2!=null){
        if(l1.val<l2.val){
            current.next=l1;
            l1.val=l1.next
        }else{
            current.next=l2;
            l2=l2.next;
        }
        current=current.next;


    }
    if(l1 !== null){
        current.next = l1;
    }

    if(l2 !== null){
        current.next = l2;
    }
    return result.next;


};
mergeTwoLists(firstLinkedList.head,sectLinkedList.head);
