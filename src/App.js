import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <header>
      <ItemListContainer greeting="Item List Container"/>
        
      </header>
      
    </div>
  );
}

export default App;
