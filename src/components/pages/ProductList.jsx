import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Rating,
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  // Mock products data - replace with actual data from your backend
  const products = [
    {
      id: 1,
      name: 'Fresh Vegetables Bundle',
      price: 24.99,
      rating: 4.5,
      image: 'https://source.unsplash.com/400x300/?vegetables',
      description: 'A fresh selection of seasonal vegetables.'
    },
    {
      id: 2,
      name: 'Organic Fruits Pack',
      price: 29.99,
      rating: 4.8,
      image: 'https://source.unsplash.com/400x300/?fruits',
      description: 'Handpicked organic fruits from local farms.'
    },
    {
      id: 3,
      name: 'Daily Essentials Kit',
      price: 34.99,
      rating: 4.3,
      image: 'https://source.unsplash.com/400x300/?groceries',
      description: 'Essential household items for daily needs.'
    },
    {
      id: 4,
      name: 'Breakfast Bundle',
      price: 19.99,
      rating: 4.6,
      image: 'https://source.unsplash.com/400x300/?breakfast',
      description: 'Complete breakfast essentials package.'
    }
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={product.rating} precision={0.1} readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({product.rating})
                  </Typography>
                </Box>
                <Typography variant="h6" color="primary">
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AddShoppingCart />}
                  onClick={() => {
                    dispatch(addItem(product));
                    setSnackbarMessage(`${product.name} added to cart`);
                    setOpenSnackbar(true);
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductList;