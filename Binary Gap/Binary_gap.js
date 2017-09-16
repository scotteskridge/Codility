function solution(N){
  // convert N to binary
  bin = N.toString(2)
  //intialize vars for curr gap and max gap
  currGap = 0
  maxGap = 0
  inGap = false
  // iterate through the binary N starting at the right smallest digit
  // so i didnt test all my edge cases about not starting to count until i see the first 1
  //in the case where there are many trailing 0's this fails
  // so i do need an in gap flag
  for (var i = bin.length; i >=0; i--){  
    //a bin gap is defined as a 1 on either side so...
    //if see a 1 I can compare the max to the curr and reset the curr to 0
    
    if (bin[i] == 1 ){
      inGap = true
      if (currGap > maxGap) {
        maxGap = currGap
      }
      currGap = 0     
    } else if (bin[i] == 0 && inGap == true){ //if i dont see a 1 then increment gap
      currGap++
    }
    
    console.log(`max gap is ${maxGap} and currGap is ${currGap}`)

    
  }
  
  console.log(`max gap is ${maxGap}`)
  console.log('------------------------------------');
  console.log(bin);
  console.log('------------------------------------');
  return maxGap
}


solution(15)