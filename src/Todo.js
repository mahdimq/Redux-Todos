import React, { useState } from 'react';

function Todo({ id, updateItem, deleteItem, item }) {
	const [isUpdating, setIsUpdating] = useState(false);
	const [editTodo, setEditTodo] = useState(item);

	const toggleUpdate = () => setIsUpdating((edit) => !edit);
	const handleDelete = () => deleteItem(id);
	const handleChange = (e) => setEditTodo(e.target.value);
	const stopEdit = (e) => {
		e.preventDefault();
		updateItem(id, item);
		setIsUpdating(false);
	};

	if (isUpdating) {
		return (
			<div>
				<form onSubmit={stopEdit}>
					<input type='text' value={editTodo} onChange={handleChange} />
					<button>Stop Editing</button>
				</form>
			</div>
		);
	}

	return (
		<div>
			<li>{editTodo}</li>
			<button onClick={toggleUpdate}>Update</button>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}

export default Todo;
