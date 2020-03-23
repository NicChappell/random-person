import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

class Input extends Component {
    state = {
        disabled: false,
        name: '',
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
            this.setState({
                disabled: true,
                valid: false
            })
        } else {
            this.setState({
                disabled: false,
                valid: true
            })
        }

        // update state
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        // prevent page reload
        e.preventDefault()

        // destructure state
        const { name } = this.state

        // check for valid input
        if (name.length === 0) {
            // update state
            this.setState({
                disabled: true,
                valid: false
            })

            // return early
            return
        } else {
            // update state
            this.setState({
                disabled: false,
                valid: true
            })
        }

        // destructure props
        const { addItem } = this.props

        // generate unique id
        const id = uuid()

        // create new item object
        const item = {
            id,
            name
        }

        // add item to list
        addItem(item)

        // reset state
        this.setState({ name: '' })
    }

    render() {
        // destructure state
        const {
            disabled,
            name,
            valid
        } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-field" >
                    <div className="col s8">
                        <input
                            className={valid ? 'valid': 'invalid'}
                            name="name"
                            onChange={this.handleChange}
                            placeholder={valid ? 'Name': 'Name is required'}
                            type="text"
                            value={name}
                        />
                    </div>
                    <div className="center-align col s4">
                        <button className="btn blue" disabled={disabled} type="submit">
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Input
