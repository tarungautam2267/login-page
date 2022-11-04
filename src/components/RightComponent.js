import { useState } from "react";
import { Box, Paper, TextField, InputAdornment, OutlinedInput, IconButton, Typography, InputLabel, FormControl, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RightComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    reEnteredPassword: "",
    showPassword: false,
    loginMode: true,
  });
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleVisibility = () => {
    setValues((prev) => ({ ...prev, showPassword: !values.showPassword }));
  };
  const handleClick = () => {
    setValues((prev) => ({ ...prev, loginMode: !values.loginMode }));
  };
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 8,
      }}
    >
      <Paper
        sx={{
          padding: 5,
          width: "60%",

          borderRadius: "25px",
          transition: "transform, 0.3s ease-in-out",
          "&:hover": { transform: "scale3d(1.01, 1.01, 1)", boxShadow: 12 },
          "&>*": {
            ":hover": {
              transform: "scale3d(1.03, 1.03, 1)",
            },
          },
          backgroundImage: "linear-gradient(90deg, hsla(211, 66%, 87%, 1) 0%, hsla(348, 67%, 88%, 1) 50%, hsla(272, 26%, 72%, 1) 100%)",
        }}
      >
        <Typography sx={{ marginBottom: 3 }} align="center" variant="h4">
          {values.loginMode ? "Login" : "Sign Up"}
        </Typography>
        <TextField sx={{ marginBottom: 3 }} name="name" value={values.name} onChange={handleChange} variant="outlined" label="Full Name" fullWidth />
        <TextField sx={{ marginBottom: 3 }} name="email" value={values.email} onChange={handleChange} variant="outlined" label="Email" fullWidth />
        <FormControl fullWidth>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <OutlinedInput
            sx={{ marginBottom: 3 }}
            id="adornment-password"
            name="password"
            value={values.password}
            onChange={handleChange}
            variant="outlined"
            type={values.showPassword ? "text" : "password"}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleVisibility} edge="end">
                  {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {!values.loginMode && (
          <FormControl fullWidth>
            <InputLabel htmlFor="adornment-password">Re-enter Password</InputLabel>
            <OutlinedInput
              sx={{ marginBottom: 3 }}
              id="adornment-password"
              name="reEnteredPassword"
              value={values.password}
              onChange={handleChange}
              variant="outlined"
              type={values.showPassword ? "text" : "password"}
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleVisibility} edge="end">
                    {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Re-enter Password"
            />
          </FormControl>
        )}
        <Button sx={{ marginBottom: 3 }} variant="contained" fullWidth>
          {values.loginMode ? "Login" : "Sign Up"}
        </Button>
        {values.loginMode ? (
          <Button sx={{ marginBottom: 3 }} onClick={handleClick}>
            New User? Sign-Up
          </Button>
        ) : (
          <Button onClick={handleClick}>Already have an account? Login</Button>
        )}
      </Paper>
    </Box>
  );
};
export default RightComponent;
