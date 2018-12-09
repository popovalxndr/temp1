import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

	state = {
		term: ''
	}

	onInputChange = (event) => {
		const term = event.target.value;

		this.props.onSearch(term);

		this.setState({term});
	}

	render() {

		return (
			<input 
			placeholder="Type here to search"
			className="search-input"
			onChange={this.onInputChange}
			value={this.state.term}
			/>
		);
	}
}

