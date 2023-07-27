function sort(arr){
    if(arr.length<=1){
        return arr;
    }
    const pivot=arr[Math.floor(arr.length/2)];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else if(arr[i]>pivot){
            right.push(arr[i]);
        }
    }
    return [...sort(right),pivot,...sort(left)]

}
  
let arr=[45,89,-23,0,67,65];
console.log(sort(arr));


