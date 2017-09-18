/**
 * Created by amitthakkar on 05/12/16.
 */
(() => {
    function Node(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    function Tree() {
        this.root = undefined;
    }

    Tree.prototype.add = function (value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let parents = [this.root], inserted = false;
            while (!inserted) {
                let nextParents = [];
                for (let index = 0; index < parents.length; index++) {
                    let parent = parents[index];
                    if (parent.left) {
                        nextParents.push(parent.left);
                    } else {
                        parent.left = new Node(value);
                        inserted = true;
                        break;
                    }
                    if (parent.right) {
                        nextParents.push(parent.right);
                    } else {
                        parent.right = new Node(value);
                        inserted = true;
                        break;
                    }
                }
                parents = nextParents;
            }
        }
    };

    Tree.prototype.print = function () {
        if (!this.root) {
            console.log('Tree is not initialized yet!');
        } else {
            let parents = [this.root], result = [];
            while (parents.length > 0) {
                let nextParents = [];
                parents.forEach((parent) => {
                    result.push(parent.value);
                    if (parent.left) {
                        nextParents.push(parent.left);
                    }
                    if (parent.right) {
                        nextParents.push(parent.right);
                    }
                });
                parents = nextParents;
            }
            console.log(result.join(" => "));
        }
    };

    let previousNode = undefined;

    function isBST(node) {
        if (!node) {
            return true;
        } else {
            if (!isBST(node.left)) {
                return false;
            }
            if (previousNode && node.value <= previousNode.value) {
                return false;
            }
            previousNode = node;
            return isBST(node.right);
        }
    }

    Tree.prototype.isBST = function () {
        previousNode = undefined;
        if (!this.root) {
            console.log('Tree is not initialized yet!');
            return true;
        } else {
            return isBST(this.root);
        }
    };

    let tree = new Tree();
    let data = [3, 2, 5, 1, 4];
    for (let index = 0; index < data.length; index++) {
        tree.add(data[index]);
    }
    tree.print();
    console.log(tree.isBST()); // false

    let tree2 = new Tree();
    let data2 = [4, 2, 5, 1, 3];
    for (let index = 0; index < data2.length; index++) {
        tree2.add(data2[index]);
    }
    tree2.print();
    console.log(tree2.isBST()); // true

    let tree3 = new Tree();
    let data3 = [10, 5, 15, 1, 3];
    for (let index = 0; index < data3.length; index++) {
        tree3.add(data3[index]);
    }
    tree3.print();
    console.log(tree3.isBST()); // false

    let tree4 = new Tree();
    let data4 = [10, 5, 15, 3, 7, 13, 17];
    for (let index = 0; index < data4.length; index++) {
        tree4.add(data4[index]);
    }
    tree4.print();
    console.log(tree4.isBST()); // true

    let tree5 = new Tree();
    let data5 = [10, 5, 15, 3, 7, 13, 17, 1, 6];
    for (let index = 0; index < data5.length; index++) {
        tree5.add(data5[index]);
    }
    tree5.print();
    console.log(tree5.isBST()); // false

    let tree6 = new Tree();
    let data6 = [10, 5, 15, 3, 7, 13, 17, 1, 4, 6, 11];
    for (let index = 0; index < data6.length; index++) {
        tree6.add(data6[index]);
    }
    tree6.print();
    console.log(tree6.isBST()); // false
})();
