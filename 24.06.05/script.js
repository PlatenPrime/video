



const checkApprox = (num1, num2, diapason) => {
    return Math.abs(num1 - num2) < diapason;
}

console.log(checkApprox(10.003, 10.006, 0.005));
// true

console.log(checkApprox(2435, 2432, 2));
// false