function merge_sort(arr){
    if(arr.length<2){
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    const leftarray=arr.slice(0,mid);
    const rightarray=arr.slice(mid);
    return merge(merge_sort(leftarray),merge_sort(rightarray))
}
function merge(leftarray,rightarray){
    const sortedarray=[];
    while(rightarray.length && leftarray.length){
        if(leftarray[0]<=rightarray[0]){
            sortedarray.push(leftarray.shift());
        }else{
            sortedarray.push(rightarray.shift());
        }
        
    }
    return [...sortedarray,...leftarray,...rightarray]
}
let arr=[2,0,-4,89,-67,2,68,77];
console.log(merge_sort(arr));