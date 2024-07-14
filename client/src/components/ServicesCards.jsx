import React from "react";
import { Paper, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import pose from "../assets/pose.jpeg"
import portrait from "../assets/portrait1.jpeg"

const ServicesCard = ({ title, description, link, image }) => {
    const styles = {
        servicesCard: {
            position: 'relative',
            overflow: 'hidden',
            marginBottom: 20,
            // marginTop: 20,
            textDecoration: 'none',
            // padding: 10
        },
        cardPaper: {
            position: 'relative',
            width: '100%',
            height: 300, // Adjust as needed
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
        },
        cardContent: {
            zIndex: 2,
            padding: 20,
            color: 'white',
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
            transition: 'filter 0.3s ease',
            filter: 'brightness(70%)',
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
                link="/contact"
                image={portrait}
            />
            <ServicesCard
                title="PRIVATE FITNESS"
                description="Unlock your full potential through personalized private fitness sessions, tailored to your goals to optimize both physical and mental well-being."
                link="/contact"
                image={pose}
            />
            <ServicesCard
                title="GROUP CLASSES"
                description="Since achieving wellness is more than just exercise and diet, I’ll be guiding you toward other helpful practices such as mindfulness training, aromatherapy, and more."
                link="https://www.corepoweryoga.com/content/teachers/7f5b4bc1-7a2f-4731-bab6-518ff012b399"
                image={pose}
            />
        </Grid>
    );
};

// Inline CSS for hover effect
const styles = document.createElement("style");
styles.innerHTML = `
    .card-image:hover {
        filter: brightness(40%) !important;
    }
`;
document.head.appendChild(styles);

export default ServicesCards;
