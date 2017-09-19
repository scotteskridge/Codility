function solution(A) {
  let longest = 0
  let myList = {}
  let curr = 0
  for (var i = 0; i < A.length; i++){
   curr = A[i]
   console.log(curr)
    if (!myList.curr){
      myList[curr] = 1      
    } else {
      console.log("Igot here")
      myList[curr] =myList[curr] + 1
    }

  }

  // write your code in JavaScript (Node.js 6.4.0)\
  console.log(myList)
  console.log(longest)
  return(longest)
}

arr = [6,10,6,9,7,8,6,11,12,11,12,11,12,13,12,12,12,12]

solution(arr)