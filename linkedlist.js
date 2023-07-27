class Node {
  constructor(value) {
    this.value = value;
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

    if (this.size === 0) {
      this.head = node;
    } else {
      let curr = this.head;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  addValuebyIndex(value, index) {
    let node = new Node(value);
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      let temp = prev.next;
      prev.next = node;
      node.next = temp;
    }
    this.size++;
  }
  removeValueByIndex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      let r = curr.next;
      curr.next = r.next;
    }
    this.size--;
  }

  deleteNode(value) {
    let current = this.head;
    let previous = null;
    if (this.head.value === value) {
      this.head = this.head.next;
      return value;
    }
    while (current) {
      if (current.value == value) {
        previous.next = current.next;
      }
      previous = current;
      current = current.next;
    }
  }

  searchByIndex(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    console.log("value is", curr.value);
  }
  searchByValue(value) {
    if (this.head.value == value) {
      this.head.next = this.head;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        console.log("the index number is ", i);
      }
      curr = curr.next;
      i++;
    }
  }
  // reverse(){
  //   let previous=null;
  //   let curr=this.head;
  //   while(curr){
  //    let  next=curr.next;
  //     curr.next=previous;
  //     previous=curr;
  //     curr=next;
  //   }
  //   this.head=previous;
  // }

  reverse(){
   let curr=this.head;
   let previous=null
   while(curr){
    let next=curr.next;
    curr.next=previous;
    previous=curr;
    curr=next;
   }
   this.head=previous;
   
  }

   middledelete(){
    let delindex=Math.floor(this.size/2);
    let curr=this.head;
    for(let i=0;i<delindex-1;i++){
      curr=curr.next
    }
    let temp=curr.next;
    curr.next=temp.next;

   }
  print() {
    if (this.size === 0) {
      console.log("there is no value to print please add some values");
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }
}
obj = new linkedList();
obj.prepend(10);
obj.prepend(20);
obj.prepend(30);
obj.prepend(40);
obj.prepend(50);
obj.append(90);
obj.append(100);
obj.addValuebyIndex(10000,2);
obj.deleteNode(10000);
obj.reverse()


obj.print()
