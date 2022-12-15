import React,{useContext,useState} from 'react';
import { AppContext } from '../context/AppContext';
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';
const Budget = () =>{
    const [isEditing, setisEditing] = useState(false);
    var {budget,dispatch} = useContext(AppContext);
    const handleEditClick = () => {
        setisEditing(true);
    }
    const handleSaveClick = (value) => {
        dispatch({
            type:'SET_BUDGET',
            payload:value
        })
        setisEditing(false);
    }
    return (
        <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
    )
}
export default Budget;
