
// Prototypal Inheritance
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sound() {
      console.log("The animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    sound() {
      console.log("The dog barks.");
    }
  }
  
  // Advanced Working with Functions
  function add(x, y) {
    return x + y;
  }
  
  function curryAdd(x) {
    return function(y) {
      return add(x, y);
    };
  }
  
  const addThree = curryAdd(3);
  console.log(addThree(4)); 
  
  // Classes
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    area() {
      return this.height * this.width;
    }
  }
  
  const rect = new Rectangle(4, 5);
  console.log(rect.area()); 
  
  // Event Loops
  console.log("Start");
  
  setTimeout(function() {
    console.log("Timeout");
  }, 2000);
  
  console.log("End");
  
  // Data Types
  let num = 5; // number
  let str = "hello"; // string
  let bool = true; // boolean
  let arr = [1, 2, 3]; // array
  let obj = { name: "John", age: 30 }; // object
  let nullVal = null; // null
  let undefVal = undefined; // undefined
  
  console.log(typeof num); 
  console.log(typeof str); 
  console.log(typeof bool); 
  console.log(typeof arr); 
  console.log(typeof obj); 
  console.log(typeof nullVal); 
  console.log(typeof undefVal); 
  
  // Promises
  function promiseExample() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved!");
      }, 2000);
    });
  }
  
  promiseExample().then((result) => {
    console.log(result); 
  });
  
  // Async/Await
  async function asyncExample() {
    try {
      const result = await promiseExample();
      console.log(result); 
    } catch (error) {
      console.error(error);
    }
  }
  
  asyncExample();
  
  // Modules
  // Importing a module
  import { add } from "./math.js";
  
  console.log(add(2, 3)); 
  
  // Error Handling
  try {
    const result = add("a", 3);
    console.log(result); // This will throw an error
  } catch (error) {
    console.error(error); 
  }
  
  // Document
  document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello, World!";
    document.body.appendChild(paragraph);
  });