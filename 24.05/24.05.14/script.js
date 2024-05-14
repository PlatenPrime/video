const {name, value, id} = data




const [value1, value2, value3] = data




function kmPerHourToCmPerSec(speedInKmPerHour) {
    // 1 км = 100000 см, 1 година = 3600 с
    return Math.floor(speedInKmPerHour * 100000 / 3600);
}

// Приклад використання:
console.log(kmPerHourToCmPerSec(1.08)); // Виведе: 30