/**
 * Created by ZL on 2016-10-29.
 */

var removeNthFromEnd = function(head,n) {

    var tempArr = [];
    var result=[];
    var i = 0;
    var current = head;

    while (current) {
        tempArr[i] = current.val;
        i++;
        current = current.next;
    }

    for(var j=0;j<tempArr.length;j++){
        if(j!=tempArr.length-n){
            result.push(tempArr[j])
        }
    }
    return result;

};

/* LinkedList is a link of linkNode whose the definition is posted on my github data-structure, if you want to test this
approach, please import LinkedList data-structure*/

var link =new LinkedList();

link.append(1);
link.append(2);
link.append(3);

console.log(removeNthFromEnd(link.head,2));








