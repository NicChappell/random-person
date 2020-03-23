import React, { Component } from 'react'

import Buttons from './Buttons'

class Item extends Component {
    state = {
        disabled: true,
        name: this.props.item.name,
        valid: true
    }

    handleChange = e => {
        // destructure event
        const {
            name,
            value
        } = e.target

        // check for valid input
        if (value.length === 0) {
            this.setState({ valid: false })
        } else {
            this.setState({ valid: true })
        }

        // update state
        this.setState({ [name]: value })
    }

    handleDeleteClick = () => {
        // destructure props
        const {
            deleteItem,
            item
        } = this.props

        // delete item from list
        deleteItem(item)
    }

    handleDoneClick = () => {
        // destructure state
        const { name } = this.state

        // check for valid input
        if (name.length === 0) {
            // update state
            this.setState({ valid: false })

            // return early
            return
        } else {
            // update state
            this.setState({ valid: true })
        }

        // destructure props
        const {
            item,
            updateItem
        } = this.props

        // create updated item object
        const updatedItem = {
            ...item,
            name
        }

        // update item in list
        updateItem(updatedItem)

        // reset state
        this.setState({
            disabled: true,
            valid: true
        })
    }

    handleEditClick = () => {
        // update state
        this.setState({ disabled: false })
    }

    render() {
        // destructure state
        const {
            disabled,
            name,
            valid
        } = this.state

        return (
            <div className="input-field" >
                <div className="col s8">
                    <input
                        className={valid ? 'valid' : 'invalid'}
                        disabled={disabled}
                        name="name"
                        onChange={this.handleChange}
                        placeholder={valid ? 'Name' : 'Name is required'}
                        type="text"
                        value={name}
                    />
                </div>
                <div className="center-align col s4">
                    <Buttons
                        disabled={disabled}
                        handleDeleteClick={this.handleDeleteClick}
                        handleDoneClick={this.handleDoneClick}
                        handleEditClick={this.handleEditClick}
                    />
                </div>
            </div>
        )
    }
}

export default Item
