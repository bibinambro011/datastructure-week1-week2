// function name(n){
//     let name="bibin";
//     let x=name.split("");
//     let len=x.length;
//    for(var i=0;i<len;i++){
//     let y=name.charCodeAt(i)
//    x[i]=String.fromCharCode(y+n);
//    }
//    let y=x.join("")
//    console.log(y)
// }
// name(4);

// let x = "hello world";
// let len = x.length;
// let m = " ";
// for (var i = x.length - 1; i >= 0; i--) {
//   m += x[i];
// }
// console.log(m);



// let name="haii im bibin";

// function slice(start,end){
//     let len=name.length;
//     let m=" ";
//     for(var i=start;i<end;i++){
//     m+=name[i];
//     }
//     console.log(m)
// }
// slice(0,10)


// function pal(value){
//     let name=""
//     let len=value.length;
//     for(var i=len-1;i>=0;i--){
//         name+=value[i];
//     }
//     if(value==name){
//         console.log("it is palindrome")
//     }else{
//         console.log("not palindrome")
//     }

// }
// pal("hello")

// fibanocci
// let arr=[0,1];
// function fib(value){
   
//     for(var i=2;i<=value;i++){
//         arr[i]=arr[i-1]+arr[i-2];
//     }
// };

// fib(6);
// console.log(arr)

// factorial

// function fact(value){
//     if(value==1){
//         return 1;
//     }else{
//         return value*fact(value-1)
//     }
// }
// console.log(fact(5))

// function fact(value){
//     let fact=1;
//     for(var i=1;i<=value;i++){
//         fact*=i;
//     }
//     console.log(fact)
// }
// fact(5)

class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    append(value){
        const node=new Node(value);
        if(this.size==0){
            this.head=node;
            this.tail=node
        }else{
            let curr=this.head;
            let prev;
            while(curr){
                prev=curr;
                curr=curr.next;
            }
            prev.next=node;
            
        }
        this.size++;
    }
    print(){
        let curr=this.head;
        while(curr){
            
        }
    }
}

let obj=new linkedlist();
obj.append(10);
obj.append(20);
console.log(obj)