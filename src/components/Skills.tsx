import React from "react";
import { Grid, Box } from "@mui/material";
import { Skills as SkillsData } from "../data/SkillsData";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <Box
      id="section-skills"
      m={0}
      minHeight="100vh"
      minWidth="100vw"
      bgcolor="#FFFFFF"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Grid
        my={2}
        container
        spacing={4}
        gap={3}
        display="flex"
        justifyContent="center"
        textAlign="center"
      >
        {SkillsData.map((s, ind) => {
          return (
            <Grid item xs={5} sm={3} key={ind}>
              <SkillCard {...s} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
