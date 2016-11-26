/**
 * Created by amitthakkar on 25/11/16.
 */
/*
 * Check if a binary tree is subtree of another binary tree.
 *
 * Given two binary trees, check if the first tree is subtree of the second one. A subtree of a tree T is a tree S
 * consisting of a node in T and all of its descendants in T. The subtree corresponding to the root node is the
 * entire tree; the subtree corresponding to any other node is called a proper subtree.
 *
 *          Tree 1               Tree 2
 *            10                    20
 *           /  \                  /  \
 *          4    8               10    18
 *           \                  /  \
 *            6                4    8
 *                              \
 *                               6
 * */
(() => {
    let isParentTree = (node1, node2) => {
        let isSubtree = true;
        let node1Children = [node1];
        let node2Children = [node2];
        while (node1Children.length === node2Children.length && isSubtree && node1Children.length > 0) {
            let tempNode1Children = [], tempNode2Children = [];
            for (let index = 0; index < node1Children.length; index++) {
                let leftTreeNode = node1Children[index];
                let rightTreeNode = node2Children[index];
                if (leftTreeNode.value !== rightTreeNode.value) {
                    isSubtree = false;
                    break;
                }
                if (leftTreeNode.left) {
                    tempNode1Children.push(leftTreeNode.left);
                }
                if (leftTreeNode.right) {
                    tempNode1Children.push(leftTreeNode.right);
                }
                if (rightTreeNode.left) {
                    tempNode2Children.push(rightTreeNode.left);
                }
                if (rightTreeNode.right) {
                    tempNode2Children.push(rightTreeNode.right);
                }
            }
            node1Children = tempNode1Children;
            node2Children = tempNode2Children;
        }
        if (!isSubtree && node1.left) {
            isSubtree = isParentTree(node1.left, node2);
        }
        if (!isSubtree && node1.right) {
            isParentTree(node1.right, node2);
        }
        return isSubtree;
    };

    let containsTree = (tree1, tree2) => {
        let isSubtree = isParentTree(tree1.root, tree2.root);
        if (!isSubtree) {
            isSubtree = isParentTree(tree2.root, tree1.root);
        }
        return isSubtree;
    };

    function Node(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }

    function Tree() {
        this.root = undefined;
    }

    let tree1 = new Tree();
    tree1.root = new Node(10);
    tree1.root.left = new Node(4);
    tree1.root.right = new Node(8);
    tree1.root.left.right = new Node(6);

    let tree2 = new Tree();
    tree2.root = new Node(20);
    tree2.root.left = new Node(10);
    tree2.root.right = new Node(18);
    tree2.root.left.left = new Node(4);
    tree2.root.left.right = new Node(8);
    tree2.root.left.left.right = new Node(6);

    console.log(containsTree(tree1, tree2));
})();
