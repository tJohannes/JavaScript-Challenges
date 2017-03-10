//Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 

function PalindromeTwo(str) { 
  let arr = str.match(/\w/g)
  
  let joined = arr.join("").toLowerCase()
  let reversed = "";
  for (let i = joined.length - 1; i >= 0; i--){
    reversed = reversed + joined[i]
  }
  return joined === reversed
}
console.log(PalindromeTwo("Noel - rasar Leon "))  
