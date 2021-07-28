# State, Events, Listeners

### Button clicks: 
- Use html listener onClick={functionName}
- Define a function outside the jsx block
- Point the function in your jsx code meaning don't add () to call it

### Adding state to a component
- `import { useState } from 'react';`
- Inside component function call useState();
  - This is an example of what's called a *React hook*
  - useState(singleParam) returns an array with 2 items
    - The variable passed to useState
    - A set method for resetting the variable value
    - Use deconstruction: const [var, setVar] = useState(variable)
    - Ex: `const [title, setTitle] = useState(props.title);`
- Other important points
  - State is component based
  - You can call useState() multiple times in the same component
- Why use const? When we do assign a new value?
  - React takes care of the reassignment because we never use the assignment operator

### Multi state
- You can call useState() multiple times in the same component
- There are 2 approaches you can take:
  1. Use 1 state object `useState({})`
  - Example:
	```javascript 
    const [userInput, setUserInput]= useState({
        Title: '',
        Age: 0
    })
    setUserInput({
        …userInput,
        Title: 'Daniel'
    })
    ```
  2. Individual `useState()` calls
- Individual states is more common in the real world

### Updating state
- Don't depend on previous state snapshot
- Rule: whenever you update state and depending on the previous state you should use a different form of the above
  - Call your set function using an anonymous arrow function
    ```javascript
    setUserInput((prevState) => {
        return { …prevState, title: 'Daniel' }
    })
    ```
- This ensures that you always operate on the latest state snapshot keeping all scheduled state upstate

### How react re-evaluates components
- What does react do with the initial useState(prop.value) call?
  - React tracks whether the component is being instantiated or reloaded
  - If it's being reloaded it won't set the prop.value in state again

### Events
- Examples of browser events would be the JS `onClick` or `onChange` listener functions
- When these functions as called you get an event Object automatically passed to the listener
  - event.target.value gets the value in the input
  - Example
    ```javascript
    const exampleClickHandler = (event) => {
        setProperty(event.target.value);
    }
    ```
