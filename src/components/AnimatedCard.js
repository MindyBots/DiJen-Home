import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const cardStyle = {
  width: '100%',
  minHeight: '200px',
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
  height: 'auto',
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
  fontSize: '1rem',
  color: '#666',
};

const buttonStyle = {
  marginTop: '16px',
  backgroundColor: '#FF4081', // Update the background color
  color: '#FFF', // Set text color to white
  '&:hover': {
    backgroundColor: '#D81B60', // Update hover background color
  },
};

const AnimatedCard = ({ title, description, buttonText, onClick, imageUrl }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <animated.div style={{ ...props, ...cardStyle }}>
      <Card elevation={0} sx={cardStyle}>
        <CardContent style={contentStyle}>
          {imageUrl && <img src={imageUrl} alt="Card" style={imageStyle} />}
          <Typography variant="h5" style={titleStyle}>
            {title}
          </Typography>
          <Typography variant="body1" style={descriptionStyle}>
            {description}
          </Typography>
          <Button variant="contained" style={buttonStyle} onClick={onClick}>
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </animated.div>
  );
};

export default AnimatedCard;
