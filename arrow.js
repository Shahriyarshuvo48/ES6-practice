// new way to learn function
const doubleIt = (num) => num * 2;
const add = (x,y) => x + y ;
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doubleIt(5);
console.log(result);
const result1 = add(5,10);
console.log(result1);
const result3 = doMath(7,5);
console.log(result3);