import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  TextField,
  InputAdornment
} from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';

function Frame1() {
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
        <Box sx={{ my: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <NewReleasesIcon color="error" sx={{ mr: 1 }} />
            <Typography variant="body1" color="textPrimary">
              Enhance your college experience with essential campus information
              and support
            </Typography>
          </Box>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Tech Nav - Your Campus Navigator
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Navigate Texas Tech University with ease using our user-friendly app
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="240"
                  image={`${process.env.PUBLIC_URL}/EPEPano201010x3.jpg`}
                  alt="Campus Image"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Quick Access
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <Typography variant="h5" component="div">
                  Map
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Navigate the campus easily with our interactive map feature.
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleMapClick}
                >
                  View Map
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <Typography variant="h5" component="div">
                  AI Chatbot
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Ask the Chatbot powered by AI to answer questions!
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleAIChatbotClick}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <ListItemIcon>
                  <DirectionsBusIcon />
                </ListItemIcon>
                <Typography variant="h5" component="div">
                  Bus Schedules
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Track real-time bus locations, view schedules, and receive
                  alerts for delays.
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleBusClick}
                >
                  Track Bus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Frame1;
