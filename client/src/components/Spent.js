import React ,{useContext}from 'react';
import { AppContext } from '../context/AppContext';
const Spent = () =>{
    const {expenses,budget} = useContext(AppContext);
    var spent = 0;
    expenses.map((expense)=>{
        spent=spent+expense.cost;
    })
    return (
        <div className="alert alert-danger p-4">
            <span>Spent : {spent}</span>
        </div>
    )
}
export default Spent;