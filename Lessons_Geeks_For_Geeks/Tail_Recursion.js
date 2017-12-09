function recPrint(n){
  if (n <= 0) {return}
  console.log(n)
  recPrint(n-1)
  
}

recPrint(5)

function recFact(n){
  if (n <= 1){
    return 1
  } else {
    return n*recFact(n-1)
  }

}
console.log(recFact(5))
