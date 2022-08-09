function printZigZag(n) {
  if (n === 0) {
    return
  }
  console.log(n);
  printZigZag(n-1);
  console.log(n);
  printZigZag(n-1);
  console.log(n);
}
printZigZag(2);

// output:- 2,1,1,1,2,1,1,1,2
