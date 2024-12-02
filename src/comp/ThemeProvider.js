import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    createTheme,
  } from "@mui/material";
  import React from "react";
  
  const appTheme = createTheme({
    palette: {
      primary: {
        main: "#f44336", // Example color, replace with actual colors from tailwind.config.js
      },
      secondary: {
        main: "#3f51b5", // Example color, replace with actual colors from tailwind.config.js
      },
      error: {
        main: "#ff1744", // Example color, replace with actual colors from tailwind.config.js
      },
      background: {
        default: "#f1f3f4", // Example color, replace with actual colors from tailwind.config.js
      },
      text: {
        primary: "#212121", // Example color, replace with actual colors from tailwind.config.js
        secondary: "#757575", // Example color, replace with actual colors from tailwind.config.js
      },
    },
    typography: {
      fontFamily: "Inter, Helvetica, Arial, sans-serif",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 700,
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 700,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 700,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 700,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 700,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: "16px",
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontWeight: 700,
          },
          secondary: {
            fontWeight: 400,
          },
        },
      },
    },
  });
  
  export const ThemeProvider = ({ children }) => {
    return (
      <MuiThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    );
  };
  