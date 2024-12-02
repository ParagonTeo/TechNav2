import React, { useState } from "react";
import axios from "axios";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Frame2 = () => {

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

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const newMessage = { user: "You", text: input };
    setMessages([...messages, newMessage]);
  
    try {
      // Define the system message with the TTU context
      const systemMessage = {
        role: "system",
        content:
          "You are an AI assistant specialized in answering questions about Texas Tech University (TTU). Provide information about campus locations, events, dining options, navigation, and general university resources in a helpful and concise manner.",
      };
  
      // Include the system message and all previous conversation messages
      const conversation = [
        systemMessage,
        ...messages.map((msg) => ({
          role: msg.user === "You" ? "user" : "assistant",
          content: msg.text,
        })),
        { role: "user", content: input },
      ];
  
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: conversation,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const botResponse = {
        user: "ChatGPT",
        text: response.data.choices[0].message.content,
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      const errorMessage = {
        user: "ChatGPT",
        text: "Oops! Something went wrong. Please try again later.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  
    setInput("");
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
          AI Chatbot Assistant
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
          <Box sx={{ height: 300, overflowY: "auto", mb: 2 }}>
            {messages.map((msg, index) => (
              <Typography
                key={index}
                variant="body1"
                align={msg.user === "You" ? "right" : "left"}
                sx={{
                  backgroundColor:
                    msg.user === "You" ? "primary.light" : "grey.300",
                  borderRadius: 2,
                  p: 1,
                  m: 1,
                  display: "inline-block",
                }}
              >
                <strong>{msg.user}:</strong> {msg.text}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              placeholder="Ask a question about Texas Tech University..."
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleSend}>
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Paper>
      </Container>
      <Box
        component="footer"
        sx={{ py: 2, mt: "auto", backgroundColor: "grey.200" }}
      >
        <Container>
          <Typography variant="body2" color="textSecondary" align="center">
            
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Frame2;
