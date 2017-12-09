function solution(A){
  count = [1]

  for (i of A){
    if (i > 0){
      count[i] = 1
    }
  }

  for (let i =0; i < count.length; i++){
    if (count[i] === undefined){
      return i 
    } 
  }
  return (count.length)
}

test = [1,3,6,4,1,2]
console.log(solution(test))