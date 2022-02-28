// src/App.js
import './App.css';
import './components/Navabar/Navbar.css'
import Navbar from "./components/Navabar/Navbar"
import Body from "./components/body/body" 
import Main from "./components/main/main"

function App() {
  return (
    
    <div className="App">
    
    <div className='background'>
    <div>
      <Navbar/>
    </div>

    <div>
      <Main />
    </div>
    </div>

    <div>
      <Body />
    </div>


    
    
    </div>
    

  );
}
export default App;