import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import lemons from '../assets/water.jpg';


const TextOverlay = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
  textAlign: 'center',
});

const FullWidthImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '75vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const WhiteLine = styled(Box)({
  position: 'absolute',
  width: '90%',
  height: '1px',
  backgroundColor: 'white',
});

const BookConsultation = () => {
  const sections = {
    section: {
      image: lemons,
      header: "WE’LL CREATE A PLAN THAT WORKS FOR YOU",
      text: `Through my personalized coaching, I’ll work alongside you to develop an integrated plan to achieve full body wellness—often combining the practices of nutrition, exercise, lifestyle habits, and more. I will help you tune back into yourself, address the root cause of your symptoms, and unlock your full potential.`,
    },
  };

  return (
    <FullWidthImage sx={{ backgroundImage: `url(${sections.section.image})` }}>
      <TextOverlay>
        <WhiteLine style={{ top: '10%', }} />
        <Typography variant="h4" mb={2}>
          {sections.section.header}
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          mb={2} 
          sx={{ 
            paddingLeft: 30, 
            paddingRight: 30, 
            '@media (max-width: 600px)': {
              paddingLeft: 0,
              paddingRight: 0,
            },
          }}
        >
          {sections.section.text}
        </Typography>
        <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: '#9FA485', color: 'white', '&:hover': { backgroundColor: '#9FA485' } }}>Book Now</Button>
        <WhiteLine style={{ bottom: '10%' }} />
      </TextOverlay>
    </FullWidthImage>
  );
};

export default BookConsultation;
