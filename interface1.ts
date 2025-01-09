interface People {
    name: string;
    age: number;
}

class Manager implements People {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

 let users = new Manager("John", 30);
console.log(users.age); // Output: 30
