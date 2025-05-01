import React from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { Add as AddIcon, List as ListIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';

const AdminDashboard = () => {
  const [showAddProduct, setShowAddProduct] = React.useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant={showAddProduct ? 'contained' : 'outlined'}
                startIcon={<AddIcon />}
                onClick={() => setShowAddProduct(!showAddProduct)}
                fullWidth
              >
                {showAddProduct ? 'Hide Add Product' : 'Add New Product'}
              </Button>
              <Button
                component={Link}
                to="/products"
                variant="outlined"
                startIcon={<ListIcon />}
                fullWidth
              >
                View Products
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          {showAddProduct ? (
            <AddProduct />
          ) : (
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Welcome to Admin Dashboard
              </Typography>
              <Typography variant="body1">
                Select an action from the quick actions menu to get started.
                You can add new products, view existing products, and manage your inventory.
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;