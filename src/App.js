
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Cart from './components/Cart';
import LogOut from './components/LogOut';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer
        autoClose={500}
        hideProgressBar={false}
        />
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/logout' element={<LogOut />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
