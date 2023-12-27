import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const Franchise = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectBrand: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    // Check if any required field is empty
    return Object.values(formData).every((value) => value !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert('Please fill in all fields.'); // Display an error message
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const selectBrands = ['Namma Veedu Vasanta Bhavan', 'Junior Kuppanna', 'Madras Coffee House', 'Squeez Juice Bars', 'Dessert Works'];

  return (
    <Container maxWidth="md">
      <Box
        component={Paper}
        elevation={3}
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{mb:2}}>
          Franchise Form
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            label="Select Brand"
            variant="outlined"
            fullWidth
            margin="normal"
            select
            name="selectBrand"
            value={formData.selectBrand}
            onChange={handleChange}
          >
            {selectBrands.map((brand, index) => (
              <MenuItem key={index} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isFormValid()} 
            sx={{mt:2}}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Franchise;
