import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';
import "bootstrap/dist/css/bootstrap.min.css";
const ExpenseItem = (props) =>{
	const {dispatch} = useContext(AppContext);
	const deleteExpenseItem = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
			{props.name}
			<div>
            	<span className="badge alert-success mr-3">Rs.{props.cost}</span>
				<TiDelete size='1.5em' onClick={deleteExpenseItem} />
			</div>
		</li>
    )
}
export default ExpenseItem;