import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Projects as ProjectsInfo } from "../data/ProjectInfo";
import { Experience } from "../components/Experience";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.4rem",
  },
};
theme.typography.body1 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        m={0}
        minHeight="100vh"
        sx={{ width: "100vw", heigth: "100vh" }}
        bgcolor="#252934"
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Box className="triangulo fcloud01"></Box>
        <Box className="cloud fcloud03"></Box>
        <Box className="cloud fcloud04"></Box>
        <Grid container textAlign="center" spacing={3}>
          <Grid item xs={12} display="flex" justifyContent="center" gap={1}>
            <Typography variant="h3" fontFamily="Raleway" color="whitesmoke">
              Hello, I'm
            </Typography>
            <Typography variant="h3" fontFamily="Raleway" color="#e31b6d">
              Ignacio Pedrosa.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" fontFamily="Raleway" color="whitesmoke">
              I'm a React Developer.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link href="#section-skills" underline="none">
              <Button variant="outlined" color="info">
                My Tech Stack is Below
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Projects Projects={ProjectsInfo} />
      <Experience />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
};
