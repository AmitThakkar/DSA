/**
 * Created by akumar13 on 8/23/17.
 */
class Node {
    constructor(previous, next, data) {
        this.previous = previous;
        this.next = next;
        this.data = data;
    }
}

class DoublyLinkedList {
    constructor(maxSize) {
        this.size = 0;
        this.maxSize = maxSize;
        this.root = undefined;
    }

    hasSpace() {
        return this.maxSize > this.size;
    }

    enqueue(data) {
        if (!this.root) {
            this.size++;
            this.root = new Node(undefined, undefined, data);
        } else {
            if (this.size === this.maxSize) {
                this.dequeue();
            }
            let temp = this.root;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = new Node(temp, undefined, data);
            this.size++;
        }
    }

    dequeue() {
        if (this.root) {
            if (this.root.next) {
                this.root = this.root.next;
            } else {
                this.root = undefined;
            }
            this.size--;
        }
    }

    print() {
        if (this.root) {
            let values = [this.root.data];
            let temp = this.root.next;
            while (temp) {
                values.push(temp.data);
                temp = temp.next;
            }
            console.log(values.join(" -> "));
        }
    }
}


class LRUCache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.size = 0;
        this.doublyLinkedList = new DoublyLinkedList(this.maxSize);
        this.hasMap = {};
    }

    add() {

    }


}

let lruCache = new LRUCache(3);
