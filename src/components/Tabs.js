import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const highlightedTabStyle = {
    backgroundColor: '#d7ccc8', // Adjust the background color as needed
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  variant="fullWidth">
          <Tab label={<h3>Our Journey</h3>} {...a11yProps(0)} style={value === 0 ? highlightedTabStyle : {}} />
          <Tab label={<h3>Our Vision</h3>} {...a11yProps(1)} style={value === 1 ? highlightedTabStyle : {}} />
          <Tab label={<h3>Our Mission</h3>} {...a11yProps(2)} style={value === 2 ? highlightedTabStyle : {}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h3>Our Journey</h3>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h3>Our Vision</h3>
        <p className="main-p">Our Vision is to create a Pan Asian cuisine restaurant showcasing rich flavors and cultural diversity of Asia and also to enhance the dining experience with AI technology and combine skilled chef's artistry with AI innovation.</p>
        <ul>
          <li className="main-p"><strong>AI-Powered Personalization:</strong> Analyze guest preferences using AI. Tailor menu recommendations based on dietary restrictions and preferences. Continuous learning and adaptation for exceptional dining experiences.</li>
          <li className="main-p"><strong>Efficiency and Streamlining with AI:</strong> Automate order processing. Optimize inventory management. Provide a seamless and efficient dining experience.</li>
          <li className="main-p"><strong>Preserving Authenticity:</strong> Curate a menu with traditional recipes, local ingredients, and culinary techniques. Blend heritage and innovation in each dish.</li>
          <li className="main-p"><strong>Atmosphere & Experience:</strong> Blend Asian hospitality and AI innovation. Create a place for culinary adventure. Embrace the convenience and personalization of AI.</li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h3>Our Mission</h3>
        <p className="main-p">Our Mission is to seamlessly blend traditional culinary artistry with AI technology in a Pan Asian cuisine restaurant and to provide unforgettable dining experiences celebrating diverse Asian flavors and cultures.</p>
        <ul>
          <li className="main-p"><strong>Menu Curation:</strong> Collaborate with expert chef for meticulous menu curation. Represent authentic tastes and culinary traditions from various Asian countries. Ensure precise ingerdient proportions and cooking methods using automated kitchen equipment.</li>
          <li className="main-p"><strong>AI-Powered Personalization:</strong> Utilize AI to learn guest preferences, dietary requirements, and past orders. Recommend personalized menu options tailored to each guest's taste. Enable guests to explore new flavors and enjoy customized dining adventures.</li>
          <li className="main-p"><strong>Operational Efficiency with AI:</strong> Implement intelligent inventory management and automated order processing. Optimize efficiency, minimize wait times, and provide a seamless dining experience.</li>
          <li className="main-p"><strong>Balancing Tradition and innovation:</strong> Integrate AI while respecting and honoring the cultural heritage of Asian cuisine. Strive for a harmonious balance between tradition and innovation. Showcase the skilled craftsmanship of our chefs in every dish.</li>
          <li className="main-p"><strong>Creating a Dining destination:</strong> Offer an immersive experience in Asian flavors with AI-driven personalization. Guests to leave with memories of outstanding culinary adventures. Redefine the boundaries of Pan Asian cuisine through AI.</li>
        </ul>
      </CustomTabPanel>
    </Box>
  );
}