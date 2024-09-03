import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

import ServiceCards from "../components/ServicesCards"
import BookConsultation from '../components/BookConsultation';

// Import local images
import pillars from "../assets/pillars.png"
import pose from "../assets/pose.jpeg"
import head1 from '../assets/head1.jpeg';


const sections = {
  section1: {
    textSmall: "Let me help you",
    textLarge: "UNLOCK YOUR BEST SELF",
    image: pose,
  },
  section2: {
    image: pillars,
    header: "LET’S WORK TOGETHER TO ADDRESS: ",
    listItems: [
      "nutrition",
      "fitness",
      "imbalanced hormones",
      "stress",
      "digestive problems",
      "gut imbalances",
      "mood",
      "sleep",
      "goal setting",
      "fatigue",
      "brain fog",
      "women's health",
      "nervous system health"
    ],
  },
};

const FullWidthImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const Line = styled(Box)({
  position: 'absolute',
  width: '80%',
  height: '1px',
  backgroundColor: 'black',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const FullWidthSection = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginTop: 70,
  paddingTop: 40,
  paddingBottom: 20,
  color: 'black',
  '& h2': {
    fontSize: '3rem', // Default font size for larger screens
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem', // Font size for medium screens
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem', // Font size for small screens
    },
  },
}));

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <div style={{ backgroundColor: '#E7D9CB', margin: 20 }}>
      <FullWidthSection>
        <Typography variant="h5">{sections.section1.textSmall}</Typography>
        <Typography variant="h2">{sections.section1.textLarge}</Typography>
        <Line />
      </FullWidthSection>

      {/* Image Section */}
      <div style={{marginLeft: 40, marginRight: 40}}>
        <ServiceCards />
      </div>
      </div>

      <BookConsultation />
      <Grid item xs={12} md={4} style={{ margin: 0, padding: 0 }}>
          <Box style={{ margin: 0, padding: 0 }}>
              <img src={head1} alt="head" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }} />
          </Box>
      </Grid>

      {/* Image and List Section */}
      {/* <Box width="100%" p={4}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <FullWidthImage sx={{ height: '70vh', backgroundSize: 'contain', backgroundImage: `url(${sections.section2.image})` }} />
          </Grid>
          <Grid item xs={12} md={6}>
            
            <Box p={4}>
            <Typography variant="h4">{sections.section2.header}</Typography>
              <ul>
                {sections.section2.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </div>
  );
};

export default HomePage;
