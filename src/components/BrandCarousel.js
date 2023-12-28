import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const cardsData = [
  { id: 1, color: '#FF4081', image: 'https://www.vasantabhavan.in/assets/images/VB_LOGO.png', info: 'Namma Veedu Vasanta Bhavan restaurant was started in Trichy by Patron Mr. A. Muthukrishnan. Mr.A.Muthukrishnan started branches in Chennai. The chain of restaurants handled by Mr. M. Ravi was changed to Namma Veedu Vasanta Bhavan chain of restaurants. He is also the Vice President of the Tamil Nadu Hotels Association.' },
  { id: 2, color: '#00BCD4', image: 'https://kuppanna.com/cdn/shop/files/Artboard-03_f9c57690-ac6e-435e-90e4-5c10ae492bbd_180x@2x.png?v=1642655973', info: 'Founded in 1960 by Thiru Kuppusamy & Thirumati Rukmini Amma an exponent in Kongu Cuisine, This brand has travelled lands and made people devour on its taste and uniqueness over the last 60 years. The JUNIOR KUPPANNA KITCHENS PRIVATE LIMITED brand needless to say is the leading brand in Kongu regional cuisine.' },
  { id: 3, color: '#4CAF50', image: 'https://madrascoffeehouse.com/wp-content/uploads/2023/05/cropped-mch-Logo.jpg', info: 'Born in 2010, Madras Coffee House has blossomed into a chain of more than 120 stores, spreading the aroma of authentic South Indian filter coffee throughout India.We believe that a cup of filter coffee is not just a beverage, its a story passed down from generation to generation.' },
  { id: 4, color: '#FF9800', image: 'https://public-data.phoenixnhance.com/retailerDetails/2022/9/27/2487225616-187-2022-9-27.png', info: 'Squeez Juice Bars function with a passion to serve and encourage you to lead a healthy and nutritious life. Each ingredient is carefully picked out from our locally sourced farms, ensuring that your drink is the healthiest and tastiest version of what you asked for.' },
  { id: 5, color: '#E91E63', image: 'https://public-data.phoenixnhance.com/retailerDetails/2022/2/9/61392482738-221-2022-2-9.png', info: 'Dessert Works opened in June 2001.  Owner and Head Chef Kristen Repa began her career over 20 years ago, focusing solely on pastry, working at world renowned and award winning pastry shops in the Boston area and in Europe.' },
  { id: 6, color: '#e53935', image: 'https://i.pinimg.com/280x280_RS/af/88/03/af8803445a3896c2bbb0bc99189569a0.jpg', info: 'If you want to try Chinese and Sichuan cuisines, take your chance and come to this restaurant. Most people note that you can have good fried chicken, mushrooms and fried mushrooms here. Taste tasty brownies that are proposed at Chop N Stix.'}
];


const cardsPerView = 4;
const gapBetweenCards = 18;

// Custom hook for continuous flip animation
const useContinuousFlip = (callback, interval) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      callback();
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [callback, interval]);
};

// ... (imports)

// ... (imports)

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
  }, [containerRef, cardsPerView, gapBetweenCards, isAnimationPaused]);

  const FlipCard = ({ color, cardWidth, info, isSixthCard, isSecondCard, isThirdCard, isFourthCard, isFifthCard, image }) => {
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

    useContinuousFlip(() => {
      setIsFlipped((prev) => (isSixthCard ? prev : !prev));
      setIsFlipped((prev) => (isSecondCard ? prev : !prev));
      setIsFlipped((prev) => (isThirdCard ? prev : !prev));
      setIsFlipped((prev) => (isFourthCard ? prev : !prev));
      setIsFlipped((prev) => (isFifthCard ? prev : !prev));
    }, 2000, isAnimationPaused);

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
          {image && <img src={image} alt="Card" />}
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
          <Typography variant="h6" style={{ color: '#FFF' }}>
            {info}
          </Typography>
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
              isSecondCard={cardIndex === cardsData.length - 5}
              isThirdCard={cardIndex === cardsData.length - 4}
              isFourthCard={cardIndex === cardsData.length - 3}
              isFifthCard={cardIndex === cardsData.length - 2}
              isSixthCard={cardIndex === cardsData.length - 1}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default Carousel;
