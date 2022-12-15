import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () =>{
    const {expenses,budget} = useContext(AppContext);
    var spent = 0;
    expenses.map((expense)=>{
        spent=spent+expense.cost;
    })
    const alert = spent > budget ? 'alert-danger' : 'alert-success'
    return (
        <div className={`alert p-4 ${alert}`}>
            <span>Remaining : Rs.{budget-spent}</span>
        </div>
    )
}
export default Remaining;