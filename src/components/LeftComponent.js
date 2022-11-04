import { Box } from "@mui/material";

const LeftComponent = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: { xs: "none", sm: "none", md: "block" },
        backgroundImage: "url(https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGluayUyMHNreXxlbnwwfHwwfHw%3D&w=1000&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Box>
  );
};

export default LeftComponent;
