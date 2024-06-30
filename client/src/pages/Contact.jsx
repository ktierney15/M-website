import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

import myImage from '../assets/portrait1.jpeg';


const Contact = () =>{
    const [isCheckedHealth, setIsCheckedHealth] = useState(false);
    const [isCheckedFitness, setIsCheckedFitness] = useState(false);
    const [textInput, setTextInput] = useState('');

    const handleCheckboxChangeHealth = (event) => {
        setIsCheckedHealth(event.target.checked);
      };
    
    const handleCheckboxChangeFitness = (event) => {
    setIsCheckedFitness(event.target.checked);
    };

    const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
    };

    return (
        <div>
            <div style={{ paddingTop: 150 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    <div style={{ color: "black" }}>
                        <Typography variant="h4" gutterBottom>
                            LET’S WORK TOGETHER
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Interested in working together? Fill out some info and I will be in touch shortly! I can't wait to hear from you!
                        </Typography>
                        <form>
                        <TextField label="First" fullWidth margin="normal" />
                        <TextField label="Last" fullWidth margin="normal" />
                        <TextField label="Email" fullWidth margin="normal" />
                        <Typography variant="body1" gutterBottom>
                            What services are you interested in?
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox checked={isCheckedHealth} onChange={handleCheckboxChangeHealth} />}
                            label="1:1 Health Coaching"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={isCheckedFitness} onChange={handleCheckboxChangeFitness} />}
                            label="Private Fitness Sessions"
                        />
                        <TextField
                            label="Message"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            value={textInput}
                            onChange={handleTextInputChange}
                        />
                        <Button variant="contained" color="primary">Submit</Button>
                        </form>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={myImage} alt="StockImage" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Contact