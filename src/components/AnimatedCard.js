import React from 'react';
import { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const cardStyle = {
  width: '100%',
  height: '400px', // Ensure the height matches the width
  backgroundColor: '#FFFFFF',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '50%', // Set border-radius to 50% for a perfect circle
  //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};


const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
};

const imageStyle = {
  width: '80px',
  borderRadius: '50% 50%',
};

const imageStyle1 = {
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  marginBottom: '12px',
};

const titleStyle = {
  marginBottom: '8px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
};

const descriptionStyle = {
  marginBottom: '12px',
  fontSize: '1.3rem',
  color: '#666',
};

const AnimatedCard = ({ title, description, imageUrl, info }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <>
    <animated.div style={{ ...props, ...cardStyle }}>
      <Card elevation={0} sx={cardStyle} onClick={handleClickOpen}>
        <CardContent style={contentStyle}>
          <Grid container spacing={2}>
            <Grid item xs={3.5}>{imageUrl && <img src={imageUrl} alt="Card" style={imageStyle} />}</Grid>
            <Grid item xs={7.5}>      
              <Typography variant="h5" style={titleStyle}>
                {title}
              </Typography>
              <Typography variant="body1" style={descriptionStyle}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='md' PaperProps={{
        style: {
          borderRadius: 16,
          padding: 16,
          backgroundColor: '#efebe9'
        },
      }}>
        <CardContent style={contentStyle} onClick={handleClose}>
          <Grid container spacing={2}>
            <Grid item xs={6}>{imageUrl && <img src={imageUrl} alt="Card" style={imageStyle1} />}</Grid>
            <Grid item xs={6}>      
              <DialogTitle>
                {title}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>{description}</DialogContentText>
                <br></br>
                <DialogContentText>{info}</DialogContentText>
              </DialogContent>
            </Grid>
          </Grid>
        </CardContent>
      </Dialog>
    </animated.div>
   </>
  );
};

export default AnimatedCard;
