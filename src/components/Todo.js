import React, { useState } from 'react';
import './Todo.scss';

const Todo = ({ todo, todos, setTodos }) => {
	let [isEditing, setIsEditing] = useState(false);
	let [inputText, setInputText] = useState('');

	// Input Handler for Editing a Todo
	let handleInputText = (e) => {
		setInputText(e.target.value);
	};

	// Function for Editing a Todo
	let editTodo = () => {
		let newTodos = todos.map((item) => {
			if (item.id === todo.id) {
				return { ...item, todoName: inputText };
			}
			return item;
		});
		setTodos(newTodos);
	};

	// Button Handler for Submitting an Edited Todo
	let handleEditBtnSubmit = (e) => {
		e.preventDefault();
		editTodo();
		setInputText('');
		setIsEditing(false);
	};

	// Button Handler for Toggling a Todo
	let handleToggleBtn = () => {
		let newTodos = todos.map((item) => {
			if (item.id === todo.id) {
				return { ...item, completed: !item.completed };
			}
			return item;
		});
		setTodos(newTodos);
	};

	// Button Handler for Removing a Todo
	let handleRemoveBtn = () => {
		let newTodos = todos.filter((item) => item.id !== todo.id);
		setTodos(newTodos);
	};

	let viewTodoTemplate = (
		<li className={todo.completed ? 'todo-list-item view completed' : 'todo-list-item view'}>
			<p className='todo-list-item-text'>{todo.todoName}</p>
			<div className='todo-list-item-btns'>
				<button className='todo-list-edit-btn' type='button' onClick={() => setIsEditing(true)}>
					Edit
				</button>
				<button className='todo-list-toggle-btn' type='button' onClick={handleToggleBtn}>
					{todo.completed ? 'Show' : 'Hide'}
				</button>
				<button className='todo-list-remove-btn' type='button' onClick={handleRemoveBtn}>
					Remove
				</button>
			</div>
		</li>
	);

	let editTodoTemplate = (
		<li className='todo-list-item edit'>
			<form className='todo-list-edit-form'>
				<input
					type='text'
					className='todo-list-edit-input'
					onChange={handleInputText}
					value={inputText}
					placeholder={todo.todoName}
				/>
				<div className='todo-list-edit-btns'>
					<button className='todo-list-update-btn' type='submit' onClick={handleEditBtnSubmit}>
						Update
					</button>
					<button className='todo-list-cancel-btn' type='button' onClick={() => setIsEditing(false)}>
						Cancel
					</button>
				</div>
			</form>
		</li>
	);

	return <>{isEditing ? editTodoTemplate : viewTodoTemplate}</>;
};

export default Todo;
