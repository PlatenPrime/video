const arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr.pop())



const arr = ["arun", "rishi", "shivam", "raj"]
console.log(arr.sort())



function findCentury(year) {
    // Використання Math.ceil для округлення до найближчого цілого числа в більшу сторону
    return Math.ceil(year / 100);
}

// Приклади тестів
console.log(findCentury(1705));  // Виведе: 18
console.log(findCentury(1900));  // Виведе: 19
console.log(findCentury(1601));  // Виведе: 17
console.log(findCentury(2000));  // Виведе: 20
console.log(findCentury(2742));  // Виведе: 28
