# Flexbox for React Native

- Every View by default uses flexbox to organize child elements
- By default it organizes children in a column (As block)
- Change direction with flexDirection: 'row'
- Also column-reverse or row-reverse (reverses child elements)

## Size of child elements
- Default
- If parent height is set children will inherit it
- If parent width is set children will NOT inherit it

## Axis
- Depends on the flexDirection
- 2 axis for each direction (main and cross or opposite of main)

## Child elements filling space along the main axis
- By default Views only take as much space as their child elements require
- Add property `flex: 1` to the child element and it will fill all availabl space (if you had 3 child elements all with `flex: 1` they would be distributed evenly in thirds)
- Use `alignItems: stretch` on the parent container to distribute along the corss axis

## Flex property
- The property takes a number
- The numbers are in ratio with other child elements using the flex property
- So if 2 child elements had 1 and the third had 2 then the third element would take 50% of the space and the other 2 child elements would take 25% of the space.