function solution(A, K){
  //so if this doesnt need to be in place i can create a new array and populate it from the old one
  let ans = []
  for (let i = 0; i < A.length; i++){
    ans[(i+K)%A.length] = A[i]
  }
  return ans
}


let sample = [3, 8, 9, 7, 6]
solution(sample, 3)

// A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] rotate an array to the right k times
// For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].