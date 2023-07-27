class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  arraytolinkedlist(arr) {
    let len = arr.length;
    for (var i = 0; i < len; i++) {
      const node = new Node(arr[i]);
      if (this.size == 0) {
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
  }
  reverse(){
    let curr=this.head;
    if(this.size==0){
        this.head=node
    }
    else{
        let previous=null;
        while(curr){
        let next=curr.next;
        curr.next=previous;
        previous=curr;
        curr=next;
        }
        this.head=previous;
        
    }
  }
  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

let arr = [1, 2, 3, 46, 7, 8, 9];
let obj = new linkedlist();
obj.arraytolinkedlist(arr);
obj.print();
console.log("previous");
obj.reverse()
obj.print()
