import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Hidden } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import lemons from '../assets/lemons.webp';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
            '& fieldset': {
              borderColor: 'black',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'black',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: 'black',
          },
        },
      },
    },
  },
});

const Contact = () => {
  const [isCheckedHealth, setIsCheckedHealth] = useState(false);
  const [isCheckedFitness, setIsCheckedFitness] = useState(false);
  const [isCheckedGroup, setIsCheckedGroup] = useState(false);

  const [textInput, setTextInput] = useState('');

  const handleCheckboxChangeHealth = (event) => {
    setIsCheckedHealth(event.target.checked);
  };

  const handleCheckboxChangeFitness = (event) => {
    setIsCheckedFitness(event.target.checked);
  };

  const handleCheckboxChangeGroup = (event) => {
    setIsCheckedGroup(event.target.checked);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={{ paddingTop: 150, paddingBottom: 40, paddingLeft: 20, paddingRight: 20 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div style={{ color: 'black', margin: 10, padding: 10 }}>
                <Typography variant="h4" gutterBottom>
                  LET’S WORK TOGETHER
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Interested in working together? Fill out some info and I will be in touch shortly! I can't wait to hear from you!
                </Typography>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="First" fullWidth margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Last" fullWidth margin="normal" variant="outlined" />
                    </Grid>
                  </Grid>
                  <TextField label="Email" fullWidth margin="normal" variant="outlined" />
                  <Typography variant="body1" gutterBottom>
                    What services are you interested in?
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox checked={isCheckedHealth} onChange={handleCheckboxChangeHealth} />}
                    label="1:1 Health Coaching"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={isCheckedFitness} onChange={handleCheckboxChangeFitness} />}
                    label="Private Fitness"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={isCheckedGroup} onChange={handleCheckboxChangeGroup} />}
                    label="Group Fitness"
                  />
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    value={textInput}
                    onChange={handleTextInputChange}
                    variant="outlined"
                  />
                  <Button variant="contained" sx={{ backgroundColor: '#9FA485', color: 'white', '&:hover': { backgroundColor: '#9FA485' } }}>
                    Submit
                  </Button>
                </form>
              </div>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
                <img src={lemons} alt="StockImage" style={{ width: '80%', height: '80vh', filter: 'brightness(80%)', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }} />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Contact;
