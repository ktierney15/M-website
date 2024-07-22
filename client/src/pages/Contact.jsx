import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Hidden } from '@mui/material';

import myImage from '../assets/portrait1.jpeg';
import lemons from '../assets/lemons.webp';


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
            <div style={{ paddingTop: 150, paddingBottom: 40 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    <div style={{ color: "black", margin: 10, padding: 10 }}>
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
                        <Button variant="contained" sx={{ backgroundColor: '#9FA485', color: 'white', '&:hover': { backgroundColor: '#9FA485' } }}>Submit</Button>
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
    )
}

export default Contact



// npm install emailjs-com
// import React, { useState } from 'react';
// import { Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Hidden } from '@mui/material';
// import emailjs from 'emailjs-com';
// import myImage from '../assets/portrait1.jpeg';

// const Contact = () => {
//     const [isCheckedHealth, setIsCheckedHealth] = useState(false);
//     const [isCheckedFitness, setIsCheckedFitness] = useState(false);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         message: '',
//     });

//     const handleCheckboxChangeHealth = (event) => {
//         setIsCheckedHealth(event.target.checked);
//     };

//     const handleCheckboxChangeFitness = (event) => {
//         setIsCheckedFitness(event.target.checked);
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const templateParams = {
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             email: formData.email,
//             message: formData.message,
//             services: `${isCheckedHealth ? '1:1 Health Coaching, ' : ''}${isCheckedFitness ? 'Private Fitness Sessions' : ''}`,
//         };

//         emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
//             .then((response) => {
//                 console.log('SUCCESS!', response.status, response.text);
//                 alert('Message sent successfully!');
//             }, (error) => {
//                 console.log('FAILED...', error);
//                 alert('Failed to send message. Please try again.');
//             });

//         // Reset form fields
//         setFormData({
//             firstName: '',
//             lastName: '',
//             email: '',
//             message: '',
//         });
//         setIsCheckedHealth(false);
//         setIsCheckedFitness(false);
//     };

//     return (
//         <div>
//             <div style={{ paddingTop: 150 }}>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} md={6}>
//                         <div style={{ color: "black", margin: 10 }}>
//                             <Typography variant="h4" gutterBottom>
//                                 LET’S WORK TOGETHER
//                             </Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 Interested in working together? Fill out some info and I will be in touch shortly! I can't wait to hear from you!
//                             </Typography>
//                             <form onSubmit={handleSubmit}>
//                                 <TextField
//                                     label="First"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleInputChange}
//                                     fullWidth
//                                     margin="normal"
//                                 />
//                                 <TextField
//                                     label="Last"
//                                     name="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleInputChange}
//                                     fullWidth
//                                     margin="normal"
//                                 />
//                                 <TextField
//                                     label="Email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     fullWidth
//                                     margin="normal"
//                                 />
//                                 <Typography variant="body1" gutterBottom>
//                                     What services are you interested in?
//                                 </Typography>
//                                 <FormControlLabel
//                                     control={<Checkbox checked={isCheckedHealth} onChange={handleCheckboxChangeHealth} />}
//                                     label="1:1 Health Coaching"
//                                 />
//                                 <FormControlLabel
//                                     control={<Checkbox checked={isCheckedFitness} onChange={handleCheckboxChangeFitness} />}
//                                     label="Private Fitness Sessions"
//                                 />
//                                 <TextField
//                                     label="Message"
//                                     name="message"
//                                     multiline
//                                     rows={4}
//                                     value={formData.message}
//                                     onChange={handleInputChange}
//                                     fullWidth
//                                     margin="normal"
//                                 />
//                                 <Button type="submit" variant="contained" color="primary">
//                                     Submit
//                                 </Button>
//                             </form>
//                         </div>
//                     </Grid>
//                     <Hidden smDown>
//                         <Grid item xs={12} md={6}>
//                             <img src={myImage} alt="StockImage" style={{ width: '100%', height: '100vh' }} />
//                         </Grid>
//                     </Hidden>
//                 </Grid>
//             </div>
//         </div>
//     );
// };

// export default Contact;
