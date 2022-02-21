import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoListForm from './components/TodoListForm';
import TodoListHeader from './components/TodoListHeader';
import TodoListCounter from './components/TodoListCounter';
import './App.scss';

let LOCAL_STORAGE_KEY = 'todoListApp.todos';

const App = () => {
	let [inputText, setInputText] = useState('');
	let [todos, setTodos] = useState([]);

	// Sets Todos to the Saved Todos from Local Storage -- Occurs Only When App Opens
	useEffect(() => {
		let storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	// Saves Todos to Local Storage -- Occurs Every Time The Todos State Changes
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	return (
		<div className='app'>
			<TodoListHeader todoListHeaderValue='My To-Do List' />
			<TodoListForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
			<TodoListCounter todos={todos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
