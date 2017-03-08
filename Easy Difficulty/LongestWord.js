function LongestWord(sen) {
    var output = sen.split(" ");
    var words = "";
    for (var i = 0; i < output.length; i++) {
        if (output[i].length > words.length) {
            words = output[i]
        }
    }
    return words;
}
console.log(LongestWord("sam Argument goes in here "))
