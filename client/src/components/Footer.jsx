import React from 'react';
import { IconButton, Link, Typography, Toolbar, AppBar, Container } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import AdjustIcon from '@mui/icons-material/Adjust';


const Footer = () => {
    return (
      <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0, backgroundColor: '#757575' }}>
        <Container>
          <Toolbar>
            <Typography variant="body2" color="inherit" style={{ marginRight: 'auto' }}>
            Sign up for My newsletter
            </Typography>
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