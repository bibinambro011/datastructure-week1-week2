// 
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        
    }
    
}
class linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    };
    push(value){
        let node=new Node(value);
        if(this.size==0){
            this.head=node;
        }else{
            let curr=this.head;
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

    pop(){
        if(this.size==0){
            console.log("there is no value to get deleted")
        }
        else{
          this.head=this.head.next;
            }
            this.size--;

        };
        peek(){
            console.log(this.head.value)
        };
        print(){
            let curr=this.head;
            while(curr){
                console.log(curr.value);
                curr=curr.next;
            }
        }
    }

    obj=new linkedlist();
    obj.push(10);
    obj.push(20);
    obj.push(30);
    obj.pop();
    
    obj.print()