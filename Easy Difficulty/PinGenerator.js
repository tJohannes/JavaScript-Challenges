function PIN(length) {
    let code = "";
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * 10) //Multiplying by 10 gives you num ber >= 0 && < 10
        code = code + rand
    }
    return code
}
console.log(PIN(4))
