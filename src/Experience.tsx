import { Box, Container, Typography, Paper, Grid } from "@mui/material";

const Experience = () => (
  <section
    id="experience"
    style={{ padding: "4rem 0", backgroundColor: "#f5f5f5" }}
  >
    <Container>
      <Typography
        variant="h4"
        sx={{ color: "#3f51b5", textAlign: "center", marginBottom: "2rem" }}
      >
        Work Experience
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
        {/* Peninsular Research Operation */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#3f51b5", marginBottom: "1rem" }}
        >
          Software Developer at Peninsular Research Operation
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#888", marginBottom: "2rem" }}
        >
          August 2021 - Present
        </Typography>

        {/* Additional Projects */}
        <Grid container spacing={3}>
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
                TaskManager
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Developed a robust project and task management system,
                reducing event planning time by 50%, and improving client
                satisfaction by 30%.
                <br />• Secured sensitive data in Azure Blob Storage using AES
                encryption and improved real-time communication using Firebase.
                <br />• Crafted a secure notes app with file upload
                functionality, handling over 1,000 uploads daily, reducing
                manual intervention by 70%.
                <br />• Optimized multi-environment builds using Flavour build,
                improving deployment efficiency by 100%.
                <br />• Integrated Firebase for notifications, increasing
                engagement by 80%, and Twilio for SMS health notifications with
                a 99.9% delivery rate.
                <br />• Designed a share extension for iOS, streamlining content
                sharing.
              </Typography>
            </Paper>
          </Grid>

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
                Survey Form
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Successfully migrated APIs from .NET and SQL to MongoDB and
                Node.js, enhancing query performance and reducing response times
                by 80%.
                <br />• Developed an Azure Function App to automate monthly
                report generation, cutting manual processing time by 99%, and
                constructed a user-friendly interface using Angular and Material
                UI
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* More Projects */}
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
                B-Dash Project
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Formulated a common logging module using Node.js and Azure
                Storage Account, standardizing logging across projects and
                implemented a rule engine using Azure Queue Trigger for
                recalculating hidden component values, improving accuracy by
                100%.
                <br />• Developed connectors for MSSQL and MySQL, streamlining
                data integration, and containerized UI and API using Docker with
                Helm charts to deploy on Kubernetes, ensuring scalable and
                efficient deployments.
              </Typography>
            </Paper>
          </Grid>
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
                Securra Project
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Developed a calling module using FCM and constructed a robust
                backend system using Node.js and MongoDB, enhancing real-time
                communication capabilities and improving system scalability by
                50%.
                <br />• Deployed a robust notification system using Firebase
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
                File Explorer
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Developed a robust desktop File Explorer application using
                Electron, React, and Material UI, delivering a modern and
                responsive user interface and enhancing user satisfaction by
                40%.
                <br />• Integrated secure file storage by encrypting files and
                storing them in Azure File Share, ensuring data security and
                integrity, with a 99% reduction in unauthorized access
                incidents.
                <br />• Leveraged Vite for optimized performance, achieving fast
                build times and superior application responsiveness, reducing
                load times by 30%
              </Typography>
            </Paper>
          </Grid>
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
                Telecommunication Project
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Engineered and containerized a subscriber management system
                for conditional access system, including Azure Function Apps
                with HTTP and Queue triggers to interact with on-prem Telnet
                servers, improving system integration and message reliability,
                and deployed it in Kubernetes for scalable and efficient
                operations.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <br />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#3f51b5", marginBottom: "1rem" }}
        >
          Junior Software Intern at OneMind India
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#888", marginBottom: "2rem" }}
        >
          February 2021 - April 2021
        </Typography>

        {/* Additional Projects */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
                E-commerce Website
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                • Developed responsive web applications using Angular, creating
                engaging user interfaces that enhance the overall user
                experience.
                <br />• Engineered scalable and high-performance backend systems
                using .NET Core 3, incorporating comprehensive unit tests to
                ensure reliable code and minimize issues.
                <br />• Automated deployment processes with Azure DevOps,
                streamlining development and deployment workflows, saving time
                and reducing errors.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </section>
);

export default Experience;
