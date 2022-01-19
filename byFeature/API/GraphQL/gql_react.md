# Working with GQL and React

## Mutation Steps
1. Create a form
2. Intercept the form submit event
3. Call event.preventDefault()
4. Create a mutation using query Params
5. In the submit handler call this.props.mutate() and pass in an object with a property called “variables” which holds an object whose keys correspond to the params you want to pass to your mutation

### Inserting
- If you are working on inserting records to a list you have to refetch the list in the mutation call. Use the property refetchQueries: which takes an array of objects. Each object passed has 2 properties (query and variables)
- Put your query’s in a separate file and then import them (single folder) it being a JavaScript file

### Deleting
- DELETE: doing the delete from the list component so now we have 2 qraphql queries on the same component. In the export statement you need to export the mutation first and in its () call the GraphQl helper with the list get query.
- Then refetch the list again
