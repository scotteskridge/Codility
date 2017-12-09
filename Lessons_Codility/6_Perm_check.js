function solution(A){
  perm = [1]

  for (i = 0; i < A.length; i++){
    perm[A[i]] = perm[A[i]] + 1 || 1
  }

  for (i of perm){
    if (i !=1){
      return 0
    }
  }  
  return 1
}


function solution2(A) {
  const N = A.length;
  return Number(new Set(A).size === N && Math.max(...A) === N);
}

sample = [4,1,3,2]
console.log(solution(sample))
console.log(solution2(sample))