import React from 'react';
import './TodoListHeader.scss';

const TodoListHeader = ({ todoListHeaderValue }) => {
	return <h1 className='todo-list-header'>{todoListHeaderValue}</h1>;
};

export default TodoListHeader;
