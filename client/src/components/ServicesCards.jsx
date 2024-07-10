import React from "react";
import { Paper, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ServicesCard = ({ title, description, buttonText, buttonLink }) => {
    return (
        <Grid item xs={12} md={4} style={{ marginBottom: 20, marginTop: 20 }}>
            <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1" paragraph style={{ textAlign: 'center' }} gutterBottom>
                    {description}
                </Typography>
                <Button
                    component={buttonLink ? Link : 'button'}  // Conditionally render as Link or button
                    to={buttonLink}
                    href={buttonLink}
                    variant="contained"
                    style={{ backgroundColor: '#BCB88A', color: 'white', border: '1px solid white' }}
                >
                    {buttonText}
                </Button>
            </Paper>
        </Grid>
    );
};

const ServicesCards = () => {
    return (
        <Grid container spacing={3}>
            <ServicesCard
                title="HEALTH COACHING"
                description="Our initial sessions will be dedicated to assessing your current wellness and creating a personalized plan to fit your unique needs and goals."
                buttonText="Book a free consultation"
                buttonLink="/contact"
            />
            <ServicesCard
                title="PRIVATE FITNESS"
                description="Unlock your full potential through personalized private fitness sessions, tailored to your goals to optimize both physical and mental well-being."
                buttonText="Book a workout"
                buttonLink="/contact"
            />
            <ServicesCard
                title="GROUP CLASSES"
                description="Since achieving wellness is more than just exercise and diet, I’ll be guiding you toward other helpful practices such as mindfulness training, aromatherapy, and more."
                buttonText="See my schedule"
                buttonLink="https://www.corepoweryoga.com/content/teachers/7f5b4bc1-7a2f-4731-bab6-518ff012b399"
            />
        </Grid>
    );
};

export default ServicesCards;
