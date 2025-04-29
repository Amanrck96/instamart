import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './components/pages/Home';
import ProductList from './components/pages/ProductList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import OrderList from './components/orders/OrderList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="cart" element={<div>Cart Page (Coming Soon)</div>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="admin" element={<div>Admin Dashboard (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
