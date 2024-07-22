import React from "react"
import { Grid, Typography, Button, Box } from '@mui/material';
import { Link } from "react-router-dom";

import portrait1 from '../assets/portrait1.jpeg';
import head1 from '../assets/head1.jpeg';


const About = () =>{
    return (
        <div>
             <div style={{ paddingTop: 150, color: "black" }}>
                <Grid container spacing={3}>
                    {/* <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                        <img src={portrait1} alt="Michelle" style={{ width: '60%', height: 'auto', margin: 10 }} />
                    </Grid> */}
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, overflow: 'hidden' }}>
                    <div style={{ width: '80%', height: 'auto', position: 'relative' }}>
                        <img src={portrait1} alt="Michelle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <div style={{ margin: 10 }}>
                        <Typography variant="h4" gutterBottom>
                            HI, I’M MICHELLE PARENTE
                        </Typography>
                        <Typography variant="h6" paragraph>
                            I am a New York City-based integrative nutrition health coach and yoga sculpt teacher. And I want to help you unlock your best self!                        
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Through personalized nutrition, fitness, and lifestyle guidance, I am here to support you every step of the way as you embrace a life of vitality and balance—a life you can’t wait to wake up to live. Whether you’re experiencing symptoms or seeking to optimize your well-being, we can work together to get you there.                         
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Through years of struggling through my own chronic symptoms (acne, bloating, fatigue, and more), I turned to integrative nutrition, fitness, and lifestyle changes to address the root of my imbalances and finally feel amazing. So wherever you are in your wellness, I've been there too. Let's navigate this journey together, with empathy, expertise, and unwavering support.                        
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Certifications
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Institute for Integrative Nutrition, Integrative Nutrition Health Coach (INHC)                        
                        </Typography>
                        <Typography variant="body1" paragraph>
                            CorePower Yoga, Yoga Sculpt Teacher (50-hour)                         
                        </Typography>
                        <Typography variant="body1" paragraph>
                            National CPR Foundation, Standard - CPR / AED                         
                        </Typography>
                        {/* <Button component={Link} to="/" variant="contained" sx={{ backgroundColor: '#9FA485', color: 'white', '&:hover': { backgroundColor: '#9FA485' } }}>See my Services</Button> */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                            <Button
                            component={Link}
                            to="/"
                            variant="contained"
                            sx={{
                                backgroundColor: '#9FA485',
                                color: 'white',
                                '&:hover': { backgroundColor: '#9FA485' },
                                fontSize: '1rem',  // Increases the font size
                                padding: '0.75rem 1.5rem',  // Increases the padding for a larger button
                            }}
                            >
                            See my Services
                            </Button>
                        </Box>
                    
                    
                    </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} style={{ margin: 0, padding: 0 }}>
                    <Box style={{ margin: 0, padding: 0 }}>
                        <img src={head1} alt="head" style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }} />
                    </Box>
                </Grid>
            </div>
        </div>
    )
}

export default About