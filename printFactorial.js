function printFctorial(n){
  if(n === 1)
    return 1;
  let fact = n * printFctorial(n-1);;
  return fact;
}
res = printFctorial(4);
console.log(res);
