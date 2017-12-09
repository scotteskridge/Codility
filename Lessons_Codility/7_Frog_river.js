function solution(X, A) {
  // write your code in JavaScript (Node.js 6.4.0)
  //start with a path that has no steps filled
  let path = 0
  leaves = {}
  //iterate through the arr and look for steps
  for (let i in A){
    //if we havent seen the step yet and the step is less than our length then increment our path and add the step to our dict of leaves
    if (!leaves[A[i]] && A[i] <= X){
      path +=1
      leaves[A[i]] = 1
      //after we have done that see if we can break early
      if (path >= X){
        return parseInt(i)
      }
    } 
  }
  return -1
}


//    [0,1,2,3,4,5,6,7] k = 6 so it takes 6 seconds for a leaf to be at every position from 0 - 5
arr = [1,1,1,1,3,1,4,2,3,5,4]
length = 5

console.log(solution(length, arr))