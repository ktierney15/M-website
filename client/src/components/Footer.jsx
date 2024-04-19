import { React, useState } from 'react';
import { IconButton, Link, Typography, Toolbar, AppBar, Container, TextField, Button } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import AdjustIcon from '@mui/icons-material/Adjust';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement logic to add the email to your mailing list
    // For simplicity, we'll just log the email to the console
    console.log('Email submitted:', email);
    // Clear the input field
    setEmail('');
    // Set subscribed to true to show a confirmation message
    setSubscribed(true);
  };

    return (
      <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0, backgroundColor: '#757575' }}>
        <Container>
          <Toolbar>
            <Container color="inherit" style={{ marginRight: 'auto' }}>
            <Typography variant="h5">JOIN MY NEWSLETTER</Typography>
              {subscribed ? (
                <Typography variant="body1">Thank you for joining!</Typography>
                  ) : (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Enter your email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                  <Button variant="contained" color="primary" type="submit">
                    Join
                  </Button>
                </form>
              )}
            </Container>
            {/* <Typography variant="body2" color="inherit" style={{ marginRight: 'auto' }}>
            Sign up for My newsletter
            </Typography> */}
            <Link href="https://www.corepoweryoga.com/content/teachers/7f5b4bc1-7a2f-4731-bab6-518ff012b399" target="_blank" color="inherit">
              <IconButton>
                <AdjustIcon />
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/michelleeparente/" target="_blank" color="inherit">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  
  export default Footer;