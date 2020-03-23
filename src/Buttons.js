import React from 'react'

function Buttons(props) {
    // destructure props
    const {
        disabled,
        handleDeleteClick,
        handleDoneClick,
        handleEditClick
    } = props

    if (disabled) {
        return (
            <div>
                <button className="btn-floating btn-small amber" onClick={handleEditClick}>
                    <i className="material-icons">edit</i>
                </button>
                <button className="btn-floating btn-small deep-orange" onClick={handleDeleteClick}>
                    <i className="material-icons">delete</i>
                </button>
            </div>
        )
    } return (
        <button className="btn-floating btn-small green" onClick={handleDoneClick}>
            <i className="material-icons">done</i>
        </button>
    )
}

export default Buttons
