function PowersofTwo(num) {
    a = 0;
    b = []
    for (var i = 0; i <= num; i++) {
        a = i
        b.push(a)
    }
    var power = b.filter(function(elem, index, array) {
        return Math.pow(2, elem) === num
    })

    if (Math.pow(2, power) === num) {
        return true
    }
    return false
}
console.log(PowersofTwo(8))
