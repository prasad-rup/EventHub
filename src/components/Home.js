import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate(); // Import useNavigate hook

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/api/events/all");
        const data = await response.json();
        // console.log(data);
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

  // Function to handle card click and navigate to registration page
  const handleCardClick = (eventId) => {
    // console.log(eventId);
    navigate(`/registration/${eventId}`);
  };

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

      <Grid container spacing={3} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredEvents.map((event) => (
          <Grid item key={event?.eventid} xs={12} sm={6} md={4} lg={3}>
            {event?.eventid !== undefined && (
              <Card
                className="card"
                style={{
                  height: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
                onClick={() => handleCardClick(event?.eventid)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`${event.eventurl}`}
                  style={{ objectFit: 'cover' }}
                />
                <CardContent style={{ flexGrow: 1, padding: '16px' }}>
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
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;