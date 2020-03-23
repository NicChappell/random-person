import React, { Component } from 'react';

import Input from './Input'
import List from './List'

import './styles.css'

class App extends Component {
	state = {
		complete: false,
		disabled: false,
		list: [],
		randomPerson: {}
	}

	// add item to list
	addItem = item => {
		// destructure state
		const { list } = this.state

		// update state
		this.setState({ list: [...list, item] })
	}

	// delete item from list
	deleteItem = item => {
		// destructure state
		const { list } = this.state

		// filter item from list
		const updatedList = list.filter(itm => itm.id !== item.id)

		// update state
		this.setState({ list: updatedList })
	}

	handleRandomClick = () => {
		// update state
		this.setState({
			complete: false,
			disabled: true
		})

		// destructure state
		const { list } = this.state

		// get list length
		const listLength = list.length

		// create counter variable
		let counter = 25

		const interval = setInterval(() => {
			console.log(counter)
			counter--

			if (counter > 0) {
				// get a random number
				const randomNumber = Math.floor(Math.random() * listLength)

				// access corresponding list index position
				const randomPerson = list[randomNumber]

				// update state
				this.setState({ randomPerson })
			} else {

				// The code here will run when
				// the timer has reached zero.

				clearInterval(interval)
				console.log('Ding!')

				// update state
				this.setState({
					complete: true,
					disabled: false
				})
			}
		}, 50)
	}

	// update list item
	updateItem = item => {
		// destructure state
		const { list } = this.state

		// find index of item in list
		const itemIndex = list.findIndex(itm => itm.id === item.id)

		// update item in list
		list[itemIndex] = item

		// update state
		this.setState({ list })
	}

	render() {
		// destructure state
		const {
			complete,
			disabled,
			list,
			randomPerson
		} = this.state

		return (
			<div className="container">
				<div className="row">
					<div className="col s12 m6">
						<div className="row">
							<Input
								addItem={this.addItem}
							/>
						</div>
						<div className="row">
							<List
								deleteItem={this.deleteItem}
								list={list}
								updateItem={this.updateItem}
							/>
						</div>
						<div className="row">
							<div className="center-align col s12">
								<button className="btn-large purple" disabled={disabled} onClick={this.handleRandomClick}>
									Select Random Person
								</button>
							</div>
						</div>
					</div>
					<div className={`col s12 m6 center-align selected-item ${complete ? 'complete' : null}`}>
						{randomPerson.name && randomPerson.name.toUpperCase()}
					</div>
				</div>
			</div>
		)
	}
}

export default App
