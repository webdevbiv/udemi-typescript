function add(num1, num2) {
    return num1 + num2;
}
// if function returns void
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
var combineValues = add;
console.log(combineValues(8, 8));
// let someVariable: undefined;
