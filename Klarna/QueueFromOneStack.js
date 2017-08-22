/**
 * Created by akumar13 on 8/22/17.
 */
class Stack {
    constructor() {
        this._stack = [];
    }

    isEmpty() {
        return this._stack.length === 0;
    }

    push(element) {
        this._stack.push(element);
    }

    pop() {
        return this._stack.pop();
    }
}


class QueueFromOneStack {
    constructor() {
        this.stack = new Stack();
    }

    isEmpty() {
        return this.stack.isEmpty();
    }

    enqueue(element) {
        this.stack.push(element);
    }

    dequeue() {
        let dequeueElement;
        let element = this.stack.pop();
        if (!this.stack.isEmpty()) {
            dequeueElement = this.dequeue();
            this.enqueue(element);
        } else {
            dequeueElement = element;
        }
        return dequeueElement;
    }
}

let queue = new QueueFromOneStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

while (!queue.isEmpty()) {
    console.log("dequeue: ", queue.dequeue());
}
