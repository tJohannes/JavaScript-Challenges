// Even Lucas Sum  
// Write in javascript language that takes an integer argument N and returns the sum of the first N + 1     even Lucas Numbers. Let N = 50 and Lo = 2, L1 = 1 and Ln := Ln-1

function evenLucasSum(N){
  let lo = 2, l1 = 1
  let result = "";
  let sequence = [2,1];
  for (let i = 2; i <= N ; i++){
    result = lo + l1
    lo = l1;
    l1 = result;
    sequence.push(result)
  }// this gives the Lucas sequence series 2,1,3,4,7,11,18,29, ...
  
  let evenLucas = [];
  for (let i = 0; i < sequence.length; i++){
    if (sequence[i] % 2 === 0){
      evenLucas.push(sequence[i])
    }
  } // this return all even number of the series
  
  let sum = evenLucas.reduce(function(a,b){
    return a + b
  })
  return sum
}
console.log(evenLucasSum(50)) 
