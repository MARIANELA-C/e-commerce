import React from 'react'
import Item from '../Item/Item'


const ItemList = ({items}) => {
  return (
    <div className="container d-flex justify-content-center mt-5">
        {items.map((item, indx)=>
        <Item key={indx} id={item.id} title={item.title} price={item.price} image={item.image}/>)}
    </div>
  )
}

export default ItemList