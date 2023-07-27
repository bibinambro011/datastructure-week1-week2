


function insertion_sort_ascending(arr){
    for(var i=1;i<arr.length;i++){
     let j=i-1;
     let curr=arr[i];
     while(j>=0 && arr[j]>curr){
         arr[j+1]=arr[j];
         j--
     }
     arr[j+1]=curr;
    }
    console.log(arr);
 }
 let arr=[-2,3,-9,78,56,2,5,19,10]
 insertion_sort_ascending(arr);
 
 
 
 
 function insertion_sort_descending(arr1){
    for(var i=1;i<arr1.length;i++){
     let j=i-1;
     let curr=arr1[i];
     while(j>=0 && arr1[j]<curr){
         arr1[j+1]=arr1[j];
         j--
     }
     arr1[j+1]=curr;
    }
    console.log(arr1);
 }
 let arr1=[-2,3,-9,78,56,2,5,19,10]
 insertion_sort_descending(arr1);
 