const sum = [1, 2, 3].reduce(add,0);
const sum1 = [1, 2, 3,4,5].reduce(add,0); // with initial value to avoid when the array is empty
function add(accumulator, a) {
    return accumulator + a;
}

console.log(sum); 
console.log(sum1); 