function sum(arr){
  return arr.reduce((total, element) => total+element,0)
}

function swap(A, B, m){
  let n = A.length
  let sum_a = sum(A)
  let sum_b = sum(B)
  let diff = sum_b - sum_a
  
  if (diff % 2 == 1){  //why does this return false if the difference is odd?
    return false
  }
  diff = Math.floor(diff/2) // javascript doesnt have a built in floor divide operator
  // count = counting(A,m)
  // console.log(counting)
  for (i =0; i<n; i++){
    // if (0 <= B[i] - diff && B[i] - diff <= m && count[B[i] - diff] > 0){
    //   return True
    //   }  Not sure I understand wah this code is supposed to do since its not my solution

    return diff
    }
  }

arr1 = [1,1,1,3]
arr2 = [1,1,6]
console.log(swap(arr1, arr2, 2))


