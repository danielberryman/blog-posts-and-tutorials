# useReducer

## Basics
- Used for more complex state
- It's a replacement for useState()
- If you're updating a state based on another state this could be a good use of useReducer to combine and work with the states together

## When do you need it instead of useState
- You'll know as you go if things starting to get complicated

## How does it work?
- Always returns an array of 2 values (use deconstruction)
  - 1. State snapshot
  - 2. Function to update state. Dispatches an action is consumed by the first argument you pass to useReducer
- Parameters
  - 1. Reducer function: it receives the latest state snapshot and returns the new, updated state
  - 2. The initial state
  - 3. The initial function to set the initial state

## Reducer Function (1st Param)
- You can define it outside the component because react will pass state to it
- When defining it the 1st param it accepts is always the state; the second is the action
- In the fn return initial state in an obj
- Use state via the 1st returned property
- Update the state via the 2nd returned property
  - dispatchAction({type: "SOME_TYPE"}, val: event.target.value)
  - Using a type and payload
  - In the reducer now you an check what the type is: if (action.type === "SOME_TYPE")
  - Now you can update the state passed in as the payload
  - TYPE property is a reducer standard

## With useEffect
- You can pull out properties from your state using object destructuring
- From there you can use them in your component like in the deps array for useEffect
- Don't pass entire objects
