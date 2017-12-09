// def max_subarray(A):  ////PYTHON////
//     max_ending_here = max_so_far = A[0]
//     for x in A[1:]:
//         max_ending_here = max(x, max_ending_here + x)
//         max_so_far = max(max_so_far, max_ending_here)
//     return max_so_far

function max_subarray(A){
    let max_ending_here = A[0]
    let max_so_far = A[0]

    for (let i = 1; i < A.length; i++){
        max_ending_here = Math.max(A[i], max_ending_here + A[i])
        // console.log(max_ending_here)
        max_so_far = Math.max(max_so_far, max_ending_here)
        // console.log(max_so_far)
    } 

    return max_so_far
}

let sample = [-2,-3,4,-1,-2,1,5,-3,2,-1,4]

console.log(max_subarray(sample))