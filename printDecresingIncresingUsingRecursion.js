function printDecresingIncreasingUsingRecursion(n) {
  if (n === 0)
    return;
  console.log(n);
   printDecresingIncreasingUsingRecursion(n - 1);
  console.log(n);
}
 printDecresingIncreasingUsingRecursion(8);

