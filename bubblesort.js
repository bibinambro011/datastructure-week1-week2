let arr = [56, 7, 85, 6, 2, 1, 5, 2, 5, 8];
let len = arr.length;

for (var i = 0; i < len; i++) {
  for (var j = 0; j < len; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
