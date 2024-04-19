import React from "react"
import { Paper, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Services = () =>{
    return (
        <div style={{ padding: 20 }}>
            {/* image goes up here */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        1:1 HEALTH COACHING
                    </Typography>
                    <Typography variant="body1" paragraph style={{ textAlign: 'center' }} gutterBottom>
                        Our initial sessions will be dedicated to assessing your current wellness and creating a personalized plan to fit your unique needs and goals.
                    </Typography>
                    <Button component={Link} to="/contact" variant="contained" color="primary">
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
                        COREPOWER YOGA                    
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
            {/* image goes right here */}
            <div style={{ marginTop: 20 }}>
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