import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { LocalShipping, Timer, Security } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      title: '24/7 Delivery',
      description: 'We deliver your essentials round the clock, whenever you need them.'
    },
    {
      icon: <Timer sx={{ fontSize: 40 }} />,
      title: '20-Minute Delivery',
      description: 'Lightning-fast delivery guaranteed within 20 minutes of your order.'
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Secure Shopping',
      description: 'Your payments and personal information are always protected.'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '90vh' }}>
      <Container>
        {/* Hero Section */}
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Get Your Essentials
          </Typography>
          <Typography variant="h4" color="text.secondary" paragraph>
            Delivered in 20 Minutes
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/order')}
              sx={{ mr: 2 }}
            >
              Place Order
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/admin')}
            >
              Admin Dashboard
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ py: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <Box sx={{ p: 2, color: 'primary.main' }}>
                  {feature.icon}
                </Box>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Experience Lightning-Fast Delivery?
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/register')}
            sx={{ mt: 2 }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;