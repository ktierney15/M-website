import React from "react"
import { Box, Paper, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Import local images
import test from '../assets/test.jpeg';
import head1 from '../assets/head1.jpeg';

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

const Services = () =>{
    return (
        <div style={{ paddingTop: 150 }}>
                <Grid item xs={12} md={4}>
                    <img src={head1} alt="head" style={{ width: '100%', height: 'auto' }} />
                </Grid>
                <Typography variant="h2" style={{ color: 'black' }} gutterBottom>
                    Work With Me:                 
                </Typography>
                <Grid container spacing={3}>
                <Grid item xs={12} md={4} style={{ marginBottom: 20 }}>
                <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        HEALTH COACHING
                    </Typography>
                    <Typography variant="body1" paragraph style={{ textAlign: 'center' }} gutterBottom>
                        Our initial sessions will be dedicated to assessing your current wellness and creating a personalized plan to fit your unique needs and goals.
                    </Typography>
                    <Button component={Link} to="/contact" variant="contained" style={{ backgroundColor: '#BCB88A', color: 'white', border: '1px solid white' }}>
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
                    <Button component={Link} to="/contact" variant="contained" style={{ backgroundColor: '#BCB88A', color: 'white', border: '1px solid white' }}>
                        Book a workout                    
                    </Button>
                </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        GROUP CLASSES                   
                    </Typography>
                    <Typography variant="body1" paragraph style={{ textAlign: 'center' }} gutterBottom>
                        Since achieving wellness is more than just exercise and diet, I’ll be guiding you toward other helpful practices such as mindfulness training, aromatherapy, and more.                    
                    </Typography>
                    <Button component={Link} to="https://www.corepoweryoga.com/content/teachers/7f5b4bc1-7a2f-4731-bab6-518ff012b399" variant="contained" style={{ backgroundColor: '#BCB88A', color: 'white', border: '1px solid white' }}>
                        See my schedule
                    </Button>
                </Paper>
                </Grid>
            </Grid>

            {/* image section */}
            <FullWidthImage sx={{ backgroundImage: `url(${test})` }}>
                <TextOverlay style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" align="center" gutterBottom>
                    HOW YOU’LL FEEL
                </Typography>
                <Typography variant="h4" align="center">
                    MORE CONFIDENT AND BALANCED AND WITH INCREASED ENERGY, VITALITY, AND JOY
                </Typography>
                </TextOverlay>
            </FullWidthImage>

            {/* List section */}
            <div style={{ marginTop: 100, color: 'black' }}>
            <Typography variant="h6" gutterBottom>
              Your Free Health Coaching Consultation Will Include
            </Typography>
            <ul>
              <li>Comprehensive wellness assessment</li>
              <li>Personalized nutrition, mindfulness, and exercise plan to help you reach your goals</li>
              <li>Unlimited guidance and support via email</li>
              <li>Helpful tools, tips, and tricks for navigating your unique obstacles</li>
            </ul>
            <Button component={Link} to="/contact" variant="contained" color="primary">
                Book a free consultation                 
            </Button>
          </div>
        </div>
    )
}

export default Services