export class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push();
    }

    dequeue() {
        this.items.shift();
    }

    front() {
        if (this.items.length == 0) return null;
        return this.items[0]
    }

    isEmpty() {
        return this.items.length == 0
    }

    size() {
        return this.items.length
    }
}
