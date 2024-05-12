function nearestSq(n) {
    //  Calculate the square root of n
    let sqrt = Math.sqrt(n);
    // Round the square root to the nearest integer
    let nearestInteger = Math.round(sqrt);
    // Square the rounded value
    let nearestSquare = nearestInteger * nearestInteger;
    // Return the nearest square
    return nearestSquare;
}

// Test cases
console.log(nearestSq(111)); // Output: 121
console.log(nearestSq(144)); // Output: 144
console.log(nearestSq(81));  // Output: 81











function nearestSq(n) {
    // Розрахуйте квадратний корінь n
    let sqrt = Math.sqrt(n);
    // Округліть квадратний корінь до найближчого цілого числа
    let nearestInteger = Math.round(sqrt);
    // Піднесіть округлене значення до квадрату
    let nearestSquare = nearestInteger * nearestInteger;
    // Поверніть найближче квадратне число
    return nearestSquare;
}

// Перевіряємо тестові випадки
console.log(nearestSq(111)); // Вивід: 121
console.log(nearestSq(144)); // Вивід: 144
console.log(nearestSq(81));  // Вивід: 81