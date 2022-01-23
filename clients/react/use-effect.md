# useEffect

## What's a side effect?
- Main job of react is to render UI and react to user input
- Side effects are everything else (Https requests, timers, store data in browser storage, listening to keystrokes and updating form validity)
- Tasks that happen of normal component evaluation
- Components (which are just functions) are rerun by react automatically if anything in the function changes

## useEffect Hook
- A built in function
- 2 params: 
  - 1. fn that's executed after every component eval IF the specified dependencies changes
  - 2. array of dependencies
- Runs after component evaluation and then after only IF deps have changed
- Basically you want to use this if your user does something with your state and you need to reset state because each time you reset state the component rerenders
- Add as deps whatever state variables you're using in the function passed as the first parameter
- You can use it more than once in a component for different purposes

## useEffect Cleanup
- Add a function to the bottom of the body of param 1
- Must use return keyword: `return () => { ...doSomething }`
- An example for this would be to call clearTimeout() in this cleanup function