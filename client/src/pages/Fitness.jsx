import React from "react";
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Import local images
import pose from "../assets/pose.jpeg";
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

const Fitness = () => {
    return (
        <div style={{ paddingTop: 150 }}>
            {/* 1:1 Section */}
            <Grid container spacing={0} sx={{ height: '50vh', padding: 2 }}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundImage: `url(${pose})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            borderRadius: '1%',
                            marginRight: 10
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                    <Box textAlign="center">
                        <Typography variant="h4" gutterBottom>
                            1:1 Coaching
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        {/* <Button component={Link} to="/section1" variant="contained" color="primary">
                            Learn More
                        </Button> */}
                        <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: '#9FA485', color: 'white', '&:hover': { backgroundColor: '#9FA485' } }}>Book with Me</Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Group Section */}
            <Grid container spacing={0} sx={{ height: '50vh', padding: 2 }}>
                <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
                    <Box textAlign="center">
                        <Typography variant="h4" gutterBottom>
                            Group Classes
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Button component={Link} to="/contact" variant="contained" sx={{ backgroundColor: '#9FA485', color: 'white', '&:hover': { backgroundColor: '#9FA485' } }}>Book with Me</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundImage: `url(${pose})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            borderRadius: '1%',
                            marginLeft: 10
                        }}
                    />
                </Grid>
            </Grid>

            {/* Existing image section */}
            <FullWidthImage sx={{ backgroundImage: `url(${pose})` }}>
                <TextOverlay style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6" align="center" gutterBottom>
                        HOW YOU’LL FEEL
                    </Typography>
                    <Typography variant="h4" align="center">
                        MORE CONFIDENT AND BALANCED AND WITH INCREASED ENERGY, VITALITY, AND JOY
                    </Typography>
                </TextOverlay>
            </FullWidthImage>

            <Grid item xs={12} md={4}>
                <img src={head1} alt="head" style={{ width: '100%', height: 'auto' }} />
            </Grid>
        </div>
    );
};

export default Fitness;
