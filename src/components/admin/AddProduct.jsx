import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { setProducts } from '../../store/slices/productSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const categories = [
    'Vegetables',
    'Fruits',
    'Dairy',
    'Bakery',
    'Beverages',
    'Snacks',
    'Household',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Validate price and stock as numbers
      if (isNaN(productData.price) || isNaN(productData.stock)) {
        throw new Error('Price and stock must be valid numbers');
      }

      let imageUrl = '';
      if (image) {
        const storage = getStorage();
        const imageRef = ref(storage, `products/${image.name}-${Date.now()}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const productRef = await addDoc(collection(db, 'products'), {
        ...productData,
        price: Number(productData.price),
        stock: Number(productData.stock),
        image: imageUrl,
        createdAt: new Date(),
      });

      setSuccess(true);
      setProductData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
      });
      setImage(null);

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Add New Product
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Product added successfully!
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Product Name"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              rows={3}
              label="Description"
              name="description"
              value={productData.description}
              onChange={handleChange}
            />

            <FormControl fullWidth margin="normal" required>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={productData.category}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              required
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={productData.price}
              onChange={handleChange}
              InputProps={{
                startAdornment: '$',
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Stock"
              name="stock"
              type="number"
              value={productData.stock}
              onChange={handleChange}
            />

            <Button
              variant="contained"
              component="label"
              fullWidth
              sx={{ mt: 2 }}
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>

            {image && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                Selected file: {image.name}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              disabled={loading}
            >
              {loading ? 'Adding Product...' : 'Add Product'}
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default AddProduct;