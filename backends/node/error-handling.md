# Error handling in NodeJS

## References
- https://www.honeybadger.io/blog/errors-nodejs/

## Basics
- Error object has 3 main properties: name, message, stack

## THROWING EXCEPTIONS
- Keyword: `throw`
- What do you throw? Always error objects: 
```javascript
new Error("somg string")
```
OR
```javascript
class SomeError extends Error {
  //...
}
throw new SomeError()
```

## HANDLING EXCEPTIONS
- Use try/catch
  