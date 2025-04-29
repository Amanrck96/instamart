import React, { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import OrderList from '../orders/OrderList';
import { setupOrderListeners } from '../../firebase/orderService';

const AdminDashboard = () => {
  useEffect(() => {
    // Set up real-time listeners for orders
    const unsubscribe = setupOrderListeners();
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <OrderList />
      </Box>
    </Container>
  );
};

export default AdminDashboard;