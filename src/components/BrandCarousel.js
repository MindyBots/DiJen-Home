import React, { useState, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Card, CardContent, Typography, Button, Container, Grid } from '@mui/material';

const cardsData = [
  { id: 1, brand: 'Namma Veedu Vasanta Bhavan', color: '#FF4081' },
  { id: 2, brand: 'Junior Kuppanna', color: '#00BCD4' },
  { id: 3, brand: 'Madras Coffee House', color: '#4CAF50' },
  { id: 4, brand: 'Squeez Juice Bars', color: '#FF9800' },
  { id: 5, brand: 'Dessert Works', color: '#E91E63' },
];

const cardsPerView = 4;
const gapBetweenCards = 18;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const cardWidth = (containerRef.current.clientWidth - gapBetweenCards) / cardsPerView;
      const newIndex = Math.round(scrollPosition / (cardWidth + gapBetweenCards));
      setIndex(newIndex);
    }
  };

  const props = useSpring({
    scrollLeft: index * ((100 + gapBetweenCards) / cardsPerView),
    opacity: 1,
    scale: 1,
    config: config.gentle,
  });

  return (
      <Grid container spacing={2} justifyContent="center" maxWidth='98%' sx={{ml:1}} >
        <Grid item xs={12}>
          <animated.div
            className="cards"
            style={{
              display: 'flex',
              overflowX: 'scroll',
              scrollSnapType: `x mandatory`,
              ...props,
              height:'300px'
            }}
            ref={containerRef}
            onScroll={handleScroll}
          >
            {cardsData.map((card, cardIndex) => (
              <animated.div
                key={card.id}
                className="card"
                style={{
                  flex: `0 0 ${100 / cardsPerView}%`,
                  marginRight: cardIndex < cardsData.length - 1 ? `${gapBetweenCards}px` : '0',
                  backgroundColor: card.color,
                  borderRadius: '8px',
                  padding: '16px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', // Align content vertically
                  alignItems: 'center', // Align content horizontally
                  textAlign: 'center', // Center text
                  opacity: props.opacity,
                  transform: `scale(${props.scale})`,
                }}
              >
                <Typography variant="h5" style={{ color: '#FFF' }}>
                  {card.brand}
                </Typography>
                <br />
              </animated.div>
            ))}
          </animated.div>
        </Grid>
      </Grid>
  );
};

export default Carousel;
