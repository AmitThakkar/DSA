/**
 * Created by amitthakkar on 01/12/16.
 */
(() => {
    function Node(value, next) {
        this.value = value;
        this.next = next;
    }

    function LinkedList(head) {
        this.head = head;
    }

    LinkedList.prototype.add = function (value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
        }
    };

    LinkedList.prototype.print = function () {
        if (!this.head) {
            console.log('LinkedList is still not initialized yet!');
        } else {
            let result = [];
            let currentNode = this.head;
            while (currentNode) {
                result.push(currentNode.value);
                currentNode = currentNode.next;
            }
            console.log(result.join(" => "));
        }
    };

    function reverseWithRecursion(node, previousNode) {
        let nextNode = node.next;
        node.next = previousNode;
        if (!nextNode) {
            return node;
        }
        return reverseWithRecursion(nextNode, node);
    }

    LinkedList.prototype.reverseWithRecursion = function () {
        if (!this.head) {
            console.log('LinkedList is still not initialized yet!');
        } else {
            return reverseWithRecursion(this.head, undefined);
        }
    };

    function reverseWithLoop(currentNode) {
        let previousNode = undefined, nextNode;
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        return previousNode;
    }

    LinkedList.prototype.reverseWithLoop = function () {
        if (!this.head) {
            console.log('LinkedList is still not initialized yet!');
        } else {
            return reverseWithLoop(this.head);
        }
    };

    let values = [1, 2, 3, 4, 5];
    let linkedList = new LinkedList();
    values.forEach((value) => {
        linkedList.add(value);
    });
    linkedList.print();
    linkedList.head = linkedList.reverseWithRecursion();
    linkedList.print();
    linkedList.head = linkedList.reverseWithLoop();
    linkedList.print();
})();
