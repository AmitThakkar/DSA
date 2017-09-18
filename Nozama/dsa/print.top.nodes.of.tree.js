/**
 * Created by amitthakkar on 21/11/16.
 */
/*
 * Top view of a binary tree is the set of nodes visible when the tree is viewed from the top. Given a binary tree,
 * print the top view of it. The output nodes can be printed in any order. Expected time complexity is O(n)
 *                     10
 *                    /  \
 *                   2   15
 *                  / \    \
 *                 1   7   18
 *                    /
 *                   6
 *                  /
 *                 5
 *                /
 *               4
 *              /
 *             3
 * */
(() => {
    function Node(value) {
        this.left = undefined;
        this.right = undefined;
        this.value = value;
    }

    function Tree() {
        this.root = undefined;
    }

    Tree.prototype.add = function (value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let parent = this.root;
            while (true) {
                if (parent.value > value) {
                    if (parent.left) {
                        parent = parent.left;
                    } else {
                        parent.left = new Node(value);
                        break;
                    }
                }
                if (parent.value <= value) {
                    if (parent.right) {
                        parent = parent.right;
                    } else {
                        parent.right = new Node(value);
                        break;
                    }
                }
            }
        }
    };

    Tree.prototype.printTopNodes = function () {
        let result = {};
        if (this.root) {
            result[0] = this.root.value;
            this.root.tv = 0;
        }
        let parents = [this.root];
        while (parents.length > 0) {
            let nextParents = [];
            parents.forEach((p) => {
                if (p.left) {
                    nextParents.push(p.left);
                    p.left.tv = p.tv - 1;
                    if (!result[p.left.tv]) {
                        result[p.left.tv] = p.left.value;
                    }
                }
                if (p.right) {
                    nextParents.push(p.right);
                    p.right.tv = p.tv + 1;
                    if (!result[p.right.tv]) {
                        result[p.right.tv] = p.right.value;
                    }
                }
            });
            parents = nextParents;
        }
        console.log(result);
    };

    let values = [10, 2, 15, 1, 7, 18, 6, 5, 4, 3];
    let tree = new Tree();
    values.forEach((value) => {
        tree.add(value);
    });
    tree.printTopNodes();
})();
