import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Express from './Express';
import { Container, Typography } from '@mui/material';

const OurExpress = () => {
    const [expresses, setExpresses] = useState([]);

    useEffect(() => {
        fetch('https://calm-peak-97207.herokuapp.com/express')
            .then(res => res.json())
            .then(data => setExpresses(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1, mb: -5 }}>
            <Typography sx={{ fontWeight: 'medium', p: 4 }} style={{ fontWeight: 400 }} variant="h6" component="h6">
                OUR EXPRESS
            </Typography>
            <Typography sx={{ fontWeight: '550', pb: 4 }} style={{ color: 'rgba(7,7,25, 0.8)' }} variant="h4" component="h5">
                Video Surveillance Systems
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    expresses.map(express => <Express
                        key={express._id}
                        express={express}
                    ></Express>)
                }
            </Grid>
        </Container>
    );
};

export default OurExpress;