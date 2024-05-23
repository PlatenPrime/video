const arr1 = [1, 2, 3, 4, 5, 6]
console.log(arr.slice(1, 3))




const arr = [1, 2, 3, 3, 3, 4, 5, 6]
const arr2 = arr.filter(
    (data) => { return data !== 3 }
)
console.log(arr2.length)





// Клас God з методом create, 
//який створює масив з екземплярами Man та Woman
class God {
    /**
     * @returns {Human[]} Повертає масив з екземплярами Human (Man та Woman)
     */
    static create() {
        return [new Man(), new Woman()]; 
        // Повернення масиву з об'єктами Man і Woman
    }
}

// Клас Human - базовий клас для Man та Woman
class Human {
    // Базовий клас не має жодних властивостей чи методів в даній реалізації
}

// Клас Man успадковує від Human
class Man extends Human {
    constructor() {
        super(); 
        // Виклик конструктора базового класу Human
        this.gender = 'male'; 
        // Встановлення властивості gender як 'male'
    }
}

// Клас Woman успадковує від Human
class Woman extends Human {
    constructor() {
        super(); 
        // Виклик конструктора базового класу Human
        this.gender = 'female'; 
        // Встановлення властивості gender як 'female'
    }
}

// Тестування методу create класу God
const [adam, eve] = God.create();
console.log(adam instanceof Man);   
// Перевірка, чи adam є екземпляром Man - очікується true
console.log(eve instanceof Woman);  
// Перевірка, чи eve є екземпляром Woman - очікується true
console.log(adam instanceof Human); 
// Перевірка, чи adam є екземпляром Human - очікується true
console.log(eve instanceof Human);  
// Перевірка, чи eve є екземпляром Human - очікується true
console.log(adam.gender); 
// Виведення gender adam - очікується 'male'
console.log(eve.gender);  
// Виведення gender eve - очікується 'female'
