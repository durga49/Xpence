import { createContext,useReducer } from "react";
const reducer = (state,action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses : [...state.expenses,action.payload]
            };
        case 'DELETE_EXPENSE': 
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                )
            };
        case 'SET_EXPENSE':
            return {
                ...state,
                budget: action.payload
            };
        default:
            return state;
    }
}
const initialState = {
    budget:6000,
    expenses:[
        {id:12,name:"shopping",cost:2500},
        {id:23,name:"grocaries",cost:500},
        {id:34,name:"icecream",cost:500},
        {id:45,name:"choclates",cost:500}
    ]
}
export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <AppContext.Provider 
            value = {{
                budget:state.budget,
                expenses:state.expenses,
                dispatch
            }}>
                {props.children}
        </AppContext.Provider>
    )
}