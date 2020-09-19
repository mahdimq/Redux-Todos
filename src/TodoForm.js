import React, { useState } from 'react';

function TodoForm({ newTodo }) {
	const [item, setItem] = useState('');

	const handleChange = (e) => setItem(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		newTodo(item);
		setItem('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='todo'>Enter Todo:</label>
				<input id='todo' type='text' onChange={handleChange} value={item} />
				<button type='submit'>Add!</button>
			</form>
		</div>
	);
}

export default TodoForm;
