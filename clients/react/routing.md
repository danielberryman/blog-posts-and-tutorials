# Routing in React

## Helpful links
- https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e
- https://reactrouter.com/

## TD:LR
- Import the following 
```javascript
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
```
- Use Router, Switch, and Route components
```javascript
<Router>
    <Switch>
        <Route path="/path">
            // ...component to load via the route
        </Route>
    </Switch>
</Router>
```
- Link to the route: '`<Link to=”/path">Title of link</Link>`
- Route dynamically to the path
```javascript
import { useHistory } from 'react-router-dom';

// Inside your component function
function handleClick() {
    history.push('/path');
}

// In JSX
<element onClick={handleClick}></element>
```