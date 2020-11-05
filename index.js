// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false

// const isObjectEmpty = function (obj) {
//     const keys = Object.keys(obj);
//     console.log(keys);
//     console.log(keys.length);
//     if (keys.lenght === 0) return true;
//     return false;
        
    
// }

// console.log(isObjectEmpty({}));
// console.log(isObjectEmpty({ name: 'user', age: 21 }));

// // == task-3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
const SIZES = {
BIG: { price: 25, cal: 100, time: 15 },
SMALL : { price : 15, cal: 50, time: 7 },
MEDIUM: { price : 15, cal: 50, time: 7 }
}
const STUFFING = {
CHEESE: {name: "CHEESE", price : 6.5, cal: 45, time: 2 },
BEACON : { price : 10, cal: 70, time: 6 },
TOMATO : { price : 12.1, cal: 4, time: 5 },
CHICKEN : { price : 9.3, cal: 30, time: 5.1 }
}
const SAUCES = {
MUSTARD: { name:"KETCHUP", price : 3, cal: 5, time: 1 },
KETCHUP: { name:"KETCHUP", price : 4.2, cal: 20, time: 1.5 },
    BOLOGNESE: { name:"KETCHUP", price: 7.5, cal: 50, time: 3 },
}


// Створити всі методи і перевірити чи вони працюють 


const pizza = {
    size: 0,
    stuff:[],
    sauces: [],
    isValid: false,
        
    toShowSize() { 
        console.log(this.size)
    },
    setStuff(value) {
        if (this.stuff.includes(value)) return console.log("This stuffing already exists")
        this.stuff.push(value)
        console.log(this.stuff)
    },
    
    setSauces(value) { if (this.sauces.includes(value)) return console.log("This ${value.name} already exists")
        this.sauces.push(value)
        console.log(this.sauces)},
    
    delStuff(value) {
        if (!this.stuff.includes(value)) return console.log("This stuffing doesn´t exist")
        for (let i = 0; i < this.stuff.length; i += 1) {
            if (this.stuff[i] = value) {
                this.stuff.splice(i, 1)
                return console.log(this.stuff)
            }
            
        }
        
       
    },
    delSauces(value) { 
        if (!this.sauces.includes(value)) return console.log("This sauces doesn´t exist")
        for (let i = 0; i < this.sauces.length; i += 1) {
            if (this.sauces[i] = value) {
                this.sauces.splice(i, 1)
                return console.log(this.sauces)
            }
            
        }
        
    },

    getCost(num) { 
        for (let i = 0, i < this.sauces.length; i += 1) {
            
             console.log(this.slice.price)
        console.log(this.stuff.price)
            console.log(this.sauces.price)
            console.log(elem.price)
        }
       
    },
    getCallories() { },
    
    toShowOder() { },
    toSetSize() { },

    toGetTotalTime() { },
    
    toValidateOrder () { },
}

console.log(pizza)
pizza.setStuff(STUFFING.CHEESE)
pizza.setStuff(STUFFING.BEACON)
pizza.setStuff(STUFFING.CHEESE)
pizza.setSauces(SAUCES.KETCHUP)
pizza.setSauces(SAUCES.MUSTARD)
pizza.delStuff(STUFFING.CHEESE)
pizza.delStuff(STUFFING.TOMATO)
pizza.delSauces(SAUCES.MUSTARD)
pizza.getCost()