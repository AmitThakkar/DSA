/**
 * Created by amitthakkar on 20/09/16.
 */
(() => {
    function Node(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    function _height(node) {
        let lHeight = 0, rHeight = 0;
        if (node.left) {
            lHeight = _height(node.left);
        }
        if (node.right) {
            rHeight = _height(node.right);
        }
        return 1 + (lHeight > rHeight ? lHeight : rHeight);
    }

    function _max(n1, n2, n3) {
        return (n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3));
    }

    function _diameter(node) {
        let lHeight = 0, rHeight = 0, lDiameter = 0, rDiameter = 0;
        if (node.left) {
            lHeight = _height(node.left);
            lDiameter = _diameter(node.left);
        }
        if (node.right) {
            rHeight = _height(node.right);
            rDiameter = _diameter(node.right);
        }
        return _max(1 + lHeight + rHeight, lDiameter, rDiameter);
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

    Tree.prototype.height = function () {
        if (!this.root) {
            return 0;
        } else {
            return _height(this.root);
        }
    };

    Tree.prototype.diameter = function () {
        if (!this.root) {
            return 0;
        }
        return _diameter(this.root)
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

    let array = [5, 4, 8, 3, 2, 1, 7, 9];
    let tree = new Tree();
    array.forEach((element) => {
        tree.add(element);
    });
    console.log(tree.print());
    console.log(tree.height());
    console.log(tree.diameter());
})();