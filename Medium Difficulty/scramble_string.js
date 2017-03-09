
function scramble_string(str, pos){
  var result = "";
  for (var i = 0; i < pos.length; i++){
    
    result = result + str.charAt(pos[i])
  }
  return result
}
console.log("14. ", scramble_string("abcd", [3, 1, 2, 0])) //dbca
