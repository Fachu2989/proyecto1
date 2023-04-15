import { NavBar } from './components/navBar';
import './App.css';
import { ItemList } from './components/itemList';

function App() {
  return (
    <div className="App">
      {<NavBar/> }
      {<ItemList saludo={'Carniceria atendida por sus propios dueños'}/>}
    </div>
  );
}

export default App;
