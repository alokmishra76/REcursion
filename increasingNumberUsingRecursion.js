function printIncreasingNumberUsingRecursion(n) {
  if (n === 0)
    return;
  printIncreasingNumberUsingRecursion(n - 1);
  console.log(n);
}
 printIncreasingNumberUsingRecursion(8);
