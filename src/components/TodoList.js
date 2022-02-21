import React from 'react';
import Todo from './Todo';
import './TodoList.scss';

const TodoList = ({ todos, setTodos }) => {
	return (
		<ul className='todo-list'>
			{todos.map((todo) => {
				return <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />;
			})}
		</ul>
	);
};

export default TodoList;
