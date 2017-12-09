function solution(N, A) {
  // write your code in JavaScript (Node.js 6.4.0)

 let out = new Array(N).fill(0)
 let m = 0
 let last = 0
 for (i of A){
   i -= 1
   if (i == N){
     last = m
   }
   if (out[i] >= 0){
     out[i] = Math.max(out[i], last) + 1
   }
   m = Math.max(m , out[i])
   console.log("A[i] is " + (i+1) + " max is " + m + " output is " + out)
 }
 for (i in out){
   out[i] = Math.max(out[i], last)
 }
  // iterate through all elements of A
 return out
}
let int = 5 //if K is greater than int then set all counters to max of any one counter
let my_array = [3,4,4,6,1,4,4]

console.log(solution(int, my_array))

// for (let i in A){ //////////////pulling out my old code/////////////////
  
//   //if A[i] > than n then set all values to max
//   if (A[i] > N){
//     set = max
//   } else {
//     arr[A[i]-1] +=1
//     if (arr[A[i]-1] > max){
//       max = arr[A[i]-1]
//     }
//   }
//   console.log("A[i] is " + A[i] + " max is " + max + " arr is " + arr)
// }
// arr = arr.map(x => x + set)

//  return arr
// }
