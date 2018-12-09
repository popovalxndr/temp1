import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		],

		term: '',

		flag: 'ALL'
	}


	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		};
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const newState = todoData.filter((item) => (item.id !== id));

			return {
				todoData: newState
			};
		});
	}

	addItem = (text) => {
		this.setState(({ todoData }) => {
			const newState = [...todoData, this.createTodoItem(text)];

			return {
				todoData: newState
			};
		});
	}

	searchItems = (term) => {
		this.setState({term});
	}

	filterItemsByStr = (arr, term) => {

		return arr.filter((item) => 
							(item.label.toLowerCase().includes(term.toLowerCase())));
	}

	changeFlag = (flag) => {
		this.setState({flag});
	}

	filterItemsByFlag = (arr, flag) => {

		return (
			flag === 'ALL' ? arr :
				flag === 'ACTIVE' ? arr.filter((item) => (!item.done)) :
					arr.filter((item) => (item.done))
		);

	}



	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((item) => (item.id === id));

		const oldItem = arr[idx];

		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx+1)
		];

	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {

			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {

			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	}


	render() {
		const { todoData, term, flag } = this.state;

		const filteredData = this.filterItemsByFlag(
							this.filterItemsByStr(todoData, term), flag);


		const done = filteredData
						.filter((item) => (item.done))
						.length;

		const toDo = filteredData.length - done;				

		return (
			<div className="todo-app">
				<AppHeader toDo={toDo} done = {done}/>
				<SearchPanel onSearch={this.searchItems}/>
				<ItemStatusFilter onChangeFlag={this.changeFlag} flag={this.state.flag}/>
				<TodoList 
					todos={filteredData}
					onDeleted={this.deleteItem}
					onDone={this.onToggleDone}
					onMarkImportant={this.onToggleImportant}
				/>
				<ItemAddForm
					onItemAdded={this.addItem}
				/>
			</div>
		)
	}

}

