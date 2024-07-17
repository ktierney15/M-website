import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import ServiceCards from "../components/ServicesCards"
import BookConsultation from '../components/BookConsultation';

// Import local images
import pillars from "../assets/pillars.png"
import pose from "../assets/pose.jpeg"

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

// const TextOverlay = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100%',
//   color: 'white',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
//   padding: '20px',
//   textAlign: 'center',
// });

const FullWidthSection = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  paddingTop: 150,
  paddingBottom: 50,
}));

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <FullWidthSection>
        <Typography variant="h5">{sections.section1.textSmall}</Typography>
        <Typography variant="h2">{sections.section1.textLarge}</Typography>
        <Line />
      </FullWidthSection>

      {/* Image Section */}
      <div style={{marginLeft: 10, marginRight: 10}}>
        <ServiceCards />
      </div>
      <BookConsultation />

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
