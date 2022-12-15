import React,{useState,useContext} from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from "uuid";
const AddExpense = () =>{
    const {dispatch} = useContext(AppContext);
    const [activity,setActivity]  = useState('');
    const [cost,setCost] = useState('');
    const onSubmit = (e) =>{
        e.preventDefault();
        const expenses = {
            id:uuidv4(),
            name:activity,
            cost:parseInt(cost)
        }
        dispatch({
            type:'ADD_EXPENSE',
            payload:expenses
        });
        setActivity('');
        setCost('');
    };
    return(
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="form-group form-control-lg">
                    <label for="activity">Activity</label>
                    <input required="required" type="text" className="form-control" value={activity} onChange={(e)=>setActivity(e.target.value)} id="activity" placeholder="Activity"/>
                </div>
                <div className="form-group form-control-lg">
                    <label for="expense">Expense</label>
                    <input required="required" type="text" className="form-control" id="expense" value={cost} onChange={(e)=>setCost(e.target.value)} placeholder="Expense"/>
                </div>
                
            </div>
            <button type="submit" class="btn btn-primary w-10 mt-3">Add Expense</button>
            
        </form>
    )
}
export default AddExpense;