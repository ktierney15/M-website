import React from "react";
import { Paper, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import pose from "../assets/pose.jpeg"
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
            filter: 'brightness(60%)',
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
        filter: brightness(40%) !important;
    }
`;
document.head.appendChild(styles);

export default ServicesCards;


// import React from "react";
// import { Paper, Typography, Grid } from '@mui/material';
// import { Link } from 'react-router-dom';

// import pose from "../assets/pose.jpeg";
// import portrait from "../assets/portrait3.jpg";
// import food from "../assets/food1.webp";
// import group from "../assets/group2.jpg";

// const ServicesCard = ({ title, description, link, image }) => {
//     const styles = {
//         servicesCard: {
//             position: 'relative',
//             overflow: 'hidden',
//             marginBottom: 20,
//             textDecoration: 'none',
//         },
//         cardPaper: {
//             position: 'relative',
//             width: '100%',
//             height: '60vh', // Adjust as needed
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'flex-end',
//             alignItems: 'center',
//             textAlign: 'center',
//             borderRadius: '1%',
//             overflow: 'hidden',
//             transition: 'all 0.3s ease',
//         },
//         cardContent: {
//             zIndex: 2,
//             padding: 20,
//             color: 'white',
//             transition: 'color 0.3s ease',
//         },
//         cardImage: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             zIndex: 1,
//             transition: 'filter 0.3s ease, background-color 0.3s ease',
//             borderRadius: '1%',
//         },
//         overlay: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(255, 255, 255, 0.7)',
//             zIndex: 2,
//             opacity: 0,
//             transition: 'opacity 0.3s ease',
//         },
//     };

//     return (
//         <Grid item xs={12} md={4} style={styles.servicesCard}>
//             <Link to={link} style={styles.servicesCard}>
//                 <Paper style={styles.cardPaper} elevation={3} className="card-paper">
//                     <div style={styles.overlay} className="overlay"></div>
//                     <div style={styles.cardContent} className="card-content">
//                         <Typography variant="h5" gutterBottom>
//                             {title}
//                         </Typography>
//                         <Typography variant="body1" paragraph>
//                             {description}
//                         </Typography>
//                     </div>
//                     <div
//                         style={{
//                             ...styles.cardImage,
//                             backgroundImage: `url(${image})`,
//                         }}
//                         className="card-image"
//                     ></div>
//                 </Paper>
//             </Link>
//         </Grid>
//     );
// };

// const ServicesCards = () => {
//     return (
//         <div style={{ backgroundColor: 'brown', padding: '20px' }}>
//             <Grid container spacing={3}>
//                 <ServicesCard
//                     title="HEALTH COACHING"
//                     description="Our initial sessions will be dedicated to assessing your current wellness and creating a personalized plan to fit your unique needs and goals."
//                     link="/nutrition"
//                     image={food}
//                 />
//                 <ServicesCard
//                     title="PRIVATE FITNESS"
//                     description="Unlock your full potential through personalized private fitness sessions, tailored to your goals to optimize both physical and mental well-being."
//                     link="/fitness"
//                     image={portrait}
//                 />
//                 <ServicesCard
//                     title="GROUP CLASSES"
//                     description="Since achieving wellness is more than just exercise and diet, I’ll be guiding you toward other helpful practices such as mindfulness training, aromatherapy, and more."
//                     link="/fitness"
//                     image={group}
//                 />
//             </Grid>
//         </div>
//     );
// };

// // Inline CSS for hover effect
// const styles = document.createElement("style");
// styles.innerHTML = `
//     .card-image:hover .overlay {
//         opacity: 1;
//     }
//     .card-paper:hover .card-content {
//         color: black !important;
//     }
//     .card-paper:hover .card-image {
//         // filter: brightness(150%) !important;
//         background-color: 'rgba(255, 255, 255, 0.7)';

//     }
// `;
// document.head.appendChild(styles);

// export default ServicesCards;
