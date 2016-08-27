/**
 * Created by amitthakkar on 27/08/16.
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

    Tree.prototype.insert = function (value) {
        if (!this.root) {
            this.root = new Node(value, undefined, undefined, undefined);
        } else {
            let parents = [this.root], isInserted = false;
            while (!isInserted) {
                let nextParents = [];
                for (let parentIndex = 0; parentIndex < parents.length; parentIndex++) {
                    let parent = parents[parentIndex];
                    if (!parent.leftChild) {
                        parent.leftChild = new Node(value, parent, undefined, undefined);
                        isInserted = true;
                        break;
                    } else if (!parent.rightChild) {
                        parent.rightChild = new Node(value, parent, undefined, undefined);
                        isInserted = true;
                        break;
                    } else {
                        nextParents.push(parent.leftChild);
                        nextParents.push(parent.rightChild);
                    }
                }
                parents = nextParents
            }
        }
    };

    Tree.prototype.getNodes = function () {
        if (!this.root) {
            return 'Tree is not initialized yet!';
        } else {
            let parents = [this.root], nodes = [];
            while (parents && parents.length > 0) {
                let nextParents = [];
                parents.forEach((parent) => {
                    nodes.push(parent.value);
                    if (parent.leftChild) {
                        nextParents.push(parent.leftChild);
                    }
                    if (parent.rightChild) {
                        nextParents.push(parent.rightChild);
                    }
                });
                parents = nextParents;
            }
            return nodes.join(' ');
        }
    };
    let array = [5, 4, 8, 3, 2, 1];
    let tree = new Tree();
    array.forEach((element) => {
        tree.insert(element);
    });
    console.log(tree.getNodes());
})();