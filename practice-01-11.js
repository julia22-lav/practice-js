// Module 5, Task 1


// const btnPlus = document.getElementById('plus');
// const btnMinus = document.getElementById('minus');
// const btnMult = document.getElementById('mult');
// const btnShare = document.getElementById('share');

// const first = document.getElementById('firstNum');
// const second = document.getElementById('result');

// class calc{
// toGetNumbers(tag1, tag2) {
//         this.firstValue = +prompt('Enter the first value')
//         this.secondValue = +prompt('Enter the second value')
//         tag1.textContent = this.firstValue;
//         tag2.textContent = this.secondValue;
//     };

//     toSum(place, tag1, tag2) {
//         this.toGetNumbers(tag1, tag2)
//         let total = this.firstValue + this.secondValue;
//         this.toShowResult(place, total);
//     };

//     toSub(place, tag1, tag2) {
//         this.toGetNumbers(tag1, tag2)
//         let total = this.firstValue - this.secondValue;
//         this.toShowResult(place, total);
//     }

//     toMult(place, tag1, tag2) {
//         this.toGetNumbers(tag1, tag2)
//         let total = this.firstValue * this.secondValue;
//         this.toShowResult(place, total);
//     }

//     toShare(place, tag1, tag2) {
//         this.toGetNumbers(tag1, tag2)
//         let total = this.firstValue / this.secondValue;
//         this.toShowResult(place, total);

//     }

//     toShowResult(place, value) {
//     // alert('Operation Result: ${value}')
//         place.textContent = value;
// }
// }

// const myCalc = newCalc();
// console.log(myCalc);

// btnPlus.addEventListener('click', () => {
//     myCalc.toSum(result, first, second)
// })

// btnPlus.addEventListener('click', () => {
//     myCalc.toSub(result, first, second)
// })

// btnPlus.addEventListener('click', () => {
//     myCalc.toMult(result, first, second)
// })

// btnPlus.addEventListener('click', () => {
//     myCalc.toShare(result, first, second)
// })

// Module 5, Task 2

class Library {
    constructor() {
        this.favourite = [];
        this.books = [];
    }
    toBuy(book) {
        if (this.books.includes(book)) {
            alert('This book already exists')
        }
        this.books.push(book)
    
    }
    
    toSell(bookName) { 
       this.books.forEach(({name}, idx) => {
            if (name === bookName) {
    this.books.splice(idx, 1)
     } 
        })
        return this.books;
    }
    addToFavourite(bookName){
        const favouriteBook = this.books.find(({ name }) => name === bookName)
        this.favourite.push(favouriteBook)
        return this.favourite;
    } 
    
    removeFromFavoutite(bookName) {
      this.favourite.forEach(({name}, idx) => {
            if (name === bookName) {
    this.favourite.splice(idx, 1)
     } 
        })
        return this.favourite;  
    }

    get countFavoutiteBooks() {
        return this.favourite.length

    }

    getfinishedBook() {
        
    }

    totalCost() {
        
    }
}

class Book {
    constructor({ author, title, price, totalPages, currentPage = 0 }) {
        this.author = author;
        this.title = title;
        this.price = price;
        this.totalPages = totalPages;
        this.currentPage = currentPage;
    }

    read(amount) {
        return this.currentPage += amount;
    }
    
    get bookProgress() {
return this.currentPage * 100/ this.totalPages
    }
    set bookProgress(value) {
        this._currentPage = this.totalPages * value / 100;

    }
    
}

const myLibrary = new Library()
console.log(myLibrary);

myLibrary.toBuy({name: 'core JS', year: 2020 })
myLibrary.toSell('core JS')
myLibrary.toBuy({ name: 'react JS', year: 2020})

myLibrary.addToFavourite('react JS')

myLibrary.removeFromFavoutite('react JS')

console.log(myLibrary.countFavoutiteBooks)
const book = { author: "Repeta", title: "JS", price: 2000, totalPages: 234, currentPage: 123 };


const myBook = new Book(book)
console.log(myBook)

console.log(myBook.read(45));