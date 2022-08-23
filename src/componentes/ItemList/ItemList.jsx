import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <div>
        {items.map((item, indx)=>
        <Item key={indx} id={item.id} title={item.title} price={item.price}/>)}
    </div>
  )
}

export default ItemList