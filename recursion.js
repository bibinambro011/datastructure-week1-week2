i=0;
function show(x){
   if(x==1){
    return x;
   }else{
    return x*show(x-1);
   }

}
console.log(show(1))