// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. 
function PrimeTime(num){
  // prime number is positive inigeres has factor one and itself
  if(num < 2){return false};
  for (let i = 2; i < num; i++){
    if (num % i === 0){
      return false
    }
  }
  return true;
}
console.log("01.", PrimeTime(3)) // should reurn true
