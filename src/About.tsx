import { Box, Typography, Container } from "@mui/material";

const About = () => (
  <section id="about" style={{ padding: "4rem 0", backgroundColor: "#f5f5f5" }}>
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 3,
          padding: "2rem",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#3f51b5" }}>
          About Me
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            color: "#333",
            maxWidth: "800px",
            marginBottom: "1rem",
          }}
        >
          I am a software developer with experience in creating scalable and
          efficient applications using technologies like TypeScript, Node.js,
          React, and Azure. I am passionate about building high-quality,
          user-friendly solutions and continuously improving my skill set.
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#666", fontStyle: "italic", maxWidth: "800px" }}
        >
          "I believe in the power of clean, maintainable code and always strive
          to create solutions that stand the test of time."
        </Typography>
      </Box>
    </Container>
  </section>
);

export default About;
