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
        // let tempLeftChild = n1.leftChild;
        // let tempRightChild = n1.rightChild;
        // let tempParentNode = n1.parent;
        // n1.leftChild = n2.leftChild;
        // n1.rightChild = n2.rightChild;
        // n1.parent = n2.parent;
        // n2.leftChild = tempLeftChild;
        // n2.rightChild = tempRightChild;
        // n2.parent = tempParentNode;
        let tempValue = n1.value;
        n1.value = n2.value;
        n2.value = tempValue;
    };

    let moveBigValueToUp = (node) => {
        while (node.parent) {
            if (node.parent.value < node.value) {
                swapNodes(node, node.parent);
            } else {
                break;
            }
        }
    };

    Tree.prototype.insert = (value) => {
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

    Tree.prototype.getNodes = () => {
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

    let array = [5, 4, 8];
    let tree = new Tree();
    array.forEach((element) => {
        tree.insert(element);
    });
    console.log(tree.getNodes());
})();