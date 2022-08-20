import React, { useState, useEffect } from 'react'

const ItemCount=({initial,stock,onAdd})=>{
    const[counter, setCounter]=useState(initial)
    const[onadd,setonAdd]=useState(onAdd)
    //let stock=5;
    
    

    useEffect(()=>{
       setCounter(counter);
   },[counter])
   

    return(
        <div>
            <div>{counter}</div>
            <button disabled ={counter>=stock}onClick={()=>setCounter(counter+1)}>Sumar</button>
            <button disabled={counter<=0} onClick={()=>setCounter(counter-1)}>Restar</button>

            <div>
                <div>{onadd}</div>                
                <button disabled={stock<=0}onClick={()=>setonAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default ItemCount
