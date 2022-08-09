function calPowerMultiplication(x, n) {
  if(n === 0) {
    return 1
  }
  let a = calPowerMultiplication(x, n-1) ;
  let res = x * a;
  return res;  
  
}
finalRes = calPowerMultiplication(2, 3);
console.log(finalRes);
