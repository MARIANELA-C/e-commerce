import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
     const onAdd=(quantity)=>{
      console.log(`Compraste ${quantity}entradas`)
     }
  
  
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )

  }
export default ItemListContainer