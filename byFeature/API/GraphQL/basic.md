# GraphQL Basics

## Restful Routing
- Conventions for a http requests for reading, updating, creating and deleting
- Example: Posts
    - Create: url(/posts), method(POST)
    - Read All: url(/posts), method(GET)
    - Read One: url(/posts/id), method(GET)
    - etc
- Nesting urls like prepending /users/id to the above posts routes get long
- ***Restful routing with highly relational data gets tricky and struggles with over serving data***
- URL schemes get weird and graphQL seeks to solve this

## GraphQL Definition
- A graph is a data structure which contains nodes and edges (relationships between the nodes)
- Once we’ve organized our data into a graph we can query it with GraphQL

## Queries
- Root query is the entry point to the data for that specific query
- In resolve functions you should return json
- If nothing is found then field values will be null
- Use *json-server* for quick development api
```
query {
    user(id: “23”) {
        name
    }
```
}

## Query Syntax
- No commas
- Name queries for reuse
- Keyword `query` in front of the query is optional
- Can place 2 objects of the same type in a query but need to rename at least one
- Create a fragment: is a list of properties on an object to dry up code
    - fragment name_of_frag on SomeType
    - Reference it: …name_of_frag

## Mutations
- Change data
- Keyword: `mutation`
- Circular references: wrap the fields value for an GraphQLObjectType object in a function expression

## Apollo
- Successful platform for working with GQL
- Apollo Store: store that communicates with GQL Server and stores data that comes back from the GQL server (lives client side)
- Use whatever client technology you want
- Apollo Provider: the layer that connects our frontend app and the Apollo store

