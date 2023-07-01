
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Header } from './components/Header/Header'

function App() {
  
  return (
    
      <div>
        <Header/>
        <ItemListContainer greeting={"Welcome to React!"}/>        
      </div>     
    
  )
}

export default App
