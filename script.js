//No.1
// const person = {
//     name: 'Jihad',
//     age: 15,
//     prof: 'programmer'
// };

// // Destructuring to extract name and age
// const { name, age } = person;

// console.log(name); // Output: jihad
// console.log(age);  // Output: 15


// no. 2

//Problem: Create a module that exports a function to calculate the area of a circle and import it into another file


//no.3

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     // Method to calculate the area
//     calculateArea() {
//         return this.width * this.height;
//     }
// }

// // Example usage
// const myRectangle = new Rectangle(10, 5);
// console.log(`Width: ${myRectangle.width}`);    // Output: Width: 10
// console.log(`Height: ${myRectangle.height}`);  // Output: Height: 5
// console.log(`Area: ${myRectangle.calculateArea()}`); // Output: Area: 50


//no. 4

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     // Getter for fullName
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     // Setter for fullName
//     set fullName(name) {
//         const parts = name.split(' ');
//         if (parts.length === 2) {
//             this.firstName = parts[0];
//             this.lastName = parts[1];
//         } else {
//             console.error('Full name must include both first and last names.');
//         }
//     }
// }

// // Example usage with Bangladeshi names
// const person = new Person('Rahul', 'Chowdhury');

// // Accessing the fullName property using the getter
// console.log(person.fullName); // Output: Rahul Chowdhury

// // Setting a new fullName using the setter
// person.fullName = 'Ayesha Siddiqui';
// console.log(person.fullName); // Output: Ayesha Siddiqui

// // Attempting to set an invalid fullName
// person.fullName = 'Ayesha'; // Output: Full name must include both first and last names.
// console.log(person.fullName); // Output: Ayesha Siddiqui (unchanged)


// no. 5
// Class expression for Circle
const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }

    // Method to calculate the circumference
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
};

// Example usage
const myCircle = new Circle(10); // Create a Circle instance with radius 10
console.log(`Radius: ${myCircle.radius}`); // Output: Radius: 10
console.log(`Circumference: ${myCircle.calculateCircumference()}`); // Output: Circumference: 62.83185307179586


//no. 6

// Variables to use as property names
const firstNameKey = 'firstName';
const lastNameKey = 'lastName';

// Values to assign to those properties
const firstNameValue = 'John';
const lastNameValue = 'Doe';

// Create an object with computed property names
const person = {
    [firstNameKey]: firstNameValue,
    [lastNameKey]: lastNameValue
};

console.log(person);
// Output: { firstName: 'John', lastName: 'Doe' }


//mno. 7

// Base class Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method to make the animal speak
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class Dog that inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        // Call the constructor of the base class
        super(name);
        this.breed = breed;
    }

    // Override the speak method
    speak() {
        console.log(`${this.name} barks.`);
    }

    // Method specific to Dog
    fetch() {
        console.log(`${this.name} is fetching the ball.`);
    }
}

// Example usage
const myDog = new Dog('Rex', 'Labrador');

// Call methods from both the base class and the derived class
myDog.speak(); // Output: Rex barks.
myDog.fetch(); // Output: Rex is fetching the ball.

// Access properties
console.log(`Name: ${myDog.name}`); // Output: Name: Rex
console.log(`Breed: ${myDog.breed}`); // Output: Breed: Labrador


//no. 8

class Shape {
    constructor() {
        // Check if the Shape class is being instantiated directly
        if (new.target === Shape) {
            throw new Error('Cannot instantiate abstract class Shape directly.');
        }
    }

    // Abstract method (to be implemented by derived classes)
    getArea() {
        throw new Error('Method getArea() must be implemented by derived classes.');
    }
}

// Derived class Rectangle
class Rectangle extends Shape {
    constructor(width, height) {
        super(); // Call the base class constructor
        this.width = width;
        this.height = height;
    }

    // Implement the getArea method
    getArea() {
        return this.width * this.height;
    }
}

// Derived class Circle
class Circle extends Shape {
    constructor(radius) {
        super(); // Call the base class constructor
        this.radius = radius;
    }

    // Implement the getArea method
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Example usage
try {
    const shape = new Shape(); // This will throw an error
} catch (e) {
    console.error(e.message); // Output: Cannot instantiate abstract class Shape directly.
}

const rectangle = new Rectangle(10, 5);
console.log(`Rectangle area: ${rectangle.getArea()}`); // Output: Rectangle area: 50

const circle = new Circle(7);
console.log(`Circle area: ${circle.getArea()}`); // Output: Circle area: 153.93804002589985


//no . 9

class MathUtil {
    // Static method to calculate the square of a number
    static square(number) {
        return number * number;
    }
}

// Example usage
const result = MathUtil.square(5); // Call the static method directly on the class
console.log(result); // Output: 25


// no. 10

// Create a symbol
const uniqueKey = Symbol('uniqueKey');

// Create an object with the symbol as a property key
const myObject = {
    [uniqueKey]: 'This is a unique value'
};

// Access the value using the symbol key
console.log(myObject[uniqueKey]); // Output: This is a unique value

// Demonstrate that symbols are unique and cannot be accessed by string keys
const anotherSymbol = Symbol('uniqueKey');
console.log(myObject[anotherSymbol]); // Output: undefined

// Show all property keys of the object, including symbols
console.log(Object.getOwnPropertySymbols(myObject)); // Output: [ Symbol(uniqueKey) ]
