import React from 'react';
import { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const cardStyle = {
  width: '100%',
  minHeight: '100px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
  width: '100%',
  height: '500px',
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

const infoStyle = {
  marginBottom: '12px',
  fontSize: '1rem',
  color: '#666',
  height: '500px',
  padding: '10px'
};

const AnimatedCard = ({ title, description, imageUrl, info }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  const [isFlipped, setIsFlipped] = useState(false);

  const cardProps = useSpring({
    opacity: isFlipped ? 0 : 1,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg) scale(${isFlipped ? 0.95 : 1})`,
    display: isFlipped ? 'none' : 'flex',
  });

  const backCardProps = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${isFlipped ? 0 : -180}deg) scale(${isFlipped ? 1 : 0.95})`,
    display: isFlipped ? 'flex' : 'none',
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //const handleClick = () => {
    //setIsFlipped((prev) => !prev);
  //};

  return (
   <>
    <animated.div style={{ ...props, ...cardStyle, ...cardProps }}>
      <Card elevation={0} sx={cardStyle} onClick={handleClickOpen}>
        <CardContent style={contentStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>{imageUrl && <img src={imageUrl} alt="Card" style={imageStyle} />}</Grid>
            <Grid item xs={6}>      
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
      <Dialog open={open} onClose={handleClose}>
        <CardContent style={contentStyle}>
          <Grid container spacing={2}>
            <Grid item xs={6}>{imageUrl && <img src={imageUrl} alt="Card" style={imageStyle} />}</Grid>
            <Grid item xs={6}>      
              <DialogTitle>{title}</DialogTitle>
              <DialogContent>
                <DialogContentText>{description}</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} justifyContent='center'>Close</Button>
              </DialogActions>
            </Grid>
          </Grid>
        </CardContent>
      </Dialog>
    </animated.div>

    <animated.div style={{ ...props, ...cardStyle, ...backCardProps }} /*onClick={handleClick}*/ >
      <Card elevation={0} sx={cardStyle}>
        <CardContent style={contentStyle}>
          <Typography variant="h4" style={titleStyle}>
            {title}
          </Typography>
          <Typography variant="h6" style={descriptionStyle}>
            {description}
          </Typography>
          <Typography variant="body1" style={infoStyle}>
            {info}
          </Typography>
        </CardContent>
      </Card>
    </animated.div>
   </>
  );
};

export default AnimatedCard;
