function greatest_common_factor(num1,num2){
  
for (let i = num1; i <= num2;){
      if(num1 % i === 0 && num2 % i === 0){
      return i
    } 
}
    return "No GCF available"
  }
console.log("18. ", greatest_common_factor(5,15))
