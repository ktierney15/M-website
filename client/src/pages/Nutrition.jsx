import React from "react"
import { Box, Paper, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Import local images
import pose from "../assets/pose.jpeg"
import head1 from '../assets/head1.jpeg';


// components
import BookConsultation from "../components/BookConsultation"


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

const Nutrition = () =>{
    return (
        <div style={{ paddingTop: 150 }}>
            <Typography variant="h2" style={{ color: 'black' }} gutterBottom>
                Work With Me:                 
            </Typography>
            {/* List section */}
            <div style={{ color: 'black' }}>
                <Typography variant="h6" gutterBottom>
                Your Free Health Coaching Consultation Will Include
                </Typography>
                <ul>
                <li>Comprehensive wellness assessment</li>
                <li>Personalized nutrition, mindfulness, and exercise plan to help you reach your goals</li>
                <li>Unlimited guidance and support via email</li>
                <li>Helpful tools, tips, and tricks for navigating your unique obstacles</li>
                </ul>
            </div>

            <BookConsultation />
            <Grid item xs={12} md={4} style={{ margin: 0, padding: 0 }}>
                <Box style={{ margin: 0, padding: 0 }}>
                    <img src={head1} alt="head" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }} />
                </Box>
            </Grid>

            {/* <Grid item xs={12} md={4}>
                <img src={head1} alt="head" style={{ width: '100%', height: 'auto' }} />
            </Grid> */}

            {/* image section
            <FullWidthImage sx={{ backgroundImage: `url(${pose})` }}>
                <TextOverlay style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6" align="center" gutterBottom>
                    HOW YOU’LL FEEL
                </Typography>
                <Typography variant="h4" align="center">
                    MORE CONFIDENT AND BALANCED AND WITH INCREASED ENERGY, VITALITY, AND JOY
                </Typography>
                </TextOverlay>
            </FullWidthImage> */}
        </div>
    )
}

export default Nutrition