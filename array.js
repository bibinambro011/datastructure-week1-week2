// let arr1=[1,2,3,4,5];
// let arr2=[5,6,7,8,9];

// let a1=arr1.length;
// let a2=arr2.length;
// for(i=0;i<a2;i++){
//     arr1[a2+i]=arr2[i]
// };
// console.log(arr1);

//filter

// let arr1=[1,2,3,4,5,6,7,8,9];
// arr2=[];

// let len=arr1.length;
// let x=0;
// for(let i=0;i<len;i++){
//     if(arr1[i]%2!=0){
//         arr2[x]=arr1[i];
//         x++;
//     }
//     }
//     console.log(arr2);

//map
// let arr2=[];
// let arr1=[1,2,3,4,5,6,7];
// let len=arr1.length;

// for(var i=0;i<len;i++){
//     arr2[i]=arr1[i]*2
// };
// console.log(arr2)

// filter and delete

// let arr1=[1,2,3,4,5,6,7,8];
// let len=arr1.length;

// for(var i=0;i<len; i++){
//     arr1[i]=arr1[i]*90;
// };
// console.log(arr1)

// let arr=[
//     [1,2,3,4,5],
//     [45,78,89,90]

// ]
// console.log(arr[0]);
// console.log(arr[1])

//fibanocci sequence

// function fibanocci(val){
//    fib=[0,1];
//    for(var x=2;x<=val;x++){
//     fib[x]=fib[x-1]+fib[x-2]
//    }
//    return fib;
// }
// console.log(fibanocci(10))

//factorial

// function factorial(x){
//     if(x===1){
//         return x;
//     }else{
//         return x*factorial(x-1);
//     }
// }
// console.log(factorial(5))

//fcatorial

// function fact(x){
//     result=1;
//     for(var i=1;i<=x;i++){
//         result*=i
//     }
//     return result;
// }
// console.log(fact(5))

// let arr=[3,5,7,9,4,6,7,8,9,67,66];
// let len=arr.length;

// function odd(arr){
//     for(var i=0;i<len;i++){
//         if(arr[i]%2 !==0){
//             console.log(arr[i])
//         }else{

//         }
//     }
// }
// odd(arr)

//determine if number is power of 2 or not

function power(x){
    let t=x;
let y=Math.ceil(Math.sqrt(x))
for(var i=1;i<y;i++){
    t=t/2;
    if(t===1){
        console.log("power of 2");
        break;
   
}
} if(t !==1){
    console.log("not power of 2")
}

}
 power(8)

// let arr=[1,4,5,8,19,-2,7,0,-5,8]
// let len=arr.length;

// function find(arr,t){
// for(var i=0;i<len;i++){
//     if(arr[i]===t){
//         return i;
//     }
// }
// return -1;
// }
// console.log(find(arr,60));




// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// let rightindex = arr.length-1;
//   let leftindex = 0;
// function binary(arr, t) {
  
//   while(leftindex<=rightindex){
//     let middleindex = Math.floor(rightindex+leftindex / 2);
//     if(t===arr[middleindex]){
//         return middleindex;
//     }
//    if(t<arr[middleindex]){
//         rightindex=middleindex-1;
//     }else{
//         leftindex=middleindex+1
//     }
//   }
//   return -1;
// }
// console.log(binary(arr,12))




// let arr=[1,2,3,4,7,9,0,8];
// let lastindex=arr.length-1;

// function recursive_binary(arr,target){
//     return search(arr,target,0,lastindex-1)
// }

// function search(arr,target,firstindex,lastindex){
//    if(firstindex>lastindex){
//     return -1;
//    }
//     let middleindex=Math.floor((firstindex+lastindex)/2);
   
//     if(target===arr[middleindex]){
//         return middleindex
//     }
//     if(target>arr[middleindex]){
//         return search(arr,target,middleindex+1,lastindex)
//     }else{
//         return search(arr,target,firstindex,middleindex-1);
//     }
// }
// console.log(recursive_binary(arr,8))


// function add(index,value,arr){
//     let len=arr.length;
//    for(let i=len;i>index;i--){
//     arr[i]=arr[i-1]
    
//    }
//    arr[index]=value;
//    console.log(arr)
// }
// let arr=[1,2,3,4,5,6,7,8]
// add(8,"bibin",arr);


// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//         this.previous=null;
//     }
// }

// class dll{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }
//     append(value){
//         const node=new Node(value);

//         if(this.size==0){
//             this.head=node;
//             this.tail=node;
//         }else{
//             let curr=this.head;
//             let temp=this.tail;
//             let prev;
//             while(curr){
//                 prev=curr;
//                 curr=curr.next;
//             }
//             prev.next=node;
//             node.prev=prev;
//            temp=node;
//         }
//         this.size++;
//     }
//     reverse(){
//         let curr=this.head;
//         let prev;
//         console.log("haii")
        
//     }
//     print(){
//         let curr=this.head;
//         while(curr){
//             console.log(curr.value);
//             curr=curr.next
//         }
//     }
// }
// let obj=new dll()
// obj.append(100);
// obj.append(200) 
// obj.append(300);
// obj.append(400);
// obj.append(500);
// obj.reverse()
