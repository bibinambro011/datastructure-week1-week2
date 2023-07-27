class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class dll{
    constructor(){
        this.head=null;
        this.size=0
    }
    append(value){
        let node=new Node(value);
        if(this.size==0){
            this.head=node;
        }
        else{
            let curr=this.head;
            let prev;
            while(curr){
                prev=curr;
                curr=curr.next;
            };
            prev.next=node;
        }
        this.size++
    };
    prepend(value){
        let node=new Node(value);
        if(this.size==0){
            this.head=node;
        }
       
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.value);
            curr=curr.next
        }
    }
}
let obj=new dll();
obj.append(100);
obj.append(90);
obj.append(2000);
obj.prepend(10)
obj.print()