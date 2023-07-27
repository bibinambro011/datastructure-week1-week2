class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      let siz = index - 1;
      for (let i = 0; i < siz; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  append(value) {
    let node = new Node(value);
    let root = this.head;
    while (root.next) {
      root = root.next;
    }
    if (root) {
      root.next = node;
    } else {
      this.head = node;
    }
    this.size++;
  }
  removeindex(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removenode;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removenode = prev.next;
      prev.next = removenode.next;
    }
    this.size--;
    // return removenode.value;
  }

  print() {
    let curr = this.head;

    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

search(value){
    if(this.size==0){
        console.log("list is empty")
        return -1
    }
    let curr=this.head;
    let i=0;
    while(curr){
        if(curr.value ===value){
            console.log("helloo")
            return i;

        }
        curr=curr.next;
        i++;
       
    }
    
}


}
let obj = new linkedList();
obj.prepend(100);
obj.prepend(100000);
obj.append(9000);
obj.append(101);
obj.append(103);
obj.removeindex(4)
obj.print();
