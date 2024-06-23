import React from 'react';
import { Box, Typography, Paper, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Import local images
import test from '../assets/test.jpeg';

const sections = {
  section1: {
    text: "Let me help you unlock your best self",
    image: test,
  },
  section2: {
    image: test,
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
    image: test,
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
  padding: theme.spacing(8, 2),
}));

const HomePage = () => {
  return (
    <>
      {/* Header Section */}
      <FullWidthSection>
        <Typography variant="h4">{sections.section1.text}</Typography>
      </FullWidthSection>

      {/* Image Section */}
      <FullWidthImage sx={{ backgroundImage: `url(${sections.section1.image})` }} />

      {/* Cards Section */}
      <Typography variant="h2" gutterBottom>
                    Work With Me:                 
                </Typography>
                <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{
                            padding: 20,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                            border: '2px solid #ccc',
                            color: 'white'
                        }}>
                    <Typography variant="h5" gutterBottom>
                        HEALTH COACHING
                    </Typography>
                    <Typography variant="body1" paragraph style={{ textAlign: 'center' }} gutterBottom>
                        Our initial sessions will be dedicated to assessing your current wellness and creating a personalized plan to fit your unique needs and goals.
                    </Typography>
                    <Button component={Link} to="/contact" variant="contained" style={{ color: 'white', border: '1px solid white' }}>
                        Book a free consultation
                    </Button>
                </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        PRIVATE FITNESS                    
                    </Typography>
                    <Typography variant="body1" paragraph style={{ textAlign: 'center' }} gutterBottom>
                        Unlock your full potential through personalized private fitness sessions, tailored to your goals to  optimize both physical and mental well-being.                    
                    </Typography>
                    <Button component={Link} to="/contact" variant="contained" color="primary">
                        Book a workout                    
                    </Button>
                </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Group classes                   
                    </Typography>
                    <Typography variant="body1" paragraph style={{ textAlign: 'center' }} gutterBottom>
                        Since achieving wellness is more than just exercise and diet, I’ll be guiding you toward other helpful practices such as mindfulness training, aromatherapy, and more.                    
                    </Typography>
                    <Button component={Link} to="https://www.corepoweryoga.com/content/teachers/7f5b4bc1-7a2f-4731-bab6-518ff012b399" variant="contained" color="primary">
                        See my schedule
                    </Button>
                </Paper>
                </Grid>
            </Grid>

      {/* Image and List Section */}
      <Box width="100%" p={4}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <FullWidthImage sx={{ height: '50vh', backgroundImage: `url(${sections.section2.image})` }} />
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
    </>
  );
};

export default HomePage;
