// Тема "Объекты в JavaScript"

// 2 Пример описания объекта в JS:
let person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello!");
    }
};

// 3 Пример доступа к свойствам объекта:
console.log(person.name);
console.log(person["age"]);

// 4 Удаление свойства:
delete person.age;

// 5 Проверка существования свойства:
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // false

// 6 Перебор свойств объекта:
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Тема "ООП в JavaScript"

// 3 Пример синтаксиса класса:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

// 4 Создание объектов класса:
let john = new Person("John", 30);
john.greet(); // Hello, my name is John

// 5 Обращение к полям и методам:
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    introduce() {
        console.log("Hi, I'm " + this.name + " and I work as a " + this.position);
    }
}

let alice = new Employee("Alice", "developer");
alice.introduce(); // Hi, I'm Alice and I work as a developer

// 8 Геттеры и сеттеры:
class Car {
    constructor(brand) {
        this._brand = brand;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
}

let myCar = new Car("Tesla");
console.log(myCar.brand); // Tesla
myCar.brand = "BMW";
console.log(myCar.brand); // BMW


// 10 Примеры реализации базовых принципов ООП:

// Инкапсуляция:
class Product {
    #price; // Приватное поле
    constructor(name, price) {
        this.name = name;
        this.#price = price;
    }
    getPrice() {
        return this.#price;
    }
}

let product = new Product("Laptop", 1500);
console.log(product.getPrice()); // 1500


// Наследование:
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

let dog = new Dog();
dog.speak(); // Woof!


// Полиморфизм:
class Bird {
    speak() {
        console.log("Tweet");
    }
}
class DogPolymorph {
    speak() {
        console.log("Woof");
    }
}
function makeItSpeak(animal) {
    animal.speak();
}

makeItSpeak(new Bird()); // Tweet
makeItSpeak(new DogPolymorph());  // Woof