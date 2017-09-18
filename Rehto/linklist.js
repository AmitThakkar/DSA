/**
 * Created by amitthakkar on 08/09/16.
 */
(() => {
    function Node(value, next) {
        this.value = value;
        this.next = next;
    }

    function LinkList() {
        this.root = undefined;
    }

    LinkList.prototype.add = function (value) {
        if (!this.root) {
            return this.root = new Node(value, undefined);
        }
        let node = this.root;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(value, undefined);
    };
    LinkList.prototype.remove = function (value) {
        if (this.root && this.root.value == value) {
            this.root = this.root.next;
            return;
        }
        let current = this.root;
        let next = current.next;
        while (next) {
            if (next.value == value) {
                current.next = next.next;
                break;
            } else {
                current = next;
                next = next.next;
            }
        }
    };
    LinkList.prototype.merge = function (l1, l2) { // merge to sorted linkedin list into resultant sorted list
        function addAndMoveToNextNode(mergeList, node) {
            mergeList.add(node.value);
            lastValue = node.value;
            return node.next;
        }

        let mergeList = new LinkList();
        let l1Node = l1.root;
        let l2Node = l2.root;
        let lastValue = undefined;
        while (true) {
            if (!l1Node && !l2Node) {
                break;
            }
            while (l1Node && lastValue == l1Node.value) {
                l1Node = l1Node.next;
            }
            while (l2Node && lastValue == l2Node.value) {
                l2Node = l2Node.next;
            }
            if (l1Node && l2Node) {
                if (l1Node.value < l2Node.value) {
                    l1Node = addAndMoveToNextNode(mergeList, l1Node);
                } else if (l1Node.value > l2Node.value) {
                    l2Node = addAndMoveToNextNode(mergeList, l2Node);
                } else { // value are same so inserting any one.
                    l1Node = addAndMoveToNextNode(mergeList, l1Node);
                    l2Node = l2Node.next;
                }
            } else if (l1Node) {
                l1Node = addAndMoveToNextNode(mergeList, l1Node);
            } else if (l2Node) {
                l2Node = addAndMoveToNextNode(mergeList, l2Node);
            }

        }
        return mergeList;
    };
    LinkList.prototype.print = function () {
        let result = [];
        let node = undefined;
        if (this.root) {
            result.push(this.root.value);
            node = this.root.next;
        }
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        console.log(result);
    };
    let linkList1 = new LinkList();
    let linkList2 = new LinkList();
    for (let index = 0; index < 5; index++) {
        linkList1.add(parseInt(Math.random() * 10));
    }
    for (let index = 0; index < 5; index++) {
        linkList2.add(parseInt(Math.random() * 10));
    }
    linkList1.print();
    linkList2.print();
    let mergeLinkList = linkList1.merge(linkList1, linkList2);
    mergeLinkList.print();
})();