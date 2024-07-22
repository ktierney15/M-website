import React from "react";
import { Paper, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import portrait from "../assets/portrait3.jpg";
import food from "../assets/food1.webp"
import group from "../assets/group2.jpg"

const ServicesCard = ({ title, description, link, image }) => {
    const styles = {
        servicesCard: {
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 20,
            textDecoration: 'none',
        },
        cardPaper: {
            position: 'relative',
            width: '100%',
            height: '60vh', // Adjust as needed
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            borderRadius: '1%',
        },
        cardContent: {
            zIndex: 2,
            padding: 20,
            color: 'black',
        },
        cardImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            // transition: 'filter 0.3s ease',
            transition: 'opacity 0.3s ease',
            // filter: 'brightness(70%)',
            opacity: '45%',
            borderRadius: '1%',
        },
    };

    return (
        <Grid item xs={12} md={4} style={styles.servicesCard}>
            <Link to={link} style={styles.servicesCard}>
                <Paper style={styles.cardPaper} elevation={3}>
                    <div style={styles.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {description}
                        </Typography>
                    </div>
                    <div
                        style={{
                            ...styles.cardImage,
                            backgroundImage: `url(${image})`,
                        }}
                        className="card-image"
                    ></div>
                </Paper>
            </Link>
        </Grid>
    );
};

const ServicesCards = () => {
    return (
        <Grid container spacing={3}>
            <ServicesCard
                title="HEALTH COACHING"
                description="Our initial sessions will be dedicated to assessing your current wellness and creating a personalized plan to fit your unique needs and goals."
                link="/nutrition"
                image={food}
            />
            <ServicesCard
                title="PRIVATE FITNESS"
                description="Unlock your full potential through personalized private fitness sessions, tailored to your goals to optimize both physical and mental well-being."
                link="/fitness"
                image={portrait}
            />
            <ServicesCard
                title="GROUP CLASSES"
                description="Since achieving wellness is more than just exercise and diet, I’ll be guiding you toward other helpful practices such as mindfulness training, aromatherapy, and more."
                link="/fitness"
                image={group}
            />
        </Grid>
    );
};

// Inline CSS for hover effect
const styles = document.createElement("style");
styles.innerHTML = `
    .card-image:hover {
        // filter: brightness(40%) !important;
        opacity: 0.1 !important;
    }
`;
document.head.appendChild(styles);

export default ServicesCards;

