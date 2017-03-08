function LetterChange(str) {

    var letters = str.replace(/[a-z0-9]/gim, function(char) {
        return (char === "z" || char === "Z")
            ? "a"
            : String.fromCharCode(char.charCodeAt(0) + 1);
    })

    var vowels = letters.replace(/[a,e,i,o,u]/gim, function(vowel) {
        return vowel.toUpperCase();
    })

    var str = vowels.split(" ");

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1)
    }

    return str.join(" ");
}
console.log(LetterChange("a John Smith plizzy lizzay"))
