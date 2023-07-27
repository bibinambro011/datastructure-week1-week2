let arr = [4, 7, 10, 24, 77, 88, 90, 100, 101];
let startindex = 0,
  finalindex = arr.length - 1;
function check(arr, target) {
  for (var i = startindex; i <= finalindex; i++) {
    let middleindex = Math.floor((startindex + finalindex) / 2);
    if (target === arr[middleindex]) {
      return middleindex;
    } else {
      if (target > arr[middleindex]) {
        startindex = middleindex + 1;
      } else {
        finalindex = middleindex - 1;
      }
    }
   
  }
  return -1;
}
console.log(check(arr, 4));
