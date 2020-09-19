import { v4 as uuid } from 'uuid';

const INITIAL_TODOS = { todos: [] };

const todosReducer = (state = INITIAL_TODOS, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return { ...state, todos: [...state.todos, { item: action.item, id: uuid() }] };

		case 'UPDATE_TODO':
			const todos = state.todos.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, item: action.updatedItem };
				}
			});

		case 'DELETE_TODO':
			return { ...state, todos: state.todos.filter((todo) => todo.id !== action.id) };

		default:
			return state;
	}
};

export default todosReducer;
