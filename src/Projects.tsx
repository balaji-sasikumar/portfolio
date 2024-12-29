import { Box, Container, Typography, Paper, Grid } from "@mui/material";

const Projects = () => (
  <section
    id="projects"
    style={{ padding: "4rem 0", backgroundColor: "#f5f5f5" }}
  >
    <Container>
      <Typography
        variant="h4"
        sx={{ color: "#3f51b5", textAlign: "center", marginBottom: "2rem" }}
      >
        Personal Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 3,
          padding: "2rem",
        }}
      >
        {/* Covid Tracker */}
        <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={2}
              sx={{ padding: "1rem", borderRadius: "8px", height: "100%" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  marginBottom: "1rem",
                }}
              >
                Covid Tracker
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Technologies: React, Material UI
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Developed a Covid Tracker dashboard utilizing the disease.sh
                API to provide up-to-date Covid-19 data.
                <br />• The dashboard features real-time statistics on
                infections, recoveries, and fatalities, along with interactive
                infographics.
                <br />• Users can easily filter the data by country for more
                focused analysis.
              </Typography>
            </Paper>
          </Grid>

          {/* Azure Relay Listener */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={2}
              sx={{ padding: "1rem", borderRadius: "8px", height: "100%" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  marginBottom: "1rem",
                }}
              >
                Azure Relay Listener
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Technologies: Node.js
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Configured and deployed an Azure Relay Listener for secure
                communication between on-premises and cloud services.
                <br />• Ensured seamless and secure data transfer with minimal
                latency.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={2}
              sx={{ padding: "1rem", borderRadius: "8px", height: "100%" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  marginBottom: "1rem",
                }}
              >
                Amazon Clone
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Technologies: React, Material UI, Firebase, Context API
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Developed an Amazon Clone Single Page Application that enables
                users to browse products, add items to their cart, and proceed
                to checkout.
                <br />• Implemented Firebase authentication for user login and
                Context API for state management.
              </Typography>
            </Paper>
          </Grid>

          {/* Azure Relay Listener */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={2}
              sx={{ padding: "1rem", borderRadius: "8px", height: "100%" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  marginBottom: "1rem",
                }}
              >
                Azure Relay API
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Technologies: Node.js
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Developed a Node.js API to interact with the Azure Relay
                Listener, handling client requests via RESTful endpoints.
                <br />• Ensured efficient handling of requests, improving
                integration between on-premises and cloud systems.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </section>
);

export default Projects;
