import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({ onChangeFlag, flag }) => {

	const buttons = [
		{name: 'ALL', label: 'All'},
		{name: 'ACTIVE', label: 'Active'},
		{name: 'DONE', label: 'Done'}
	];

	const renderButtons = 
		buttons.map(({ name, label }) => {
			return (
				<button type="button"
				key={name}
				className={"btn " + 
					(flag === name ? "btn-info" : "btn-outline-second")}
				onClick={() => {onChangeFlag(name)}}
				>
				{label}
				</button>
			)
		});

	return (
		<div className="btn-group">
			{renderButtons}
		</div>
	);

}

export default ItemStatusFilter;