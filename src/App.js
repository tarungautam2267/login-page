import React from "react";
import { Box, Grid } from "@mui/material";
import RightComponent from "./components/RightComponent";
import LeftComponent from "./components/LeftComponent";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Lexend Deca",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <Grid container>
          <Grid item md={6} lg={6}>
            <LeftComponent />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <RightComponent />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
