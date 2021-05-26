# Declaring Properties on Arrays

I was reading through the MDN Javascript Guide on Indexed Collections here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections

Well, I learned something incredibly simple that didn't realize was possible. Arrays are just like any other object. You can declare properties on them in addition to using it's explicit functionality.

If you're like me - you like to embue inanimate objects with with personality. The first step is to name the object so let's give an array a name:

```javascript
-> let myInanimateArrayOfNums = [1,2,3];
-> myInanimateArrayOfNums.name = 'My Precious Numbers';
<- "My Precious Numbers"
-> myInanimateArrayOfNums
<- (3) [1, 2, 3, name: "My Precious Numbers"]
```

I don't understand why the javascript console displays the array object with the name property/value within the array itself. But if you check the length of the array it's equal to 3 meaning the length isn't impacted by the addition of the name property.

That's all I've got. Like I said - incredibly simple but if you were returning an array from a function and wanted some other piece of info returned other that the array values themselves this functionality might come in handy.
