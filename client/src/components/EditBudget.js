import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-4durga01
                '
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;