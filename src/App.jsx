import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/common/Layout';
import Home from './components/pages/Home';
import ProductList from './components/pages/ProductList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import OrderList from './components/orders/OrderList';
import AdminDashboard from './components/admin/AdminDashboard';
import FirebasePage from './components/pages/FirebasePage';
import './App.css';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector(state => state.auth);
  const ADMIN_EMAIL = 'amanrck69@gmail.com';

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.email !== ADMIN_EMAIL) {
    return <Navigate to="/" />;
  }

  return children;
};

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
          <Route path="admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          <Route path="firebase-features" element={<FirebasePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
