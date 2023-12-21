import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

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

  const handleScroll = (event) => {
    const scrollPosition = event.target.scrollLeft;
    const cardWidth = (event.target.clientWidth - gapBetweenCards * (cardsPerView - 1)) / cardsPerView;
    const newIndex = Math.round(scrollPosition / (cardWidth + gapBetweenCards));
    setIndex(newIndex);
  };

  const cardProps = useSpring({
    scrollLeft: index * ((100 + gapBetweenCards) / cardsPerView),
    opacity: 1,
    scale: 1,
  });

  const FlipCard = ({ brand, color, cardWidth }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const cardProps = useSpring({
      opacity: isFlipped ? 0 : 1,
      transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg) scale(${isHovered ? 1.1 : 1})`,
      display: isFlipped ? 'none' : 'flex',
    });

    const backCardProps = useSpring({
      opacity: isFlipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${isFlipped ? 0 : -180}deg)`,
      display: isFlipped ? 'flex' : 'none',
    });

    return (
      <>
        <animated.div
          className="card"
          style={{
            ...cardProps,
            flex: `0 0 ${cardWidth}%`,
            marginRight: `${gapBetweenCards}px`,
            backgroundColor: color,
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            boxSizing: 'border-box',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          onClick={() => setIsFlipped(!isFlipped)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Typography variant="h5" style={{ color: '#FFF' }}>
            {brand}
          </Typography>
        </animated.div>

        <animated.div
          className="card"
          style={{
            ...backCardProps,
            flex: `0 0 ${cardWidth}%`,
            marginRight: `${gapBetweenCards}px`,
            backgroundColor: color,
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            boxSizing: 'border-box',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          onClick={() => setIsFlipped(!isFlipped)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Typography variant="h5" style={{ color: '#FFF' }}>
            Back Content
          </Typography>
        </animated.div>
      </>
    );
  };

  const cardWidth = 100 / cardsPerView;

  return (
    <Grid container spacing={2} justifyContent="center" maxWidth="98%" sx={{ ml: 1 }}>
      <Grid item xs={12}>
        <animated.div
          className="cards"
          style={{
            display: 'flex',
            overflowX: 'scroll',
            scrollSnapType: `x mandatory`,
            ...cardProps,
            height: '300px',
          }}
          onScroll={handleScroll}
        >
          {cardsData.map((card, cardIndex) => (
            <FlipCard
              key={card.id}
              brand={card.brand}
              color={card.color}
              cardWidth={cardWidth}
            />
          ))}
        </animated.div>
      </Grid>
    </Grid>
  );
};

export default Carousel;
