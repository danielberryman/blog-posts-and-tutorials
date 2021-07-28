# React Basics

### Create a new project
- npx create-react-app app-name
- cd app-name
- npm start (opens on localhost:3000)

### Create a new component
- Manual
  - (Create components directory if it's the first component)
  - Create the file: FileName.js (naming convention)
  - Define a function and export it. 2 ways:
    1. `function Name() { return ( jsx code snippet ) }`
    2. `const Name = () => { return ( jsx code snippet ) }`
  - Inside the function: return ( jsx code snippet )

### Add props to components
- When you define a component as a function there's an object passed to it
- You name the object anything but convention is to name it `props` or `data`
  - Example:
    ```javascript
    export function YourComponent(props) { }
    ```
- When you use the component in a JSX snippet
  - Example:
     ```javascript
    <YourComponent title={jsVariable} />
    ```
- The you can access the value in YourComponent by doing `props.title`

### Construct JSX code snippets in component
- Create 1 root html/component element
- HTML Attributes that are different in JSX
  - Normal: `class={}`; JSX: `className={}`
- Interpret text as JavaScript: use single curly braces { }
  - Example: `<div className={variable}></div>`
- Loops (https://flaviocopes.com/react-how-to-loop/)
  - for…of
    - Outside of an element
        ```javascript
        { for (let something of somethings) {
            doSomething(something)…
        }}
        ```
	- .map
        ```javascript
        { somethings.map((value) => {
            doSomething(value.prop)…
        })}
        ```

### Refer to components
- Content in between: <YourComponent>content</YourComponent>
- No content: <YourComponent />

### Importing other files
- Omit the suffix '.js' if it's a 3rd party library file or if you defined the file
- If you define a default export: import ComponentName from …
- If you use export keyword inline: import { ComponentName } from …

### Add css for specific file
- Create ComponentName.css file
- Define css
- Import into js file: import './ComponentName.css';

### Creating container components
- An example of a container component would be a `card`
- `cards` are a popular design pattern but they don't hold state themselves
- Here's how to set them up:
  1. Define an empty component
  2. Pass props to it
  3. Return a JSX snippet with your container element
  4. Inside the opening and closing tags of your container element add `{props.children}`
- Example:
  - Component:
    ```javascript
    export function Card(props) {
        return <div>{props.children}</div>
    }
    ```
  - Component being used:
    ```javascript
    <Card>
        ...content
    </Card>
    ```
- This will pass the content between the opening and closing tags of your custom container component *where it's used*.

### File/Directory organization
- No one way to do it
- Create directory for UI components
- Group components by feature