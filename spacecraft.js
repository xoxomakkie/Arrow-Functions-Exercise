/* Task 1: No Parameters: Activate Hyperdrive */
const activateHyperdrive = () => {
    console.log("Hyperdrive activated!");
  };
  activateHyperdrive(); // Output: Hyperdrive activated!
  
  /* Task 2: Implicit Return: Scan for Lifeforms */
  const scanForLife = () => "No lifeforms detected";
  console.log(scanForLife()); // Output: No lifeforms detected
  
  /* Task 3: Implicit Return with Objects: Log Coordinates */
  const currentCoordinates = () => ({ x: 10, y: 22, z: 7 });
  console.log(currentCoordinates()); // Output: { x: 10, y: 22, z: 7 }
  
  /* Task 4: Understanding `this`: Message from Home Base */
  const spacecraft = {
    name: "Explorer I",
    receiveMessage: (message) => {
      console.log("Message received: " + message);
      console.log("this.name is:", this.name);
    }
  };
  
  spacecraft.receiveMessage("Return to base."); 
  // Output: Message received: Return to base.
  // Output: this.name is: undefined
  
  /*
   * Observations:
   * Arrow functions do not have their own `this` binding. Instead, they inherit `this` from their enclosing scope.
   * In this case, `this.name` is `undefined` because the arrow function does not bind `this` to the `spacecraft` object.
   * Regular functions (using function declaration or expression) should be used when `this` needs to refer to the object.
   */
  