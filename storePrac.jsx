import { createStore } from 'redux';


//This is a reducer: (state, action) => state signature
//The action changes the state into the next state
//IMPORTANT: Do not mutate the state object, return a new object
    function counter(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
        }
    }

//Redux store: holds the state of the app
//store API = { subscribe, dispatch, getState }
    let store = createStore(counter);

//subscribe() updates the UI when state changes
//Better to use React Redux(view binding library)
    store.subscribe(() =>
        console.log(store.getState())
    )

//Mutates the internal state
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'DECREMENT'})
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'INCREMENT'})



