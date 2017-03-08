function FirstRreverse(str) {
    let output = "";
    for (let i = str.length - 1; i >= 0; i--) {
        output = output + str.charAt(i)
    }
    return output;
}
console.log(FirstRreverse("coderbyte"))
