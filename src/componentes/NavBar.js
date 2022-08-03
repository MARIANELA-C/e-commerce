import React from 'react'

const NavBar = () => {
  return (
<div>
      <ul className="nav justify-content-center navbar navbar-dark bg-dark">
        <li className="nav-item">
           <a className="nav-link active" fw-bolder="page" href="./paginas/Productos">TICKET OK!</a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="./paginas/Conciertos">CONCIERTOS</a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="./paginas/Productos">PRODUCTOS</a>
         </li>
         <li class="nav-item dropdown">
         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="./paginas/Lista" role="button" aria-expanded="false">LISTA</a>
           <ul className="dropdown-menu">
              <li className="dropdown-item">LISTA1</li>
              <li className="dropdown-item">LISTA2</li>
              <li className="dropdown-item">LISTA3</li>
              <li className="dropdown-item">LISTA4</li>
           </ul> 
         </li>
     </ul>
       
</div>
  )
}

export default NavBar