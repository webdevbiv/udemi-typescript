function add(num1: number, num2: number): number {
  return num1 + num2;
}

// if function returns void
function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// function types
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someVariable: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
