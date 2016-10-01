import { createStore, combineReducers } from 'redux';

//pure reducer
function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

//another reducer
function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case 'COMPLETE_TODO':
            return state.map((todo, index) => {
            if (index === action.index) {
                return Object.assign({}, todo, {
                    completed: true
                })
            }
            return todo
        })
     default:
         return state
    }
}

let reducer = combineReducers({ visibilityFilter, todos });
let store = createStore(reducer);

store.subscribe(() =>
    console.log(store.getState())
)

//action that adds item to todo list
const ADD_TODO = 'ADD_TODO';

let act = {
    type: ADD_TODO,
    text: 'Build my first Redux app'
}

store.dispatch(act);