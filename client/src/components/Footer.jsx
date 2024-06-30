import React, { useState } from 'react';
import { Typography, Toolbar, AppBar, Container, TextField, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'Raleway',
    ].join(','),
  }
});

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    setSubscribed(true);
  };

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="relative" color="primary" style={{ top: 'auto', bottom: 0, backgroundColor: '#ffe4ec' }}>
      <Container style={{ textAlign: 'center', backgroundColor: '#ffe4ec', padding: '20px', borderRadius: '8px' }}>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Container>
            <Typography variant="h5" style={{ color: '#000000', marginBottom: '10px' }}>JOIN MY NEWSLETTER</Typography>
            {subscribed ? (
              <Typography variant="body1" style={{ color: '#000000' }}>Thank you for joining!</Typography>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    label="Enter your email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                    InputLabelProps={{ style: { color: '#000000' } }}
                    InputProps={{ style: { color: '#000000', height: '40px' } }}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '4px',
                      height: '40px',
                    }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    style={{
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      height: '40px',
                      marginLeft: '10px',
                      borderRadius: '4px',
                      minWidth: '80px',
                    }}
                  >
                    Join
                  </Button>
                </Box>
              </form>
            )}
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>

  );
};

export default Footer;
