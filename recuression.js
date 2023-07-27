function recressionSample(number) {
  if (number <= 1) {
    return number;
  }

  var num = recressionSample(number - 1);
  var num2 = recressionSample(number - 2);
  var num3 = recressionSample(number - 3);

  return num + num2 + num3;
return num+num2;
}

console.log(recressionSample(3));
 