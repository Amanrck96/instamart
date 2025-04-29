import { Box, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Instamart
          </Typography>
          <Button color="inherit" onClick={() => navigate('/order')}>Orders</Button>
          <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
          <IconButton color="inherit" onClick={() => navigate('/cart')}>
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          px: 2, 
          mt: 'auto', 
          backgroundColor: (theme) => theme.palette.grey[200]
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Instamart. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;