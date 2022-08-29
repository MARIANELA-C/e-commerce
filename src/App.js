import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailCountainer from './componentes/ItemDetailCountainer/ItemDetailCountainer';
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element ={<ItemListContainer greeting="Item List Container"/>}/>
          <Route path='/item/:id' element={<ItemDetailCountainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
