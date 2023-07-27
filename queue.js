class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  equeue(value) {
    const node = new Node(value);
    if (this.size == 0) {
      this.head = node;
      this.tail = node;
    } else {
      let curr = this.tail;
      curr.next = node;
      this.tail = node;
    }
    this.size++;
  }
  dequeue() {
    this.head = this.head.next;
  }
  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

obj = new linkedlist();
obj.equeue(10);
obj.equeue(20);
obj.equeue(30);
obj.dequeue();
obj.print();
