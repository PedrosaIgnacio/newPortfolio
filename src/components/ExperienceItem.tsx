import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { IExperienceInfo } from "../data/ExperienceInfo";
import LabelImportantRoundedIcon from "@mui/icons-material/LabelImportantRounded";

export const ExperienceItem = (experience: IExperienceInfo) => {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={experience.position}
          primaryTypographyProps={{ color: "white" }}
          secondaryTypographyProps={{ color: "primary", variant: "body2" }}
          secondary={experience.dateFrom + " - " + experience.dateTo}
        />
      </ListItem>
      {experience.tasks.map((t) => {
        return (
          <Grid container spacing={2} gap={1} key={t.id}>
            <Grid item>
              <ListItemText
                secondary={<LabelImportantRoundedIcon />}
                secondaryTypographyProps={{
                  color: "#e31b6d",
                  variant: "body2",
                }}
                key={t.id + "icon"}
              />
            </Grid>
            <Grid item color="#FFFFF">
              <ListItemText
                secondary={
                  <Typography color="#FFFFFF" variant="body2">
                    {t.description}
                  </Typography>
                }
                key={t.id}
              />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
