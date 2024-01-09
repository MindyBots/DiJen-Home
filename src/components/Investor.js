import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import Footer1 from './Footer1';
import Header1 from './Header1';

const investors = [
  { id: 1, name: 'John Doe', investmentAmount: 100000 },
  { id: 2, name: 'Jane Smith', investmentAmount: 75000 },
  { id: 3, name: 'Bob Johnson', investmentAmount: 50000 },
  { id: 4, name: 'Alice Brown', investmentAmount: 120000 },
  { id: 5, name: 'Charlie Williams', investmentAmount: 90000 },
  { id: 6, name: 'Eva Davis', investmentAmount: 80000 },
];

const Investor = () => {
  return (
    <>
    <Container sx={{ paddingY: 4, height:'900px' }}>
      <Header1 />
      <Typography variant="h2" align="center" sx={{ marginBottom: 8, marginTop: 20 }}>
        Meet Our Investors
      </Typography>
      <Grid container spacing={3}>
        {investors.map((investor) => (
          <Grid key={investor.id} item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
                  {investor.name}
                </Typography>
                <Typography color="textSecondary">
                  Investment Amount: ${investor.investmentAmount.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer1 />
    </>
  );
};

export default Investor;
