function rFact(num) {
    if (num === 0) return 1;
    else return num * rFact(num - 1);
}

function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(rFact(5));
console.log(fibonacci(10));