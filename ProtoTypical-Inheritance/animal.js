//1. Create a base object Animal and derive Dog and Cat objects from it. Include methods that demonstrate inheritance.
//2. Add a method to the base class that all derived classes must implement.

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method that must be implemented by derived classes
    makeSound() {
        throw new Error('This method must be implemented by derived classes');
    }

    // Common method
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Derived class Dog
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the constructor of the base class
    }

    // Implementing the makeSound method
    makeSound() {
        console.log(`${this.name} says: Woof!`);
    }
}

// Derived class Cat
class Cat extends Animal {
    constructor(name) {
        super(name); // Call the constructor of the base class
    }

    // Implementing the makeSound method
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}

// Example usage
const dog = new Dog('Buddy');
dog.eat();         // Output: Buddy is eating.
dog.makeSound();   // Output: Buddy says: Woof!

const cat = new Cat('Whiskers');
cat.eat();        // Output: Whiskers is eating.
cat.makeSound();  // Output: Whiskers says: Meow!
