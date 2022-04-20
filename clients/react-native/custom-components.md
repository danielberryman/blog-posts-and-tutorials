# Custom Components in React Native
- Add components dir in root

## Passing Data btw Components
- When breaking up components you need to move state managed by that piece of JSX to the custom comp you're creating
- You can pass handler functions easily down to child components
- When passing state as arguments to functions passed to child components you can use .bind(this, someArg) to pass args from the child component back to the parent component. In the parent component just make sure you add the arg to the function being passed.
```
goal = 'value'
<Button title="Add" onPress={props.addGoal.bind(this, goal)} />
```
- Here add goal was passed to this child component via props and `goal` is being passed back to the function. When using .bind which is vanilla JS the first arg always refers to `this` or whatever you want that to be.

## Touchable Components
- These elements allow to register onPress and other events like it on elements in react native
- Elements
  - <TouchableOpacity>
    - Attributes
      - activeOpacity={0.0-1.0}
  - <TouchableHighlight>
    - Attributes
      - activeOpacity={0.0-1.0}
      - underlayColor={'blue'}
  - <ToubchableNativeFeedback>
    - **Android only**
    - Ripple effect
  - <ToubchableWithoutFeedback>