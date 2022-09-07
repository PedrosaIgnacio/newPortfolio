import React from "react";
import { ISkill } from "../data/SkillsData";
import { Typography, Box } from "@mui/material";
export const SkillCard = (s: ISkill) => {
  return (
    <Box>
      {s.icon}
      <Typography my={2} variant="h5" fontFamily="Raleway" data-aos="fade-up">
        {s.title}
      </Typography>
    </Box>
  );
};
