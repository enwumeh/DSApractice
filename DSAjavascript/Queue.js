class Queue {
  constructor() {
    this.storage = {}
    this.head = 0;
    this.tail = 0;
}
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  //push
}

  
  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++;
    return removed;
  }

  isEmpty() {
    var size = Object.keys(this.storage).length;
    return size === 0;
  }

  length() {
    var size = Object.keys(this.storage).length;
    return size;
  }

  // circularQueue() {
  //   var size = Object.keys(this.storage).length;
  //   return size;
  // }
}

const q = new Queue()

q.enqueue('see')
q.enqueue('you')
q.enqueue('you')
q.dequeue()

console.log(q.length())