function solution(T) {
   //so i want a current set of values that I'm going to update with obj.x
  let max = 0 // max needs to be updated once the recursion hits a null
  let count = 0  //Object.keys(currSet).length)
  let node = T // intialize node as the root
  let currSet = {}

  //T is a tree we are returning the max num of distinct values this will be a count
  // because we are dealing with a binary tree i feel like may need recursion

  //node.x == the value
  //node.l == left node in tree
  //node.r == right node in tree

  // Tree obj is an Object with attributes
  // obj.x - type: int
  // obj.l - type: Tree
  // obj.r - type: Tree

  // so we could either go through every single branch iterativly and increment max... that feel hard

  //i could do this in 2 stages one recursive stage to return an array of arrays containing all the distinct elements
  //and then a second stage to determine the max count of those sub arrays

  //so i could pass around an obj and then just iterate through all of the object to find the one with the max length
  function findDistinct(node, count, max, currSet){
    if (!node) return
    currSet[node.x] = 1
    count = Object.keys(currSet).length
    console.log("the count is " + count)
     
  
  if (node.l == null){ //so if you can't traverse left any further compare count to max and update max if needed
    if (count > max){
      max = count;
    }
  }

  if (node.l){
    max = solution(node.l, count, max, currSet)
  }

  if (node.r == null){ //so if you can't traverse left any further compare count to max and update max if needed
    if (count > max){
      max = count;
    }
  }

  if (node.r){
    max = solution(node.r, count, max, currSet)
  }
  //if there is either a left or a right push thisnode.x into currSet
  if (node.l != null || node.r != null){
    currSet[node.x] = 1; //setting the value to one is meaningless not interested in the value  
  } 
  return max
}

  max = findDistinct(node, count, max, currSet)
  // console.log(`currset length is ${Object.keys(currSet).length}`) // this will return the count of the number of elements in an object/dictionary/hash
  console.log(`max is ${max}`)
  return(max)
}

let tree = {
  x : 10,
  r : null,
  l : null
}

let node_l1 = {
  x : 9,
  r : null,
  l : null
}
let node_l2 = {
  x : 8,
  r : null,
  l : null
}
let node_r1 = {
  x : 72,
  r : null,
  l : null
}
let node_r2 = {
  x : 6,
  r : null,
  l : null
}
tree.l = node_l1
node_l1.l = node_l2
node_l2.r = node_r1
tree.r = node_r2

solution(tree)