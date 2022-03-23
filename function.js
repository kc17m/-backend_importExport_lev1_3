function calc(n1, n2, operator) {
    let res;
    switch (operator) {
        case "+":
            res = n1 + n2;
            break;
        case "-":
            res = n1 - n2;
            break;
        case "/":
            res = n1 / n2;
            break;
        case "*":
            res = n1 * n2;
            break;
        default:
            operator !== "+" || operator !== "-" || operator !== "/" || operator !== "*" ? res = "error" : res = "success";
    }
    return res;
}

//console.log(calc(2, 4, "üüü"))

module.exports = { calc }