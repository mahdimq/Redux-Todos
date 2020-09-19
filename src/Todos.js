import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo';
import TodoForm from './TodoForm';

function Todos() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const addTodo = (todo) => dispatch({ type: 'ADD_TODO', todo });
	const updateTodo = (id, updatedItem) => dispatch({ type: 'UPDATE_TODO', id, updatedItem });
	const deleteTodo = (id) => dispatch({ type: 'DELETE_TODO', id });

	const handleTodo = todos.map((t) => (
		<Todo key={t.id} id={t.id} item={t.item} updateItem={updateTodo} deleteItem={deleteTodo} />
	));

	return (
		<div>
			<TodoForm newTodo={addTodo} />
			<hr />
			<ul>{handleTodo}</ul>
		</div>
	);
}

export default Todos;
