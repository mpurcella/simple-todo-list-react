import React from 'react';
import './TodoListCounter.scss';

const TodoListCounter = ({ todos }) => {
	return (
		<p className='todo-counter-text'>
			You have <span>{todos.length}</span>
			{todos.length !== 1 ? ' to-dos' : ' to-do'} left!
		</p>
	);
};

export default TodoListCounter;
