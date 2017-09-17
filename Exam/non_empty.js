function solution(A) {
  longest = 0
  for (var i = 0; i < A.length; i++){
    elem = A[i]
    count = 0
    for (var j = i; j < A.length; j++){
      if (A[j] >= elem - 1 && A[j] <= elem+1){
        count++
      }
      if (count > longest){
        longest = count
      }
    }

  }
  // write your code in JavaScript (Node.js 6.4.0)\
  console.log(longest)
  return(longest)
}

arr = [6,10,6,9,7,8,6,11,12,11,12,11,12,13]

solution(arr)