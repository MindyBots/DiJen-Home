import React from 'react';
import { useState } from 'react';
import { Container, Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AnimatedCard from './AnimatedCard';


const theme = createTheme();

const cards = [
  { title: 'Mr. Aswin Thottupurath', description: 'Director / Managing Director', imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse euismod odio vel quam posuere, eget auctor elit blandit. Quisque vestibulum nulla et ullamcorper iaculis. Curabitur in nunc vel eros scelerisque tempus a sit amet dui. Integer in justo vitae justo feugiat euismod. Nullam nec turpis ac justo sollicitudin malesuada. Nam imperdiet, odio id imperdiet auctor, felis sem pharetra nisi, vel luctus eros tortor ut ipsum. Suspendisse potenti. Maecenas condimentum est in tincidunt laoreet. Proin dictum metus vitae libero fermentum, id pharetra lacus aliquet. Vivamus consectetur elit id fringilla feugiat. Nunc vel risus a mi tincidunt hendrerit.Quisque volutpat odio non venenatis elementum. Aenean aliquet sagittis urna, vitae vehicula mauris congue a. Curabitur id libero vel dolor scelerisque dapibus eu at elit. In hac habitasse platea dictumst. Fusce in nibh eu quam eleifend ultrices. Integer volutpat nisi eget metus tincidunt, eu laoreet libero laoreet. Vivamus nec sodales ex. Vestibulum eu est nec nisi tincidunt bibendum.Maecenas tristique felis id metus varius, at ullamcorper risus scelerisque. Ut sit amet sodales orci. Quisque vestibulum, dolor nec venenatis ultricies, sapien nisl tristique purus, eu laoreet mi velit quis purus.'},
  { title: 'Mr. Surendran Choondanil', description: 'Director', imageUrl: 'https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym93bHxlbnwwfHwwfHx8MA%3D%3D', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse euismod odio vel quam posuere, eget auctor elit blandit. Quisque vestibulum nulla et ullamcorper iaculis. Curabitur in nunc vel eros scelerisque tempus a sit amet dui. Integer in justo vitae justo feugiat euismod. Nullam nec turpis ac justo sollicitudin malesuada. Nam imperdiet, odio id imperdiet auctor, felis sem pharetra nisi, vel luctus eros tortor ut ipsum. Suspendisse potenti. Maecenas condimentum est in tincidunt laoreet. Proin dictum metus vitae libero fermentum, id pharetra lacus aliquet. Vivamus consectetur elit id fringilla feugiat. Nunc vel risus a mi tincidunt hendrerit.Quisque volutpat odio non venenatis elementum. Aenean aliquet sagittis urna, vitae vehicula mauris congue a. Curabitur id libero vel dolor scelerisque dapibus eu at elit. In hac habitasse platea dictumst. Fusce in nibh eu quam eleifend ultrices. Integer volutpat nisi eget metus tincidunt, eu laoreet libero laoreet. Vivamus nec sodales ex. Vestibulum eu est nec nisi tincidunt bibendum.Maecenas tristique felis id metus varius, at ullamcorper risus scelerisque. Ut sit amet sodales orci. Quisque vestibulum, dolor nec venenatis ultricies, sapien nisl tristique purus, eu laoreet mi velit quis purus.' }
];

const Teams = () => {

  const [currentCardIndex] = useState(0);


  return (
    <>
    <h2 className="main-title about-h2">TEAMS</h2>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '40px', overflow: 'hidden' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <AnimatedCard
              title={cards[currentCardIndex].title}
              description={cards[currentCardIndex].description}
              imageUrl={cards[currentCardIndex].imageUrl}
              info={cards[currentCardIndex].info}
            />
          </Grid>
          <Grid item xs={6}>
            <AnimatedCard
              title={cards[currentCardIndex+1].title}
              description={cards[currentCardIndex+1].description}
              imageUrl={cards[currentCardIndex+1].imageUrl}
              info={cards[currentCardIndex+1].info}
            />
          </Grid>
        </Grid>
      </Container>
      <br></br>
    </ThemeProvider>
    </>
  );
};

export default Teams;
