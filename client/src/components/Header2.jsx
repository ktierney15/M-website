import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton, Link, Tabs, Tab, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdjustIcon from '@mui/icons-material/Adjust';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Tenor Sans",
      "Tenor Sans",
    ].join(','),
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Nutrition', to: '/nutrition' },
    { label: 'Fitness', to: '/fitness' },
    { label: 'Contact', to: '/contact' },
    { label: 'About Me', to: '/about' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: '#9FA485', 
            transition: 'background-color 0.3s',
            height: '140px',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ minHeight: '60px', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontWeight: 'bold', 
                color: 'white',
                textAlign: 'center',
                paddingTop: '10px',
              }}
            >
              <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                MICHELLE PARENTE HEALTH
              </RouterLink>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
              <Box sx={{ display: { xs: 'flex', md: 'none' }, paddingRight: '10px' }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{ color: 'white' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Tabs 
                  value={false} 
                  textColor="inherit" 
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: 'white',
                    },
                    '& .MuiTab-root': {
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      padding: '8px 12px',
                      transition: 'color 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    },
                  }}
                >
                  {menuItems.map((item, index) => (
                    <Tab
                      key={index}
                      component={RouterLink}
                      to={item.to}
                      label={item.label}
                    />
                  ))}
                </Tabs>
              </Box>
              <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                <Link href="https://www.corepoweryoga.com/content/teachers/7f5b4bc1-7a2f-4731-bab6-518ff012b399" target="_blank" color="inherit">
                  <IconButton>
                    <AdjustIcon sx={{ color: 'white' }} />
                  </IconButton>
                </Link>
                <Link href="https://www.instagram.com/michelleeparente/" target="_blank" color="inherit">
                  <IconButton>
                    <InstagramIcon sx={{ color: 'white' }} />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#9FA485',
            },
          }}
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={handleMenuClose}
              component={RouterLink}
              to={item.to}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: '#A9A692',
                },
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </ThemeProvider>
  );
}

export default Header;
