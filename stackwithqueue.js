class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }


push(data){
    let newnode=new Node(data)
     if(this.head==null){
      this.head=newnode            
        }else{
          newnode.next=this.head
         this.head=newnode
         }
     }
 
reverse(){
    let aft=null
    let pre=null
    let current=this.head
    while(current){
        aft=current.next
        current.next=pre
        pre=current
        current=aft
    }
    this.head=pre
 }

pop(){
    if(this.head==null){
        console.log("No Data");
    }else{
        this.reverse()
        this.head=this.head.next
        this.reverse()
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
let obj = new linkedlist();
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.print();
obj.pop();
