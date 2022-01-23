# Improving React Apps Semantically

## JSX

### Limitations

### You have to use 1 top level element within a JSX snippet
- Quick Solution: use a wrapper element
- Slighty More Complex: create a wrapper component with nothing in it and return props.children
```javascript
const Wrapper = props => {
  returns props.children
}
export default Wrapper
```
- This component comes built in. It's the `<React.Fragment></React.Fragment>`
- Shorthand for react fragment: `<></>`

## Portals

### Basics
- Render HTML in a very targeted place
- Add divs in the index.html file with ids like `backdrop-root` or `overlay-root`
- Add them above the base react div with id root
- These divs are being portaled in a sense to the top of the html DOM
- Create a component to use
- Import ReactDOM and use it to create a portal
- ReactDOM.createPortal(1st param is JSX, 2nd param is the pointer to the element where the portal should be rendered) so you pass your component to it
```javascript
ReactDOM.createPortal(<YourComponent define onClick if you need it to open the modal />, document.getElementById("backdrop-root"))
```

## Refs

### Basics
- They allow us to get access to other DOM elements and work with them
- Hook: useRef
- Call it in the component (like all react hooks): useRef()
- It returns a value that ends up being an actual DOM node
- It's recommended that you don't manipulate the ref but you want to READ data from it
- The property in a ref is `current` so for the value of an input ref you do `inputRef.current.value`
- The first time the comp is rendered useRef will set the value of the consts below to the native DOM elements based on the inputs
```javascript
const nameInputRef = useRef() // default init the value will be undefined
const ageInputRef = useRef()
```
```html
<input other attributes... ref={nameInputRef} />
<input other attributes... ref={ageInputRef} />
```

### Controlled VS. Uncontrolled Components
- If you use refs to work with inputs or elements those nodes are not uncontrolled because react isn't controlling them. The values are actually on the node and not with React.
- Very common with forms because input elements natively support some state via the browser