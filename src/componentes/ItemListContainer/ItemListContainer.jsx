import ItemList from '../ItemList/ItemList'
import ItemCount from './ItemCount/ItemCount'
import { useEffect, useState } from 'react'

const ItemListContainer = ({greeting}) => {
     const onAdd=(quantity)=>{
      console.log(`Compraste ${quantity} entradas`)
     }
     const[items, setItems]= useState({})

     useEffect(()=>{
      let productos=[
        {id:1, title:"Los Tipitos", "price":300},
        {id:2, title:"Tini", "price":200},
        {id:3, title:"Airbag", "price":100}];

        new Promise((resolve)=>{

            setTimeout(()=>{
              resolve(productos)
            },2000)

        }).then((data)=>{
          setItems(data);
        })
     },[])
  return (
  <div>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList items={items}/>
</div>
  )

}
export default ItemListContainer