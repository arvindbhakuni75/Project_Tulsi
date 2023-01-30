
import './App.css';
import Home from './components/Home';
import Login from './components/sign-Elements/Login';
import About from './components/About404';
import Dashboard from './components/Dashboard/Dashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';

import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Sign_up from './components/sign-Elements/Sign-up';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-Up' element ={<Sign_up />} />
        <Route path='/about' element = {<About />} />
        <Route exect path='/*' element={<Home />} />
        <Route exect path='/deshboard/*' element={<Dashboard />} />
        <Route exect path = '/userdashboard/' element = {<UserDashboard />} />
        
      </Routes>
      
    </BrowserRouter>

      
    </>
  );
}

export default App;
