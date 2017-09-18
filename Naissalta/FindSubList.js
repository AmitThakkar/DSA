/**
 * Created by akumar13 on 8/24/17.
 */
function find(list, sublist) {
    let isSubList = false;
    let list1Node = list;
    let list2Node = sublist;
    let currentIndex = -1;
    while (list1Node && list1Node.val) {
        currentIndex++;
        if (list1Node.val === list2Node.val) {
            let nextList1Node = list1Node.next;
            let nextList2Node = list2Node.next;
            let flag = true;
            while (nextList1Node && nextList2Node) {
                if (nextList1Node.val === nextList2Node.val) {
                    nextList1Node = nextList1Node.next;
                    nextList2Node = nextList2Node.next;
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                isSubList = true;
                break;
            }
        }
        list1Node = list1Node.next;
    }
    return isSubList ? currentIndex : -1;
}
