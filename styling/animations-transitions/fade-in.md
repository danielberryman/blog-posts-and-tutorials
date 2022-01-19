# Fade In an element based on whether it's in the viewport

## Helper function
```javascript
function isInViewport(element) {
  const bounding = element.getBoundingClientRect()
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true
  } else {
    return false
  }
}
```

## Basic animation
```css
.fade-in {
  animation: fade-in 2s ease forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translate3d(0px, 50px, 0px);
  }
  
  100% {
    opacity: 1;
    transform: none;
  }
}

```

## Explanation
- Use element.getBoundingClientRect() to get the coordinates of the element's bounding box
- If element is in view the following must be true...
  - top and left must be greater than or equal to 0
  - right must be greater than or equal to the window innerWidth
  - bottom must be greater than or equal to the window innerHeight
- If the element meets the criteria then add a class with the animation to it
- 

### Source
- https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/