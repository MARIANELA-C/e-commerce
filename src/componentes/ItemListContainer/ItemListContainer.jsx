import ItemList from '../ItemList/ItemList'
import ItemCount from './ItemCount/ItemCount'
import airbag from '../../Asset/airbag.jpg'
import los_tipitos from '../../Asset/los_tipitos.jpg'
import { useEffect, useState } from 'react'

const ItemListContainer = ({greeting}) => {
     const onAdd=(quantity)=>{
      console.log(`Compraste ${quantity} entradas`)
     }
     const[items, setItems]= useState([])

     useEffect(()=>{
      let productos=[
        {id:1, title:"Airbag", "price":300, image:airbag},
        {id:2, title:"Los Tipitos", "price":200, image:los_tipitos},
        {id:3, title:"Airbag", "price":300, image:airbag},
        {id:4, title:"Los Tipitos", "price":200, image:los_tipitos}
      ];

        new Promise((resolve)=>{

            setTimeout(()=>{
              resolve(productos)
            },2000)

        }).then((data)=>{
          setItems(data);
        })
     },[])
  return (
    items.length===0
    ?<h1>Cargando..</h1>
    :<div>
        <h1>{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList items={items}/>
     </div>
  )

}
export default ItemListContainer