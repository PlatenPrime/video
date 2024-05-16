function roundToNextMultipleOf5(number) {
    return Math.ceil(number / 5) * 5;
}

// Приклади
console.log(roundToNextMultipleOf5(0));   // Вивід: 0
console.log(roundToNextMultipleOf5(2));   // Вивід: 5
console.log(roundToNextMultipleOf5(3));   // Вивід: 5
console.log(roundToNextMultipleOf5(12));  // Вивід: 15
console.log(roundToNextMultipleOf5(21));  // Вивід: 25
console.log(roundToNextMultipleOf5(30));  // Вивід: 30
console.log(roundToNextMultipleOf5(-2));  // Вивід: 0
console.log(roundToNextMultipleOf5(-5));  // Вивід: -5
