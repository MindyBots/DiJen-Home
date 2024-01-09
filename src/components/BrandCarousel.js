import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const cardsData = [
  { id: 1, color: '#ffffff', image: 'AsianKatha.jpeg', info: 'Namma Veedu Vasanta Bhavan restaurant was started in Trichy by Patron Mr. A. Muthukrishnan. Mr.A.Muthukrishnan started branches in Chennai. The chain of restaurants handled by Mr. M. Ravi was changed to Namma Veedu Vasanta Bhavan chain of restaurants. He is also the Vice President of the Tamil Nadu Hotels Association.' },
  { id: 2, color: '#e53935', image: 'https://i.pinimg.com/280x280_RS/af/88/03/af8803445a3896c2bbb0bc99189569a0.jpg', info: 'If you want to try Chinese and Sichuan cuisines, take your chance and come to this restaurant. Most people note that you can have good fried chicken, mushrooms and fried mushrooms here. Taste tasty brownies that are proposed at Chop N Stix.'},
  { id: 3, color: '#f5f5f5', brand: 'Coming Soon'}
];


const cardsPerView = 2;
const gapBetweenCards = 40;

//const useContinuousFlip = (callback, interval) => {
  //useEffect(() => {
    //const intervalId = setInterval(() => {
      //callback();
    //}, interval);

    //return () => {
      //clearInterval(intervalId);
    //};
  //}, [callback, interval]);
//};

const Carousel = () => {
  const [, setIndex] = useState(0);
  const containerRef = useRef(null);
  const [isAnimationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      console.error("Container not found");
      return;
    }

    const handleAnimation = () => {
      if (!isAnimationPaused) {
        const cardWidth = (container.clientWidth - gapBetweenCards * (cardsPerView - 1)) / cardsPerView;
        const newIndex = Math.round(container.scrollLeft / (cardWidth + gapBetweenCards));

        const scrollAmount = 2;
        container.scrollLeft += scrollAmount;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        }

        setIndex(newIndex);
      }
    };

    const intervalId = setInterval(() => {
      try {
        handleAnimation();
      } catch (error) {
        console.error("Error in animation loop:", error);
        clearInterval(intervalId);
      }
    }, 16);

    return () => {
      clearInterval(intervalId);
    };
  });

  const FlipCard = ({ isFirstCard, brand, color, cardWidth, info, image }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const cardProps = useSpring({
      opacity: isFlipped ? 0 : 1,
      transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg) scale(${isFlipped ? 0.95 : 1})`,
      display: isFlipped ? 'none' : 'flex',
    });

    const backCardProps = useSpring({
      opacity: isFlipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${isFlipped ? 0 : -180}deg) scale(${isFlipped ? 1.05 : 1})`,
      display: isFlipped ? 'flex' : 'none',
    });

    //useContinuousFlip(() => {
      //setIsFlipped((prev) => (isSixthCard ? prev : !prev));
      //setIsFlipped((prev) => (isSecondCard ? prev : !prev));
      //setIsFlipped((prev) => (isThirdCard ? prev : !prev));
      //setIsFlipped((prev) => (isFourthCard ? prev : !prev));
      //setIsFlipped((prev) => (isFifthCard ? prev : !prev));
   // }, 2000, isAnimationPaused);

    const handleClick = () => {
      setIsFlipped((prev) => !prev);
    };

    const handleMouseEnter = () => {
      setAnimationPaused(true);
    };

    const handleMouseLeave = () => {
      setAnimationPaused(false);
    };

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
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!isFirstCard && <img src={image} />}
          <Typography variant='h4'>{brand}</Typography>
          {isFirstCard && <img src={image} alt="Card" height='300px' /> }
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
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isFirstCard && <Typography variant="h6">{info}</Typography>}
          {!isFirstCard && <Typography variant="h6" style={{ color: '#FFF' }}>{info}</Typography>}
          <Typography variant='h4'>{brand}</Typography>
        </animated.div>
    </>
    );
  };

  const cardWidth = 100 / cardsPerView;

  return (
    <Grid container spacing={2} justifyContent="center" maxWidth="98%" sx={{ ml: 1 }}>
      <Grid item xs={12}>
        <div
          className="cards"
          ref={containerRef}
          style={{
            display: 'flex',
            overflowX: 'hidden',
            height: '300px',
          }}
        >
          {cardsData.map((card, cardIndex) => (
            <FlipCard
              key={card.id}
              brand={card.brand}
              color={card.color}
              cardWidth={cardWidth}
              info={card.info}
              image={card.image}
              isFirstCard={cardIndex === cardsData.length - 3}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default Carousel;
