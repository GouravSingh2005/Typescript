"use strict";
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let users = new Manager("John", 30);
console.log(users.age); // Output: 30
