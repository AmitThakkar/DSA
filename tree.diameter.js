/**
 * Created by amitthakkar on 20/09/16.
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
            return this.root = new Node(value);
        }
        let parents = [this.root], inserted = false;
        while (!inserted) {
            let tempParents = [];
            for (let index = 0; index < parents.length; index++) {
                let parent = parents[index];
                if (parent.left) {
                    tempParents.push(parent.left);
                } else {
                    parent.left = new Node(value);
                    inserted = true;
                    break;
                }
                if (parent.right) {
                    tempParents.push(parent.right);
                } else {
                    parent.right = new Node(value);
                    inserted = true;
                    break;
                }
            }
            parents = tempParents;
        }
    };

    Tree.prototype.print = function () {
        if (!this.root) {
            return "Tree is Empty";
        }
        let nodes = [this.root], result = [];
        while (nodes.length > 0) {
            let nextNodes = [];
            nodes.forEach((node) => {
                result.push(node.value);
                if (node.left) {
                    nextNodes.push(node.left);
                }
                if (node.right) {
                    nextNodes.push(node.right);
                }
            });
            nodes = nextNodes;
        }
        return result;
    };

    let array = [5, 4, 8, 3, 2, 1];
    let tree = new Tree();
    array.forEach((element) => {
        tree.add(element);
    });
    console.log(tree.print());
})();