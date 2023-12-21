import React from 'react';
import { Container, Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AnimatedCard from './AnimatedCard';

const theme = createTheme();

const Teams = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <>
    <h2 className="main-title about-h2">TEAMS</h2>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '40px' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
          <AnimatedCard
            title="Welcome to our Team"
            description="Explore our Team."
            buttonText="Know more"
            onClick={handleClick}
            imageUrl="https://mui.com/static/images/cards/paella.jpg" // Add the URL of your image
          />

          </Grid>
          {/* Add more cards as needed */}
        </Grid>
      </Container>
    </ThemeProvider>
    </>
  );
};

export default Teams;
