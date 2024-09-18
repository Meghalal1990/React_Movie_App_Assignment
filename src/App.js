import './App.css';
import Add from './components/Add';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import { Product } from './components/Product';




function App() {
  return (
    <div>
                        
 <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addmovie" element={<Add />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>


      </Routes>
    </div>
  );
}


export default App;


