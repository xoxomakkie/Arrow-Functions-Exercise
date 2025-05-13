# Arrow Functions Exercise – JavaScript

**Author:** Makayla Gunter  
**Course:** Stony Brook Software Engineering Bootcamp  
**Assignment:** Arrow Functions Practice  
**Date:** 05/13/25

---

## Description

In this exercise, I practiced using arrow functions in JavaScript through a series of space-themed tasks for the **Galactic Exploration Team**. The goal was to understand the syntax and behavior of arrow functions including:

- Arrow functions with no parameters  
- Implicit returns (including returning objects)  
- Arrow functions inside objects and how `this` behaves  

---

## Tasks Completed

### 1. **Activate Hyperdrive**  
Created an arrow function named `activateHyperdrive` with no parameters that logs `"Hyperdrive activated!"` to the console.

### 2. **Scan for Lifeforms**  
Used implicit return to create an arrow function named `scanForLife` that returns the string `"No lifeforms detected"` without curly braces.

### 3. **Log Coordinates**  
Created an arrow function named `currentCoordinates` that implicitly returns an object with `x`, `y`, and `z` properties representing space coordinates.

### 4. **Message from Home Base**  
Defined a method named `receiveMessage` using arrow function syntax inside an object named `spacecraft`. Observed how arrow functions do **not** bind their own `this`, and explained why `this.name` was `undefined`.

---

## Key Takeaways

- Arrow functions offer concise syntax and are useful for callbacks and one-liners.  
- Implicit returns require **no curly braces**—but parentheses are necessary when returning an object.  
- Arrow functions **do not** have their own `this` context, which can cause unexpected behavior inside objects or classes.

---

## Files

- `arrow-functions.js`: JavaScript source file with all tasks implemented  
- `README.md`: This file

---

## Notes

For task 4, to correctly use `this` inside an object method, a **regular function** (not an arrow function) should be used if you want `this` to refer to the object itself.

---
