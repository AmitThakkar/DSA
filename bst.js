/**
 * Created by amitthakkar on 24/08/16.
 */
/**
 * Created by Amit Thakkar on 5/16/16.
 */
(() => {
    "use strict";
    function Node(v) {
        var value = v;
        this.parent = undefined;
        this.leftNode = undefined;
        this.rightNode = undefined;
        this.getValue = function () {
            return value;
        };
    }

    function Tree() {
        this.root = undefined;
    }

    Tree.prototype.insert = function (v) {
        if (this.root) {
            var parentNode = this.root;
            while (true) {
                var tempRootValue = parentNode.getValue();
                if (v < tempRootValue) {
                    if (parentNode.leftNode) {
                        parentNode = parentNode.leftNode;
                    } else {
                        parentNode.leftNode = new Node(v);
                        parentNode.leftNode.parent = parentNode;
                        break;
                    }
                } else if (v > tempRootValue) {
                    if (parentNode.rightNode) {
                        parentNode = parentNode.rightNode;
                    } else {
                        parentNode.rightNode = new Node(v);
                        parentNode.rightNode.parent = parentNode;
                        break;
                    }
                } else {
                    console.log("Duplicate Value: ", tempRootValue);
                }
            }
        } else {
            this.root = new Node(v);
        }
    };
    Tree.prototype.search = function (v) {
        if (this.root) {
            var parentNode = this.root;
            var tempValue = parentNode.getValue();
            if (tempValue == v) {
                return parentNode;
            } else {
                while (true) {
                    tempValue = parentNode.getValue();
                    if (v < tempValue) {
                        parentNode = parentNode.leftNode;
                        if (!parentNode) {
                            return undefined;
                        }
                    } else if (v > tempValue) {
                        parentNode = parentNode.rightNode;
                        if (!parentNode) {
                            return undefined;
                        }
                    } else if (v == tempValue) {
                        return parentNode;
                    }
                }
            }
        } else {
            return undefined;
        }
    };
    Tree.prototype.getPath = function (v) {
        var path;
        if (this.root) {
            var parentNode = this.root;
            var tempValue = parentNode.getValue();
            if (tempValue == v) {
                path = "=>" + tempValue;
                return path;
            } else {
                path = '';
                while (true) {
                    tempValue = parentNode.getValue();
                    path += "=>" + tempValue;
                    if (v < tempValue) {
                        parentNode = parentNode.leftNode;
                        if (!parentNode) {
                            return undefined;
                        }
                    } else if (v > tempValue) {
                        parentNode = parentNode.rightNode;
                        if (!parentNode) {
                            return undefined;
                        }
                    } else if (v == tempValue) {
                        return path;
                    }
                }
            }
        } else {
            return path;
        }
    };

    var tree = new Tree();
    tree.insert(10);
    tree.insert(7);
    tree.insert(17);
    tree.insert(3);
    tree.insert(19);
    tree.insert(9);
    tree.insert(13);

    console.log(tree.search(13) !== undefined);
    console.log(tree.search(4) !== undefined);
    console.log(tree.search(9) !== undefined);

    console.log(tree.getPath(13));
    console.log(tree.getPath(9));
})();