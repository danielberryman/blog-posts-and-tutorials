# React Native Basics

## Expo VS React Native CLI
- Expo is best for simple projects. It abstracts a lot and gives you powerful tools to get up and running quickly
- React Native CLI is more bare bones and better as you get more experienced and need to write native android or ios code within your react native app.

## Most Used Core Components
- Core components compiled to native elements
  - <View></View> like a div, a good wrapper, mainly there to help with style and layout
  - <ScrollView></ScrollView> like a view but it allows user to scroll so use it when you can't gaurantee it will fit on the screen. Only use if it's less than 15 or 20 elements. *This can be inefficient because it renders all elements up front. This can cause slowness*
  - <FlatList /> better for performance with large lists
  - <Text></Text> good for text of course (must use this when rendering text)
  - <Button\/> self closing tag
    - Attributes
      - title="Text"
      - onPress={someFunction}

## Styling
- React native doesn't support css or html
- <Stylesheet /> is used with a similar syntax
```
Stylesheet.create({
})
```
- You can also use inline styles
- There are only a subset of css properties

## State
- Prior to React 16.8 you'd need to convert component to class based component
- Post React 16.8 you can use React hooks `useState`
- When updating state via setter function you should always use a anonymous function because it's not 100% guaranteed that you'll get the latest state snapshot if you don't
```
setterExample(state => [...state, addedState])
```

## Lists
```
someArray.map(element => <Text key={someUniqueKey}>{element}</Text>)
```
- Key should always be on the root element in the returned jsx
- <FlatList />
  - Attributes
    - data={} which takes an array of data
    - renderItem={} which takes a function and returns output for each item
```
<FlatList 
  data={someList} 
  renderItem={ itemData => (
    <Text>{itemData.item}</Text>
  )} />
```
- For a flatlist you need to provide a key on each item in your list beforehand. For demos you could use Math.random().toString()
- If you have a property you want to use as the key of each item you can use the property `keyExtractor`. Let's say the property on your object you want to use is `id` so you'd do `keyExtractor={(item,index) => item.id}`
