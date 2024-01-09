import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { sendEmail } from './emailService';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#123B37',
    },
  },
});


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]*$/;
    const emailRegex = /^[A-Za-z0-9@.]*$/;
    const phoneRegex = /^[0-9+]*$/;

    // Validation logic
    let isValid = true;

    switch (name) {
      case 'firstName':
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert('Please fill in all fields.'); // Display an error message
      return;
    }

    try {
      // Send feedback email using EmailJS
      await sendEmail(formData);
      console.log('Feedback submitted:');
      alert('Feedback submitted successfully.');
    
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again later.');
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Container maxWidth="md">
        <h2 className="main-title about-h2" style={{color:'#123B37'}}>CONTACT US</h2>
        <Box
          component={Paper}
          elevation={3}
          className='contact'
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 'auto',
            marginTop: 5,
            borderRadius: 8,
          }}
        >
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
              label="Message"
              variant='outlined'
              fullWidth
              margin='normal'
              multiline
              rows={4}
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
            />
            <ThemeProvider theme={theme}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!isFormValid()}
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
            </ThemeProvider>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
