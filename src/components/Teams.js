import React from 'react';
import { useState } from 'react';
import { Container, Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AnimatedCard from './AnimatedCard';


const theme = createTheme();

const cards = [
  { title: 'Mr. Aswin Thottupurath', description: 'Promoter & Managing Director', imageUrl: 'Surendran.jpeg', info: "A highly accomplished individual, he holds a mechanical engineering degree and postgraduate qualifications in marine engineering, backed by a decade of hands-on experience in the shipping industry. Recognized for his exceptional ability to confront and overcome extreme and unpredictable challenges, he embodies resilience and discipline throughout his professional journey. Beyond his engineering expertise, his deep-seated passion for gourmet taste and fine dining motivated him to venture into the Food and Beverage (F&B) industry. Integrating his engineering acumen with a genuine love for authentic culinary experiences, he introduces innovative ideas, aiming to deliver the finest gastronomic delights and an unmatched dining experience." },
  { title: 'Mr. Surendran Choondanil', description: 'Promoter & Non-Executive Director', imageUrl: 'Surendran.jpeg', info: "Armed with a bachelor's degree and nearly four decades of experience in the rigorous banking industry, he has consistently prioritized top-notch customer satisfaction throughout his professional journey. His remarkable capacity to empathize and craft practical solutions, especially during challenging moments such as lock-ins, not only characterizes his career but has also been instrumental in overcoming obstacles. These experiences have seamlessly transitioned him into a successful restaurateur, showcasing his ability to adapt and excel in diverse fields." }
];

const Teams = () => {

  const [currentCardIndex] = useState(0);


  return (
    <>
    <h2 className="main-title about-h2" style={{color:'#123B37'}}>OUR TEAM</h2>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '40px' }} className='teams'>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <AnimatedCard
              title={cards[currentCardIndex].title}
              description={cards[currentCardIndex].description}
              imageUrl={cards[currentCardIndex].imageUrl}
              info={cards[currentCardIndex].info}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
