function fibonacci(N){
  let lo = 0, l1 = 1
  let result = "";
  let sequence = [0];
  for (let i = 1; i <= N ; i++){
    result = lo + l1
    lo = l1;
    l1 = result;
    sequence.push(result)
  }// this gives the Lucas sequence series
  
  return sequence
}
console.log(fibonacci(10)) 
