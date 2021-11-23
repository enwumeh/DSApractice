class LinkedList {
  constructor(head) {
    this.head = head;
  }

  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    }
    else {
      let oldTail = this.tail;
      this.tail = new Node(value)
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
    return this.head;

  }

  reverse(head) {
    
  }

  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    }
    else {
      let oldHead = this.head;
      this.head = new Node(value, this.head, oldHead);
      // this.head = new Node(this.head, this.head, value);

      // oldHead.prev = this.head;
      // this.head.next = oldHead;
    }
    return this.head;
  }
  deleteHead() {
    //empty list
    if (!head) {
      return null;
    }
    else {
      let removeHead = this.head;
      //1 node in list
      if (this.head === this.tail) {
        this.head = this.tail = null;
      }
      else {
        //regular list 
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removeHead.value;
    }
  }


  addSpecificIndex(){

  }
  deleteTail() {
    if (!tail) {
      return null;
    }

    else {
      let removeTail = this.tail;
      if (this.head = this.tail) {
        this.head = this.tail = null;
      }
      else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
    return removeTail;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      else {
        currentNode = currentNode.next;
      }
       
    }
    // console.log(null);
    return null;
  }

  printListData() {
    while (this.head) {
      console.log(this.head.value)
      this.head = this.head.next;
    }
  }
}


class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}


let linked1 = new LinkedList()
// linked1.append(4);
// linked1.append(2);
linked1.append(3);
linked1.append(2);
linked1.append(1);
linked1.append(0);

// linked1.prepend(1);
// linked1.search(4);
// linked1.search(224);
// console.log(linked1);
linked1.printListData()
// linked1


