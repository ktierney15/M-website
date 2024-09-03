import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton, Link, Tabs, Tab, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TikTok from '@mui/icons-material/MusicNoteOutlined';
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
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <div >
        <AppBar 
          position="fixed"
          sx={{ 
            backgroundColor: scrolled ? '#9FA485' : 'white',
            transition: 'background-color 0.3s',
            height: '80px',
            boxShadow: 'none',
            padding: '10px',
          }}
        >
          <Toolbar sx={{ minHeight: '60px', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: scrolled ? 'white' : '#9FA485',
                  paddingTop: '5px',
                  marginRight: 2,
                  fontSize: {
                    xs: '0.7rem',
                    sm: '0.9rem',
                    md: '1.5rem',
                  },
                }}
              >
                <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  MICHELLE PARENTE HEALTH
                </RouterLink>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Tabs 
                  value={menuItems.findIndex(item => item.to === location.pathname)} 
                  textColor="inherit" 
                  sx={{
                    '& .MuiTabs-indicator': {
                      backgroundColor: scrolled ? 'white' : '#9FA485',
                    },
                    '& .MuiTab-root': {
                      color: scrolled ? 'white' : '#9FA485',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      padding: '6px 8px', 
                      transition: 'color 0.3s',
                    },
                    '& .Mui-selected': {
                      color: scrolled ? 'white' : '#9FA485',
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
                <Button 
                  variant="contained" 
                  color="secondary" 
                  component={RouterLink} 
                  to="/contact" 
                  sx={{ 
                    backgroundColor: scrolled ? 'white' : '#9FA485', 
                    color: scrolled ? '#9FA485' : 'white',
                    marginLeft: 2,
                    fontSize: '0.9rem', 
                    '&:hover': {
                      backgroundColor: scrolled ? '#F0F0F0' : '#A9A692',
                    },
                  }}
                >
                  Work with Me
                </Button>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', padding: "10px" }}> 
                <Link href="https://www.tiktok.com/@michelle.parente" target="_blank" color="inherit">
                  <IconButton>
                    <TikTok sx={{ color: scrolled ? 'white' : '#9FA485' }} />
                  </IconButton>
                </Link>
                <Link href="https://www.instagram.com/michelleeparente/" target="_blank" color="inherit">
                  <IconButton>
                    <InstagramIcon sx={{ color: scrolled ? 'white' : '#9FA485' }} />
                  </IconButton>
                </Link>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{ color: scrolled ? 'white' : '#9FA485' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>

          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: scrolled ? '#9FA485' : 'white',
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
                  color: scrolled ? 'white' : '#9FA485',
                  '&:hover': {
                    backgroundColor: scrolled ? '#A9A692' : '#F0F0F0',
                  },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
            <MenuItem onClick={handleMenuClose} sx={{ justifyContent: 'center', color: scrolled ? 'white' : '#9FA485' }}>
              <Button 
                variant="contained" 
                color="secondary" 
                component={RouterLink} 
                to="/contact" 
                sx={{ 
                  backgroundColor: scrolled ? 'white' : '#9FA485', 
                  color: scrolled ? '#9FA485' : 'white',
                  '&:hover': {
                    backgroundColor: scrolled ? '#F0F0F0' : '#A9A692',
                  },
                }}
              >
                Work with Me
              </Button>
            </MenuItem>
          </Menu>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

export default Header;
