import './App.css'
import {Switch, Route} from "react-router-dom"
import Header from './Components/Header'
import Photos from "./Pages/Photos"
import Cart from "./Pages/Cart"


function App() {
  
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">  
              <Photos/>
            </Route>
          
            <Route path="/cart">
              <Cart/>
            </Route>
           </Switch>
    </div>
  )
}

export default App
