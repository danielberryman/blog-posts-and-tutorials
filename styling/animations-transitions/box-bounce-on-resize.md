# Box Resize Bounce

## TD;LR

### Parent
```css
.parent {
  align-items: center;
  display: flex;
}
```
**Also needs width and height of course*

### Child
```css
.child {
  height: calc(20vw);
  transition: all 1s ease;
}
```

## Explanation
- Using flex you can use align-items to align elements vertically
- From there if you set the height of child elements to be calculated by the viewport width on window resize the element will grow/shrink smoothly loosing height at the bottom of the top because it's already centered vertically