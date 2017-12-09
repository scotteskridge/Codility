//count from 1 to 1000 keep a increment for 3 for 5 and for 15


function solution(n){
  let fizz = 3
  let buzz = 5
  let fizzBuzz = 15
  for (let i =0; i < n; i++){
    if (fizzBuzz == 0){
      console.log("fizz buzz")
      fizzBuzz = 14
      fizz =2
      buzz =4
    } else if (buzz == 0){
      console.log("buzz")
      buzz = 4
      fizz -=1
      fizzBuzz -=1
    }else if (fizz == 0){
      console.log("fizz")
      fizz = 2
      buzz -=1
      fizzBuzz -=1
    } else {
      console.log(i)
      fizz -=1
      buzz -=1
      fizzBuzz -=1
    }
    // console.log(i)
  }
}

// solution(46)

function countingUp(n){
  let threes = 1
  let fives = 1
  ans = []
  // let fizzBuzz = 1

    for (i =1; i <=n; i++){
      if (threes == 3 && fives == 5){
        ans.push(i)
        threes = 1
        fives =1
      }
      else if (threes == 3){
        ans.push(i)
        threes = 1
        fives +=1
      } else if (fives == 5) {
        ans.push(i)
        fives = 1
        threes += 1
      } else {
        threes += 1
        fives += 1
      }
    }
    console.log(ans)
}

countingUp(46)