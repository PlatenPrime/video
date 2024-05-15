function removeNumbers(input) {
    // Використовуємо регулярний вираз 
    //для заміни всіх цифрових символів на порожній рядок
    return input.replace(/\d/g, '');
}

// Тести
console.log(removeNumbers('! !')); 
// Вихід: '! !'
console.log(removeNumbers('123456789')); 
// Вихід: ''
console.log(removeNumbers('Це виглядає чудово!')); 
// Вихід: 'Це виглядає чудово!'
