import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { IProject } from "../data/ProjectInfo";
import { ProjectCard } from "./ProjectCard";
interface IProjectProps {
  Projects: IProject[];
}
export const Projects = ({ Projects }: IProjectProps) => {
  return (
    <Box
      id="#section-projects"
      m={0}
      minHeight="100vh"
      minWidth="100vw"
      display="flex"
      bgcolor="#FFFFFF"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography
        my={6}
        py={6}
        variant="h3"
        textAlign={"center"}
        fontFamily="Raleway"
        color="#e31b6d"
        data-aos="fade-right"
      >
        Projects
      </Typography>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        flexWrap="wrap"
        gap={2}
        spacing={2}
      >
        {Projects.map((pr, ind) => {
          return (
            <Grid
              display="flex"
              justifyContent="center"
              item
              xs={12}
              md={3}
              key={ind}
            >
              <ProjectCard
                title={pr.title}
                description={pr.description}
                deploy={pr.deploy}
                repository={pr.repository}
                img={pr.img}
                id={pr.id}
                key={ind}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
