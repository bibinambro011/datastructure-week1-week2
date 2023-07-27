class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    };
    push(value){ 
        const node=new Node(value);
        if(this.size==0){
            this.head=node;
        }else{
            let curr=this.head;
            let prev;
            while(curr){
                prev=curr;
                curr=curr.next;
            };
            prev.next=node;
            
        }
        this.size++;
       
    }
    print(){
        let curr=this.head;
        while(curr){
            console.log(curr.value);
            curr=curr.next;
        }
    }

}
let obj=new stack();
obj.push(10);
obj.push(20);
obj.push(30);
obj.print()