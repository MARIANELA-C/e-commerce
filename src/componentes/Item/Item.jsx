import React from 'react';
import {Link} from 'react-router-dom'

const Item = ({id, title, price, image}) => {
  return (
    <div className='container'>
        <div className="card" style={{width: "18rem"}}>
             <img src={image} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{price}</p>
                 <Link to={`/item/${id}`}><button className="btn btn-primary">Ver Detalle</button></Link>
             </div>
        </div>
    </div>
  )
}

export default Item