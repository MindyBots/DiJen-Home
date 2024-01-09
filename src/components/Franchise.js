import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { AppBar, FormControl, Grid } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Footer1 from './Footer1';

const Franchise = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectBrand: '',
  });

  const [alphabetsValue, setAlphabetsValue] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'lastName' && value.toLowerCase() === formData.firstName.toLowerCase()) {
      return;
    }
  
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]*$/;
    const emailRegex = /^[A-Za-z0-9@.]*$/;
    const phoneRegex = /^[0-9+]*$/;
  
    // Validation logic
    let isValid = true;
  
    switch (name) {
      case 'firstName':
        isValid = nameRegex.test(value);
        break;
      case 'lastName':
        isValid = nameRegex.test(value);
        break;
      case 'email':
        isValid = emailRegex.test(value);
        break;
      case 'phoneNumber':
        isValid = phoneRegex.test(value);
        break;
      default:
        break;
    }

    if (name === 'selectBrand') {
      setAlphabetsValue('');
    }
  
    if (isValid) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAlphabetsChange = (event) => {
    // Use a regular expression to allow only alphabets
    const newValue = event.target.value.replace(/[^A-Za-z]/g, '');
    setAlphabetsValue(newValue);
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
  };

  const handleClick = () => {
      navigate('/');
  };

  const selectBrands = ['Namma Veedu Vasanta Bhavan', 'Junior Kuppanna', 'Madras Coffee House', 'Squeez Juice Bars', 'Dessert Works', 'Others'];

  return (
    <>
    <div style={{ backgroundColor: '#e8eaf6', minHeight: '85vh', padding: '10px' }}>
    <AppBar position='fixed' sx={{ height: '80px', backgroundColor: '#123B37', opacity: 0.9 }}>
      <Grid container alignItems="center" maxWidth='xl'>
        <Grid item xs={8} sx={{ml:16}}>
          <Typography variant='h4' color='#FFE598' sx={{fontWeight: 400, fontSize: '28px', letterSpacing: '2px'}}>DiJen Foods</Typography>
        </Grid>
        <Grid item>
          <Button href='/' sx={{textTransform:'none'}}><Typography variant='body1' color='#FFE598' sx={{letterSpacing: '2px', fontWeight: 300, fontSize: '20px'}}>Home</Typography></Button>
        </Grid>
      </Grid>
    </AppBar>
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
          marginTop: 25,
          borderRadius: 8,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{mb:3}}>
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
          <FormControl fullWidth margin="normal">
            <InputLabel id="selectBrand-label">Select Brand</InputLabel>
              <Select
                labelId="selectBrand-label"
                id="selectBrand"
                value={formData.selectBrand}
                label="Select Brand"
                name="selectBrand"
                onChange={handleChange}
              >
                {selectBrands.map((brand, index) => (
                  <MenuItem key={index} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formData.selectBrand === 'Others' && (
              <TextField
                label="Enter your brand"
                variant="outlined"
                fullWidth
                margin="normal"
                name="brand"
                value={alphabetsValue}
                onChange={handleAlphabetsChange}
              />
            )}
          <Button
            type="submit"
            href='/'
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isFormValid()} 
            sx={{mt:3}}
            onClick={handleClick}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
    </div>
    <Footer1 />
    </>
  );
};

export default Franchise;
