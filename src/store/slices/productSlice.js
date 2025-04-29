import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  categories: [],
  selectedCategory: null,
  isLoading: false,
  error: null,
  searchQuery: '',
  filteredProducts: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.isLoading = false;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredProducts = state.products.filter(product => 
        (!state.selectedCategory || product.category === state.selectedCategory) &&
        (!state.searchQuery || product.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
      );
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter(product => 
        (!state.selectedCategory || product.category === state.selectedCategory) &&
        (!state.searchQuery || product.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
      );
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { 
  setProducts, 
  setCategories, 
  setSelectedCategory, 
  setSearchQuery, 
  setLoading, 
  setError 
} = productSlice.actions;

export default productSlice.reducer;