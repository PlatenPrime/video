function getNumberFromString(s) {
    return Number(s.replace(/\D/g, '')) || 0;
}

// Приклад використання:
console.log(getNumberFromString('hell5o wor6ld')); 
// Виведе: 56
console.log(getNumberFromString('abc')); 
// Виведе: 0
console.log(getNumberFromString('123abc456')); 
// Виведе: 123456
