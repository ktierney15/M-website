import React from 'react';
import { Box, Typography, Paper, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

import ServiceCards from "../components/ServicesCards"

// Import local images
import pillars from "../assets/pillars.png"
import pose from "../assets/pose.jpeg"

const sections = {
  section1: {
    textSmall: "Let me help you",
    textLarge: "unlock your best self",
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
  section3: {
    image: pose,
    text: `WE’LL CREATE A PLAN THAT WORKS FOR YOU
Through my personalized coaching, I’ll work alongside you to develop an integrated plan to achieve full body wellness—often combining the practices of nutrition, exercise, lifestyle habits, and more. I will help you tune back into yourself, address the root cause of your symptoms, and unlock your full potential.`,
  },
};

const FullWidthImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const TextOverlay = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
  padding: '20px',
  textAlign: 'center',
});

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
      </FullWidthSection>

      {/* Image Section */}
      {/* <FullWidthImage sx={{ backgroundImage: `url(${sections.section1.image})` }} /> */}

      {/* Cards Section */}
      <ServiceCards />

      {/* Image and List Section */}
      <Box width="100%" p={4}>
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
      </Box>

      {/* Text and Image with Button Section */}
      <FullWidthImage sx={{ backgroundImage: `url(${sections.section3.image})` }}>
        <TextOverlay flexDirection="column">
          <Typography variant="h5" align="center" mb={2}>
            {sections.section3.text}
          </Typography>
          <Button variant="contained" color="primary">Book Now</Button>
        </TextOverlay>
      </FullWidthImage>
    </div>
  );
};

export default HomePage;
