import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
<div>
      <ul className="nav navbar navbar-primry bg-primary">
         <li className="nav-item col-4 d-flex justify-content-start">
           <a className="nav-link active text-black" fw-bolder="page" href="./paginas/Productos">TICKET OK!</a>
         </li>
         
            <li className="nav-item">
                <a className="nav-link text-black" href="./paginas/Conciertos">CONCIERTOS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-black" href="./paginas/Productos">PRODUCTOS</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown" href="./paginas/Lista" role="button" aria-expanded="false">LISTA</a>
                <ul className="dropdown-menu">
                   <li className="dropdown-item">LISTA1</li>
                   <li className="dropdown-item">LISTA2</li>
                   <li className="dropdown-item">LISTA3</li>
                   <li className="dropdown-item">LISTA4</li>
                </ul> 
            </li>
         
        <CartWidget/>
         
     </ul>
       
</div>
  )
}

export default NavBar