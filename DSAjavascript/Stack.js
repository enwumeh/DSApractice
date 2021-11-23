class Stack {
  constructor() {
    this.data = {};
    this.size = 0;
  }
  push(element) {
    this.size++;
    //this makes the key is size, value is element itself 
    this.data[this.size] = element;
  }

  pop() {
    //shift
    let removed = this.data[this.size];
    delete this.data[this.size];
    this.size--;
    return removed;
  }

  isEmpty() {
    return this.size === 0;
  }

  length() {
    return this.size;
  }

  peek() {
    return this.data[this.size -1]
  }
}

let stack1 = new Stack()
stack1.push(2)
stack1.push(3)
stack1.push(4)

let arr = []
arr[3] = 'pigs'
arr[1] = 3;
// console.log(stack1);

console.log(arr);

