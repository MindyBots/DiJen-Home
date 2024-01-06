import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';


const cards = [
  {
    title: 'Menu Curation',
    content: 'Collaborate with expert chefs for meticulous menu curation. Represent authentic tastes and culinary traditions from various Asian countries. Ensure precise ingredient proportions and cooking methods using automated kitchen equipment.',
  },
  {
    title: 'AI-Powered Personalization',
    content: 'Utilize AI to learn guest preferences, dietary requirements, and past orders. Recommend personalized menu options tailored to each guest\'s taste. Enable guests to explore new flavors and enjoy customized dining adventures.',
  },
  {
    title: 'Operational Efficiency with AI',
    content: 'Implement intelligent inventory management and automated order processing. Optimize efficiency, minimize wait times, and provide a seamless dining experience.',
  },
  {
    title: 'Balancing Tradition and Innovation',
    content: 'Integrate AI while respecting and honoring the cultural heritage of Asian cuisine. Strive for a harmonious balance between tradition and innovation. Showcase the skilled craftsmanship of our chefs in every dish.',
  },
  {
    title: 'Creating a Dining Destination',
    content: 'Offer an immersive experience in Asian flavors with AI-driven personalization. Guests to leave with memories of outstanding culinary adventures. Redefine the boundaries of Pan Asian cuisine through AI.',
  },
];

const CustomTabPanelContent = () => {

}


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function About() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const highlightedTabStyle = {
    backgroundColor: '#FFFFFF', // Adjust the background color as needed
  };

  return (
    <>
      <div style={{ marginTop: '0rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div>
            <p className="main-p">

            </p>
            <br></br><br></br>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="secondary tabs example" variant="fullWidth"
                  textColor="secondary"
                  indicatorColor="secondary"
                  sx={{
                    //"& button:hover": {backgroundColor: '#123B37'}
                    //opacity: 0.8, // Second opacity value
                  }}
                >
                  <Tab label={<h2 >OUR Journey</h2>} />
                  <Tab label={<h2 >MISSION</h2>} />
                  <Tab label={<h2 >VISION</h2>} />

                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <strong>DiJen Foods</strong> established in 2019 under single proprietorship evolved into DiJen Foods Pvt Ltd in 2023. As a first step, we intend to open Asian Stories, a restaurant serving Pan Asian cuisine, with the goal of growing the brand utilizing the franchise model.
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Grid container spacing={2}>
                  {cards.map((card, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                      <Zoom in={true} timeout={500 * index}>
                        <Card sx={{ borderRadius: 8, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                          <CardActionArea sx={{ background: '#F5F5F5' }}>
                            <CardContent>
                              <Typography variant="body1" sx={{ fontSize: '1.2em', textAlign: 'center', marginBottom: 3, color: '#00796B' }}>
                                {card.title}
                              </Typography>
                              <Typography variant="body1" sx={{ textAlign: 'center', color: '#555', marginBottom: 2 }}>
                                {card.content}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Zoom>
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <p className="main-p">Our Vision is to create a Pan Asian cuisine restaurant showcasing rich flavors and cultural diversity of Asia and also to enhance the dining experience with AI technology and combine skilled chef's artistry with AI innovation.</p>
                <ul>
                  <li className="main-p"><strong>AI-Powered Personalization:</strong> Analyze guest preferences using AI. Tailor menu recommendations based on dietary restrictions and preferences. Continuous learning and adaptation for exceptional dining experiences.</li>
                  <li className="main-p"><strong>Efficiency and Streamlining with AI:</strong> Automate order processing. Optimize inventory management. Provide a seamless and efficient dining experience.</li>
                  <li className="main-p"><strong>Preserving Authenticity:</strong> Curate a menu with traditional recipes, local ingredients, and culinary techniques. Blend heritage and innovation in each dish.</li>
                  <li className="main-p"><strong>Atmosphere & Experience:</strong> Blend Asian hospitality and AI innovation. Create a place for culinary adventure. Embrace the convenience and personalization of AI.</li>
                </ul>
              </CustomTabPanel>
            </Box>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
