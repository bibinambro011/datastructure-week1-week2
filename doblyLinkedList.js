class Node{
    constructor(value,next=null){
        this.value=value;
        this.next=null;
        this.previous=null;
        
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    append(value){
        const node=new Node(value);
        let curr=this.head
        if( this.size===0){
            this.head=node;
            this.tail=node
        }else{
          node.previous=this.tail;
          this.tail.next=node;
          this.tail=node; 


        }
        this.size++;
    };
    prepend(value){
        const node=new Node(value);
        if(this.size===0){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head=node;
            node.previous=null;
        }
        this.size++;
    }
    addByIndex(value,index){
        const node=new Node(value);
        if(index===0){
            obj.prepend(value,index)
        }
        if(index>this.size || index<0){
            return null;
        }else if(index >0) {
            let prev=this.head;
           for(var i=0;i<index-1;i++){
            prev=prev.next
           };
           let next=prev.next;
           prev.next=node;
           node.next=next;
           node.previous=prev;

        }
        this.size++;
    }


    // removeByValue(value){
    //     let curr=this.head;
    //     let prev;let i=0;
    //     while(curr.value !==value){
           
    //             prev=curr;
    //             curr=curr.next;
    //             console.log(i);
    //             i++;
          
        


    //     }
    //     let  next=curr.next; 
    //     curr=null;
    //     prev.next=next;
    //     next.previous=prev;

    //     this.size--
    // }

        q

  print(){
    if(this.size==0){
        console.log('there is no value to show')
    }
    else{
        let curr=this.head;
        while(curr){
            console.log(curr.value);
            curr=curr.next;
        }
        
        
    }
  }

}
let obj=new linkedList();
obj.append(90);
obj.append(100);
obj.append(10);
obj.append(20);
obj.append(30)

obj.print()