/**
 * Created by amitthakkar on 23/11/16.
 */
/*
 *                 1
 *              /    \
 *             /      \
 *            /        \ 
 *           2          3
 *          / \        / \
 *         /   \      /   \
 *        4    5     6     7
 *       / \  / \   / \   / \
 *      8  9 10 11 12 13 14 15
 *
 *  Output: 1 3 2 4 5 6 7
 * */
(() => {
    function Node(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
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
                for (let i = 0; i < parents.length; i++) {
                    let parent = parents[i];
                    if (!parent.left) {
                        parent.left = new Node(value);
                        inserted = true;
                        break;
                    } else if (!parent.right) {
                        parent.right = new Node(value);
                        inserted = true;
                        break;
                    } else {
                        nextParents.push(parent.left);
                        nextParents.push(parent.right);
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
            console.log(result);
        }
    };

    Tree.prototype.printTreeInZigZag = function () {
        if (!this.root) {
            console.log('Tree is not initialized yet!');
        } else {
            let parents = [this.root], result = [], directionLR = false;
            while (parents.length > 0) {
                let nextParents = [];
                while (parents.length > 0) {
                    let parent = parents.pop();
                    result.push(parent.value);
                    if (directionLR) {
                        if (parent.right) {
                            nextParents.push(parent.right);
                        }
                        if (parent.left) {
                            nextParents.push(parent.left)
                        }
                    } else {
                        if (parent.left) {
                            nextParents.push(parent.left)
                        }
                        if (parent.right) {
                            nextParents.push(parent.right);
                        }
                    }
                }
                directionLR = !directionLR;
                parents = nextParents;
            }
            console.log(result);
        }
    };

    let tree = new Tree();
    for (let index = 1; index <= 15; index++) {
        tree.add(index);
    }
    console.log(tree.printTreeInZigZag());
})();
