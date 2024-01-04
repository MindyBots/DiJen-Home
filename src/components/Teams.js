import React from 'react';
import { useState } from 'react';
import { Container, Grid, CssBaseline, ThemeProvider, createTheme, Button } from '@mui/material';
import AnimatedCard from './AnimatedCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const theme = createTheme();

const cards = [
  { title: 'Mr. Aswin Thottupurath', description: 'Director / Managing Director', imageUrl: 'https://mui.com/static/images/cards/paella.jpg', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse euismod odio vel quam posuere, eget auctor elit blandit. Quisque vestibulum nulla et ullamcorper iaculis. Curabitur in nunc vel eros scelerisque tempus a sit amet dui. Integer in justo vitae justo feugiat euismod. Nullam nec turpis ac justo sollicitudin malesuada. Nam imperdiet, odio id imperdiet auctor, felis sem pharetra nisi, vel luctus eros tortor ut ipsum. Suspendisse potenti. Maecenas condimentum est in tincidunt laoreet. Proin dictum metus vitae libero fermentum, id pharetra lacus aliquet. Vivamus consectetur elit id fringilla feugiat. Nunc vel risus a mi tincidunt hendrerit.Quisque volutpat odio non venenatis elementum. Aenean aliquet sagittis urna, vitae vehicula mauris congue a. Curabitur id libero vel dolor scelerisque dapibus eu at elit. In hac habitasse platea dictumst. Fusce in nibh eu quam eleifend ultrices. Integer volutpat nisi eget metus tincidunt, eu laoreet libero laoreet. Vivamus nec sodales ex. Vestibulum eu est nec nisi tincidunt bibendum.Maecenas tristique felis id metus varius, at ullamcorper risus scelerisque. Ut sit amet sodales orci. Quisque vestibulum, dolor nec venenatis ultricies, sapien nisl tristique purus, eu laoreet mi velit quis purus.'},
  { title: 'Mr. Surendran Choondanil', description: 'Director', imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse euismod odio vel quam posuere, eget auctor elit blandit. Quisque vestibulum nulla et ullamcorper iaculis. Curabitur in nunc vel eros scelerisque tempus a sit amet dui. Integer in justo vitae justo feugiat euismod. Nullam nec turpis ac justo sollicitudin malesuada. Nam imperdiet, odio id imperdiet auctor, felis sem pharetra nisi, vel luctus eros tortor ut ipsum. Suspendisse potenti. Maecenas condimentum est in tincidunt laoreet. Proin dictum metus vitae libero fermentum, id pharetra lacus aliquet. Vivamus consectetur elit id fringilla feugiat. Nunc vel risus a mi tincidunt hendrerit.Quisque volutpat odio non venenatis elementum. Aenean aliquet sagittis urna, vitae vehicula mauris congue a. Curabitur id libero vel dolor scelerisque dapibus eu at elit. In hac habitasse platea dictumst. Fusce in nibh eu quam eleifend ultrices. Integer volutpat nisi eget metus tincidunt, eu laoreet libero laoreet. Vivamus nec sodales ex. Vestibulum eu est nec nisi tincidunt bibendum.Maecenas tristique felis id metus varius, at ullamcorper risus scelerisque. Ut sit amet sodales orci. Quisque vestibulum, dolor nec venenatis ultricies, sapien nisl tristique purus, eu laoreet mi velit quis purus.' },
  { title: 'Card 3', description: 'Description for Card 3', imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse euismod odio vel quam posuere, eget auctor elit blandit. Quisque vestibulum nulla et ullamcorper iaculis. Curabitur in nunc vel eros scelerisque tempus a sit amet dui. Integer in justo vitae justo feugiat euismod. Nullam nec turpis ac justo sollicitudin malesuada. Nam imperdiet, odio id imperdiet auctor, felis sem pharetra nisi, vel luctus eros tortor ut ipsum. Suspendisse potenti. Maecenas condimentum est in tincidunt laoreet. Proin dictum metus vitae libero fermentum, id pharetra lacus aliquet. Vivamus consectetur elit id fringilla feugiat. Nunc vel risus a mi tincidunt hendrerit.Quisque volutpat odio non venenatis elementum. Aenean aliquet sagittis urna, vitae vehicula mauris congue a. Curabitur id libero vel dolor scelerisque dapibus eu at elit. In hac habitasse platea dictumst. Fusce in nibh eu quam eleifend ultrices. Integer volutpat nisi eget metus tincidunt, eu laoreet libero laoreet. Vivamus nec sodales ex. Vestibulum eu est nec nisi tincidunt bibendum.Maecenas tristique felis id metus varius, at ullamcorper risus scelerisque. Ut sit amet sodales orci. Quisque vestibulum, dolor nec venenatis ultricies, sapien nisl tristique purus, eu laoreet mi velit quis purus.' }
];

const Teams = () => {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };


  return (
    <>
    <h2 className="main-title about-h2">TEAMS</h2>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '40px', overflow: 'hidden' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={0.8} sx={{mt:30}}><Button onClick={handlePrev} variant='contained' color='warning'><ChevronLeftIcon fontSize='large' /></Button></Grid>
          <Grid item xs={10}>
            <AnimatedCard
              title={cards[currentCardIndex].title}
              description={cards[currentCardIndex].description}
              imageUrl={cards[currentCardIndex].imageUrl}
              info={cards[currentCardIndex].info}
            />
          </Grid>
          <Grid item xs={1} sx={{mt:30}}><Button onClick={handleNext} variant='contained' color='warning'><ChevronRightIcon fontSize='large' /></Button></Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    </>
  );
};

export default Teams;
