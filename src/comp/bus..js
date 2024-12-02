import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Frame3 = () => {

    const navigate = useNavigate();

  // Define handleClick functions for each button
  const handleMapClick = () => {
    navigate('/map'); // Navigate to the Map page
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the Map page
  };

  const handleAIChatbotClick = () => {
    navigate('/ai-chatbot'); // Navigate to AI Chatbot page
  };

  const handleBusClick = () => {
    navigate('/bus-schedules'); // Navigate to Bus Schedules page
  };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="default"
                sx={{ borderBottom: 1, borderColor: "divider" }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Tech Nav
                    </Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ width: "300px" }}
                    />
                    <Box sx={{ display: "flex", ml: 4 }}>
                        <Button  onClick={handleHomeClick} color="inherit">Home</Button >
                        <Button  onClick={handleMapClick} color="inherit">Map</Button>
                        <Button  onClick={handleAIChatbotClick} color="inherit">AI Assistant</Button>
                        <Button  onClick={handleBusClick} color="inherit">Bus Schedules</Button>
                        <Button color="inherit"></Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
                    Texas Tech University Bus Schedules
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">Red Raider Route</Typography>
                            <Typography>First Departure: 7:00 AM</Typography>
                            <Typography>Last Departure: 10:00 PM</Typography>
                            <Typography>Frequency: Every 15 minutes</Typography>
                            <Button variant="contained" sx={{ mt: 2 }}>
                                View Full Schedule
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">Double T Route</Typography>
                            <Typography>First Departure: 7:30 AM</Typography>
                            <Typography>Last Departure: 9:30 PM</Typography>
                            <Typography>Frequency: Every 20 minutes</Typography>
                            <Button variant="contained" sx={{ mt: 2 }}>
                                View Full Schedule
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">Night Rider Route</Typography>
                            <Typography>First Departure: 6:00 PM</Typography>
                            <Typography>Last Departure: 2:00 AM</Typography>
                            <Typography>Frequency: Every 30 minutes</Typography>
                            <Button variant="contained" sx={{ mt: 2 }}>
                                View Full Schedule
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
                <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
                    Campus Route Map
                </Typography>
                <Box
                    component="img"
                    sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 1,
                        boxShadow: 3,
                    }}
                    alt="Campus Route Map"
                    src={`${process.env.PUBLIC_URL}/RaiderRideFixedRoutes.jpg`}
                />
            </Container>
        </Box>
    );
};
export default Frame3;