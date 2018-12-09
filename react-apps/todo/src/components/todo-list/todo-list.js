import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onDone, onMarkImportant }) => {
	
	const renderElements = todos
		.map((item) => {

			const { id, ...otherProps } = item;

			return (
				<li key={id} className="list-group-item">
					<TodoListItem item={otherProps}
					onDeleted={() => onDeleted(id)}
					onDone={() => onDone(id)}
					onMarkImportant={() => onMarkImportant(id)}
					/>
				</li>
				);
			}
		);

	return (
		<ul className="list-group todo-list">
			{renderElements}
		</ul>
	)
};

export default TodoList;