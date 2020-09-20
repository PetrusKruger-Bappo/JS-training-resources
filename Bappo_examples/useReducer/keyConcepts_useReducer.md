# Key Concepts for useReducer Hook

* It's an alternative to useState.
* Better for complex state.

## Comparison with useState

`const [myState, updateMyState] = useState(myInitialState);`
    vs.
`const [myState, dispatch] = useReducer(reducer, myInitialState);`


## Details

The `reducer` function consumes the `dispatch` parameters e.g.
    <button onClick={() => dispatch({ type: "increment" })}>Reset</button>

    
    function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case default:
            return state
    }};
    