function solution(N) {
  largest = ""
  arr = []
  num = N.toString()
  for (var i = 0; i <num.length; i++ ){
    arr.push(num[i])
  }
  arr.sort().reverse()
  for (digit of arr){
    largest += digit
  }
  
  //the solutiojn is looking for the largest instance of the family this is similar to a sorting problem
  //so i could just treat the number as a string ans sort from largest to smallest
  //could put each digit into a dictionary and pull out the largest
  //could find all possible arrangments and iterate through them to find the largest... this seems really ineficient
  // write your code in JavaScript (Node.js 6.4.0)

  largest = parseInt(largest)
  console.log(largest)
  return largest
}

solution(93913263547)

