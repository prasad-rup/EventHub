// HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './Home.css';

const HomePage = () => {
  const [searchCity, setSearchCity] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/api/events/all");
        const data = await response.json();
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter events based on the entered city
  const filteredEvents = Array.isArray(events)
    ? searchCity
      ? events.filter((event) => event.city.toLowerCase().includes(searchCity.toLowerCase()))
      : events
    : [];

  return (
    <Container>
      <TextField
        label="Filter by City"
        variant="outlined"
        fullWidth
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        style={{ marginBottom: '16px', marginTop: '16px' }}
      />

      <Grid container spacing={3}>
        {filteredEvents.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s' }}>
              <CardMedia
                component="img"
                height="140"
                image={`${event.eventurl}`}
                style={{ objectFit: 'cover' }} // Maintain aspect ratio
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                  {event?.eventname}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {event?.city}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {event?.eventdescription}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {event?.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {new Date(event?.eventdate).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
