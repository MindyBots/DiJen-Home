import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectBrand: '',
  });

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
  
    if (isValid) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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

  return (
    <div style={{ backgroundColor: '#e3f2fd', minHeight: '100vh', padding: '16px' }}>
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
          Feedback Form
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
            label="Your Feedback"
            variant='outlined'
            fullWidth
            margin='normal'
            multiline
            rows={4}
          />
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
  );
};

export default Contact;
