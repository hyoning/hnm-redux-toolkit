import {Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import PrivateRoute from './route/PrivateRoute';
import Navbar from './component/Navbar';


function App() {
  return ( 
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<ProductAll />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/product/:id" element={<PrivateRoute/>}/>
        </Routes>
    </div>
  );
}

export default App;
