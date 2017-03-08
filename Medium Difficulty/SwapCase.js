function SwapCase(str) {
    var a = str.split("")
    for (var i = 0; i < a.length; i++) {
        if (a[i] === a[i].toUpperCase()) {
            a[i] = a[i].toLowerCase()
        } else if (a[i] === a[i].toLowerCase()) {
            a[i] = a[i].toUpperCase();
        }
    }
    return a.join("")
}
console.log("1. ", SwapCase("Hello World"))
