//Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 
function RunLength(str) {
  let arr = str.split("");
  let holder = [];
  count = 1;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i + 1]){
      count ++;
    }
    else {
     holder.push(count,arr[i])
    count = 1
    }
  }
  return holder.join("")
}
console.log(RunLength("abbabbbb"))
