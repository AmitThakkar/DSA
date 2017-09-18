/**
 * Created by akumar13 on 8/22/17.
 */
class Queue {
    constructor() {
        this._stack = [];
    }

    isEmpty() {
        return this._stack.length === 0;
    }

    size() {
        return this._stack.length;
    }

    enqueue(element) {
        this._stack.push(element);
    }

    dequeue() {
        return this._stack.shift();
    }
}


class StackFromOneQueue {
    constructor() {
        this.queue = new Queue();
    }

    isEmpty() {
        return this.queue.isEmpty();
    }

    push(element) {
        this.queue.enqueue(element);
    }

    pop() {
        let size = this.queue.size();
        for (let index = 0; index < size - 1; index++) {
            this.queue.enqueue(this.queue.dequeue());
        }
        return this.queue.dequeue();
    }
}

let stack = new StackFromOneQueue();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

while (!stack.isEmpty()) {
    console.log("pop: ", stack.pop());
}
