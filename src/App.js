import logo from './logo.svg';
import './App.css';
import Parent from './Components/Parent'
// import A from './Components/Context/A'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navabar from './Components/Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import ReactJs from './Components/React'
import Angular from './Components/Angular'
import Python from './Components/Python'
// import A from './Components/ParentToChild/A'
import Parent1 from './Components/ChildtoParent/A'
import AComp from './Components/ContextAPI/A'
function App() {
  return (
    <div className="App">
     <AComp />
      
     
    </div>
  );
}

export default App;
