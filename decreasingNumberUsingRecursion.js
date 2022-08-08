function printDescendingNumberUsingRecursion(data) {
  if (data === 0)
    return;
  console.log(data);
  printDescendingNumberUsingRecursion(data - 1);
}
 printDescendingNumberUsingRecursion(8);
