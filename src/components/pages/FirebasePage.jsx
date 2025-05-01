import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import FirebaseFeatures from '../FirebaseFeatures';

const FirebasePage = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '90vh', py: 4 }}>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          Firebase Features
        </Typography>
        <FirebaseFeatures />
      </Container>
    </Box>
  );
};

export default FirebasePage;