function FisrtLast(str) {
    var name = str.replace(/[^\w+]/g, " ")
    var normilized = name.replace(/(\w+)\s(\w+)/, "$2, $1")

    var capitalize = normilized.split(" ");
    for (var i = 0; i < capitalize.length; i++) {
        capitalize[i] = capitalize[i].slice(0, 1).toUpperCase() + capitalize[i].slice(1).toLowerCase()
    }
    return capitalize.join(" ")
}
var names = {
    user1: "jOhn smith",
    user2: "ali michael"
}
console.log("user1:", FisrtLast(names.user1), "user2:", FisrtLast(names.user2))
