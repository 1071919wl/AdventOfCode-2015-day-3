// function countDown(num) {
//     // base case
//     if (num === 0) {
//         console.log("Houston, we have lift-off!");
//         return;
//     }
//
//     // recursive case
//     console.log(num);
//     countDown(num - 1);
// }
//
// countDown(10)
//
// function countDown2(num){
//     for(var i=num; i>=0; i--){
//       if (i==0){
//         console.log("Lift off")
//       }else{
//         console.log(i)
//       }
//   }
// }
// countDown2(10)

//
// function factorial(num){
//   total=1
//   for (var i=num; i>=1; i--){
//     total=total*i
//   }
//   console.log(total)
// }
// factorial(5)

// function factorial(n){
//   if (n===1){
//     return 1;
//   }
//   return n*factorial(n-1)
// }
// console.log(factorial(5))



function fib(n){
  if(n===1 || n===2){
    return 1;
  }
  return fib(n-1)+fib(n-2);
}
console.log(fib(5))