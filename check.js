// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class stack {
//   constructor() {
//     this.head = null;
//     this.size=0;
//   }
//   push(value) {
//     let node=new Node(value)
//     if ((this.size==0)) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   reverse(){
//     let prev=null;
//     let after=null;
//     let curr=this.head;
//     while(curr){
//         let next=curr.next;
//         curr.next=prev;
//         prev=curr;
//         curr=next;
//     };
//     this.head=prev;
//   };
//   pop(){
//     this.reverse();
//     this.head=this.head.next;
//     this.reverse()
//   }
//   display(){
//     while(this.head){
//         console.log(this.head.value);
//         this.head=this.head.next;
//     }
//   }
// }
// let obj=new stack();
// obj.push(10);
// obj.push(20);
// obj.push(30);
// obj.push(40);
// obj.pop()
// obj.display()




class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.size == 0) {
      this.head = node;
    } else {
      let curr = this.head;
      let prev;
      while (curr) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = node;
      curr = node;
    }
    this.size++;
  }
  reverse(){
    let prev=null;
    let after=null;
    let curr=this.head;
    while(curr){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    this.head=prev;

  }
  pop(){
    this.reverse();
    this.head=this.head.next;
    this.reverse()
  }
  display() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
   
  }
}

obj = new queue();
obj.push(10);
obj.push(20);
obj.push(30);
obj.pop()
obj.display();


