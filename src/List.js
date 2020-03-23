import React from 'react'

import Item from './Item'

const List = (props) => {
    // destructure props
    const {
        deleteItem,
        list,
        updateItem
    } = props

    return (
        <div>
            {list && list.map((item, index) => {
                return (
                    <Item
                        deleteItem={deleteItem}
                        item={item}
                        key={index}
                        updateItem={updateItem}
                    />
                )
            })}
        </div>
    )
}

export default List
