import React, { useState } from 'react'

const ItemCount=({initial,stock,onAdd})=>{
    const[counter, setCounter]=useState(initial)

    return(
        <div>
            <div>{counter}</div>
            <button disabled ={counter>=stock}onClick={()=>setCounter(counter+1)}>Sumar</button>
            <button disabled={counter<=0} onClick={()=>setCounter(counter-1)}>Restar</button>

            <div>
                <button disabled={stock<=0}onClick={()=>onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default ItemCount
