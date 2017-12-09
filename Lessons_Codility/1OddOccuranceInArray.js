function solution(A) {
  let ans = 0
  let dict = {} //the key will store the int and the value will be the count


  // write your code in JavaScript (Node.js 6.4.0)
  //looking for linear complexity so no nested loops
  //i need to remember what values ive seen so I feel like i need a doctionary/obj
  //the problem is looking for constant space complexity so adding an additional obj fails that requirment
  //lets hack out the solution with a dict and then come back to it

  //go thropugh every element of the array and push it to a dict
  for (let num of A){
    //increment the dict for ever occourance of the element
    dict[num] = dict[num]+1 || 1
  }
 //go through the dict and if the value is 1 return it
  for (let key in dict){
    if (dict[key] == 1){
      console.log("the key is " + key)
      return parseInt(key)
    }
  }
}


function solution2(A) {
  var dict = {};

  for (var iA in A) {
    var element = A[iA];
      if (!dict[element]) {
        dict[element] = 1;
        // console.log(dict)
      } else {
        // console.log(dict)
        delete dict[element];
      }
  }
  // console.log(parseInt(Object.keys(dict)[0]))
  return parseInt(Object.keys(dict)[0]);
}

function solutionXor(A){
  let ans;
  for (let num of A){
    console.log(num)
    ans^=num
    console.log(ans)

  }
  console.log("the answer is "+ ans)
  return ans
}


let sample = [5,5,3] //expected output is 7 but the index is unimportant
solutionXor(sample)