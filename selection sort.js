// let arr=[2,4,1,-4,8,-3,9,7,-1,0];
// for (var i=0;i<arr.length;i++){
   
//         let min=arr[i];
//         for(var j=i+1;j<arr.length;j++){
//          if(arr[j]<min){
//             let x=arr[i];
//              min=arr[j];
//              arr[j]=x;
//          }
        
        
//     }
//     arr[i]=min;
  
  
// }
// console.log(arr)



function selection_sort(arr){
    for(var i=0;i<arr.length-1;i++){
        let min=arr[i];
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<min){
                let x=arr[i]
                min=arr[j];
                arr[j]=x;
            }
        }
        arr[i]=min;
    }
    return arr;
}
let arr=[2,4,1,-4,8,-3,9,7,-1,0];
console.log(selection_sort(arr))



