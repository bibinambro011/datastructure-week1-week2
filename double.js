class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    let node = new Node(value);
    if (this.size == 0) {
      this.head = node;
    } else {
      let prev;
      let curr = this.head;
      let tmp = this.tail;
      while (curr) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = node;
      node.previous = prev;
      tmp = node;
    }
    this.size++;
  }
  prepend(value) {
    let node = new Node(value);
    let curr = this.head;
    curr.previous = node;
    node.next = curr;
    this.head = node;
    this.size++;
  }
  addValuebyIndex(value, index) {
    const node = new Node(value);
    let prev;
    let curr = this.head;
    if (index == 0) {
      obj.prepend(value);
    } else {
      for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
      }
      let next = curr.next;
      prev.next = node;
      node.previous = prev;
      node.next = next;
      next.previous = node;
      this.size++;
    }
   
  }
  removeValueByIndex(index){
    if(index==0){
        this.head=this.head.next;
    }
    if(index<0 || index>this.size){
        return null;
    }else{
        let curr=this.head;
        let prev;
        for(let i=0;i<index;i++){
            prev=curr;
            curr=curr.next;
        }
        let next=curr.next;
        prev.next=next.next;
        next.previous=prev;
        this.size--;
    }
}
delete(value){
    let curr=this.head;
    let prev;
    if(this.head.value==value){
        this.head=this.head.next;
    }
    else{
        while(curr.value !==value){
            prev=curr;
            curr=curr.next;
        }
        let next=curr.next;
        prev.next=next;
        next.previous=prev;
        this.size--;
    }
}
reverse(){

    let curr=this.head;
    for(var i=0;i<7;i++){
        curr=curr.next;
    };
    let temp=curr.previous;
    while(temp.value !=null){
        console.log(temp.previous.value)
        temp=temp.previous;
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
let obj = new DoublyLinkedList();
obj.append(10);
obj.append(20);
obj.append(30);
obj.append(40);
obj.append(50);
obj.prepend(100);
obj.delete(10);


obj.print()

