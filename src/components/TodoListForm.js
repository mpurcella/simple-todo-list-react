import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoListForm.scss';

const TodoListForm = ({ inputText, setInputText, todos, setTodos }) => {
	// Input Handler for Typing a Todo
	let handleInputTextChange = (e) => {
		setInputText(e.target.value);
	};

	// Function for Adding New Todo
	let addTodo = () => {
		let newTodo = { todoName: inputText, id: uuidv4(), completed: false };
		if (newTodo.todoName.length < 1) {
			return;
		} else {
			setTodos([...todos, newTodo]);
		}
	};

	// Button Handler for Submitting Todo Form
	let handleAddBtnSubmit = (e) => {
		e.preventDefault();
		addTodo();
		setInputText('');
	};

	return (
		<form className='todo-list-form'>
			<input
				type='text'
				className='todo-list-text-input'
				onChange={handleInputTextChange}
				value={inputText}
				placeholder='Type Your To-do...'
			/>
			<button type='submit' className='todo-list-add-btn' onClick={handleAddBtnSubmit}>
				Add To-do
			</button>
		</form>
	);
};

export default TodoListForm;
