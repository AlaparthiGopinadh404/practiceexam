import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import{Routes,Route} from 'react-router-dom';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Registeredit from './Components/Register/Registeredit';


function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Routes>
      
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/registeredit" element={<Registeredit/>}></Route>
        <Route path="/user" element={<User/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
