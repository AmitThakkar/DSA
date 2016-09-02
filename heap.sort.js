/**
 * Created by amitthakkar on 28/08/16.
 */
(() => {
    class Node {
        constructor(value, parent, leftChild, rightChild) {
            this.value = value;
            this.parent = parent;
            this.leftChild = leftChild;
            this.rightChild = rightChild;
        }
    }

    class Tree {
        constructor() {
            this.root = undefined;
        }
    }

    let swapNodes = (n1, n2) => {
        // TODO: swap the node instead of Value
        let tempValue = n1.value;
        n1.value = n2.value;
        n2.value = tempValue;
    };

    // This is arrow function because we are not using this here
    let moveBigValueToUp = (node) => {
        while (node.parent) {
            if (node.parent.value < node.value) {
                swapNodes(node, node.parent);
            } else {
                break;
            }
        }
    };

    // not arrow function so this will point to that object.
    Tree.prototype.insert = function (value) {
        if (!this.root) {
            this.root = new Node(value, undefined, undefined, undefined);
        } else {
            let parents = [this.root], isInserted = false;
            while (true) {
                let nextParents = [];
                for (let parentIndex = 0; parentIndex < parents.length; parentIndex++) {
                    let parent = parents[parentIndex];
                    if (!parent.leftChild) {
                        parent.leftChild = new Node(value, parent, undefined, undefined);
                        isInserted = true;
                        moveBigValueToUp(parent.leftChild);
                        break;
                    } else if (!parent.rightChild) {
                        parent.rightChild = new Node(value, parent, undefined, undefined);
                        isInserted = true;
                        moveBigValueToUp(parent.rightChild);
                        break;
                    }
                    nextParents.push(parent.leftChild);
                    nextParents.push(parent.rightChild);
                }
                if (isInserted) {
                    break;
                } else {
                    parents = nextParents;
                }
            }
        }
    };

    // not arrow function so this will point to that object.
    Tree.prototype.getNodes = function () {
        if (!this.root) {
            return 'Empty Tree';
        } else {
            let result = [];
            let parents = [this.root];
            while (parents && parents.length > 0) {
                let nextParents = [];
                parents.forEach((parent) => {
                    result.push(parent.value);
                    if (parent.leftChild) {
                        nextParents.push(parent.leftChild);
                    }
                    if (parent.rightChild) {
                        nextParents.push(parent.rightChild);
                    }
                });
                parents = nextParents;
            }
            return result;
        }
    };

    let array = [5, 4, 8, 3, 2, 1];
    let result = [];
    let length = array.length;
    for (let index = 0; index < length; index++) {
        let tree = new Tree();
        array.forEach((element) => {
            tree.insert(element);
        });
        array = tree.getNodes();
        result.unshift(array[0]);
        array.splice(0, 1);
    }
    console.log(result);
})();