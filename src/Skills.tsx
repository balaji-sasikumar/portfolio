import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { SiTypescript, SiPython, SiDotnet, SiJavascript } from "react-icons/si";
import {
  FaNodeJs,
  FaReact,
  FaAngular,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import { DiBootstrap, DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoWindows, IoLogoApple } from "react-icons/io";
import { SiKubernetes, SiElectron, SiMysql } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { IoLogoIonic } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa6";
const Skills = () => (
  <section
    id="skills"
    style={{ padding: "4rem 0", backgroundColor: "#f5f5f5" }}
  >
    <Container>
      <Typography
        variant="h4"
        sx={{ color: "#3f51b5", textAlign: "center", marginBottom: "2rem" }}
      >
        Skills
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Languages */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3f51b5" }}
            >
              Languages
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <SiTypescript
                size={40}
                style={{ margin: "0.5rem", color: "#3178C6" }}
              />
              <SiPython
                size={40}
                style={{ margin: "0.5rem", color: "#306998" }}
              />
              <SiDotnet
                size={40}
                style={{ margin: "0.5rem", color: "#512BD4" }}
              />
              <SiJavascript
                size={40}
                style={{ margin: "0.5rem", color: "#F7DF1E" }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Frameworks */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3f51b5" }}
            >
              Frameworks
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <FaNodeJs
                size={40}
                style={{ margin: "0.5rem", color: "#68A063" }}
              />
              <FaReact
                size={40}
                style={{ margin: "0.5rem", color: "#61DAFB" }}
              />
              <FaAngular
                size={40}
                style={{ margin: "0.5rem", color: "#DD1B16" }}
              />
              <IoLogoIonic
                size={40}
                style={{ margin: "0.5rem", color: "#3880FF" }}
              />
              <SiElectron
                size={40}
                style={{ margin: "0.5rem", color: "#47848F" }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Web Technologies */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3f51b5" }}
            >
              Web Technologies
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <DiBootstrap
                size={40}
                style={{ margin: "0.5rem", color: "#563D7C" }}
              />
              <RiTailwindCssFill
                size={40}
                style={{ margin: "0.5rem", color: "#06B6D4" }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Database */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3f51b5" }}
            >
              Database
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <DiMongodb
                size={40}
                style={{ margin: "0.5rem", color: "#4DB33D" }}
              />
              <SiMysql
                size={40}
                style={{ margin: "0.5rem", color: "#00758F" }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Tools */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3f51b5" }}
            >
              Tools
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <FaDocker
                size={40}
                style={{ margin: "0.5rem", color: "#2496ED" }}
              />
              <SiKubernetes
                size={40}
                style={{ margin: "0.5rem", color: "#326CE5" }}
              />
              <FaGitAlt
                size={40}
                style={{ margin: "0.5rem", color: "#F05032" }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Platforms */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3f51b5" }}
            >
              Platforms
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <FaLinux
                size={40}
                style={{ margin: "0.5rem", color: "#FCC624" }}
              />
              <IoLogoWindows
                size={40}
                style={{ margin: "0.5rem", color: "#00A4EF" }}
              />
              <IoLogoApple
                size={40}
                style={{ margin: "0.5rem", color: "#A3B0C0" }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Cloud Platforms */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={2}
            sx={{
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3f51b5" }}
            >
              Cloud Platforms
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <VscAzure
                size={40}
                style={{ margin: "0.5rem", color: "#0088D4" }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </section>
);

export default Skills;
