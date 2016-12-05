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

    let tree = new Tree();
    for (let index = 1; index <= 10; index++) {
        tree.add(index);
    }
    tree.print();
})();
