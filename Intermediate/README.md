# INTERMEDIATE JS

## Recursion

- Function calling itself until a condition is met.

### Source code

- [fibonacci.js](/Intermediate/fibonacci.js)

## Object Oriented Programming (OOP)

- OOP is a programming paradigm based on the concept of objects.
- Objects are used to model/describe real world or abstract features.
- In OPP, objects are self-contained block of codes.

### Principles

1. Abstraction

- Reduce complexity + isolate impact of changes
- Ignore/hide details or implementations that don't matter to interact

2. Encapsulation

- Reduce complexity + increase reusability
- Keeping some implementation private and others public

3. Inheritance

- Eliminate redundant code
- Allow to reuse common logic, methods or properties

4. Polymorphism

- Refactor code that is inherited.
- Instances can improve the logic inherited from a class

### OOP in JS

- In JS, we can accomplish OOP with:
  - ES6 classes, Factory Functions or Constructor Functions.
  - Prototypal inheritance.
  - All objects in JS delegate their behavior (prototypes) to instances.
  - Methods and properties.
  - Getters and Setters.

#### Constructor Functions

- Use function declaration expression to build an object template
- Never use arrow function
- Use the keyword "new" to initialize an instance
  1. New {} is created
  2. Function is called, this = {}
  3. {} is linked to prototype object
  4. function automatically return {}

#### ES6 Classes

- Classes are NOT hoisted
- Classes are executed in strict mode
- The properties are declare in the constructor method
- Class methods outside the constructor, will be created on the prototype

### Source code

- [objects.js](/Intermediate/objects.js)
- [oop.js](/Intermediate/oop.js)
- [stopwatch.js](/Intermediate/stopwatch.js)
- [product_review](/Intermediate/product-reviews/)
