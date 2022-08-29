import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import airbag from '../../Asset/airbag.jpg'
import los_tipitos from '../../Asset/los_tipitos.jpg'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailCountainer = () => {
  const {id}=useParams();
    const[datos, setDatos]=useState([])

    useEffect (()=>{
        let productos=[
            {id:1, title:"Airbag", "price":300, image:airbag, description:"blalablllblb"},
            {id:2, title:"Los Tipitos", "price":200, image:los_tipitos, description:"blalablllblb"},
            {id:3, title:"Airbag", "price":300, image:airbag, description:"blalablllblb"},
            {id:4, title:"Los Tipitos", "price":200, image:los_tipitos, description:"blalablllblb"}
        ];
    productos.find((element)=>element.id===id) 
   
    new Promise((resolve)=>{
      
    setTimeout(()=>{
      resolve(productos)
       },2000)

    }).then((data)=>{
      setDatos(data);
    })
 },[id])

  return (
    <div>
        {Object.keys(datos).length&&<ItemDetail datos={datos}/>}
  
    </div>
  )
}

export default ItemDetailCountainer