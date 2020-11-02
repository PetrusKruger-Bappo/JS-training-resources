## Immer

### Purpose
Change state immutably for complex types of changes:
* Doesn't require you to remember to crate a copy of each nested structure 
  * See examples below.
* Nested object changes often become less complex to write
  * e.g. changing person.address.street in below object `test`

```json
state = {
    otherstates: {...},
    people: 
    [
        "person-123": {
            firstName: "Petrus",
            lastName: "Kruger"
            address: {
                street: "146 Tryall Road",
                suburb: "Milnerton Rural",
            }
        }
    
    ]
```

### Resources

Good examples by Leigh Halliday with summary as per link below
* https://youtu.be/vsrhBUxfXQM?t=1156

### Examples

The following code is significantly easier with immer. Compare to the simple example lower down.
```js
    import produce from 'immer'
    ...

    ...

    const changeStreet(personId, newStreet)= {

        const person = {...this.state.people[personId]};
        const personAddress = {...person.address, street: newStreet};
        this.setState(
            {
                people: [{
                    ...this.state.people, 
                    people[personId] : {
                        person,
                        address: { ...personAddress}
                    }
                }]
            }
        );
    }
vs.
    const changeStreet(personId, newStreet)={
        this.setState{
            produce => {
                draft => {
                    draft.people[personId].address.street = newStreet;
                }
            }
        }
    }
```

The following code is about as complex using immer:
```js
    import produce from 'immer'
    ...

    ...
    //where newPerson is already an object in the correct format
    const addPerson(newPerson) => {
        this.setState({
            people: {...this.state.people, newPerson}) 
    }
vs
    const addPerson(newPerson) => {
        this.setState(
            produce ( draft => {
                draft.people.push(newPerson);
            }
            )
    }
```
but in the above, you needed to remember to use the spread notation (`...`) to create a copy of people.

In this case, that was somewhat intuitive to use the spread, but in the example above, it took a while to see the correct way to use the spread operator.∏