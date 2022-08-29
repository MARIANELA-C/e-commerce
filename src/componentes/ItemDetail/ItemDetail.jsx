import React from 'react'

const ItemDetail = ({datos}) => {
console.log(datos)
const {id,price,title,description,image}=datos;

  return (
    
    <div className='container'>
    <div className="card" style={{width: "18rem"}}>
         <img src={image} className="card-img-top" alt="..."/>
         <div className="card-body">
             <h1 className="card-title">{title}-{id}</h1>
             <p className="card-text">{price}</p>
             <p>{description}</p>
             
         </div>
    </div>
</div>
  )
}

export default ItemDetail