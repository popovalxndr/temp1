import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ item, onDeleted, onDone, onMarkImportant }) => {

	const { label, done, important } = item;

	let classNames = 
		"todo-list-item" + (done? " done" : "")
		+ (important? " important" : "");


	return (
		<span className={classNames}>
			<span 
				className="todo-list-item-label"
				onClick={onDone}>
				{label}
			</span>

			<button type="button"
				className="btn btn-outline-success btn-sm"
				onClick={onMarkImportant}>
				<i className="fa fa-exclamation" />
			</button>

			<button type="button"
				className="btn btn-outline-danger btn-sm"
				onClick={onDeleted}>
				<i className="fa fa-trash-o" />
			</button>

		</span>
	);

}

export default TodoListItem;