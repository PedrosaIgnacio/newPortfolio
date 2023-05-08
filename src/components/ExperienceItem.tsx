import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { IExperienceInfo } from "../data/ExperienceInfo";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

interface ExperienceItemProps{
  experience: IExperienceInfo
}

export const ExperienceItem = ({experience}: ExperienceItemProps) => {
  return (
    <>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="inherit" sx={{boxShadow:"none", border:"none", width:"56px", height:"56px"}}>
            <img src={experience.img} alt=".." style={{ objectFit:"contain", width:"100%", height:"100%" }}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h3" fontFamily="Raleway" sx={{display:"block", color:"white",letterSpacing:"0.1rem", fontSize:"24px !important"}}>
            {experience.company}
          </Typography>
          <Typography variant="h3" fontFamily="Raleway" color="#5f7984" sx={{display:"block",letterSpacing:"0.1rem", fontSize:"16px !important"}}>
            {experience.position}
          </Typography>
          <List>
            {
              experience.tasks.map((task) => {
                return(
                  <ListItem sx={{ p:0 }} key={task.id}>
                    <ListItemText secondaryTypographyProps={{ color:"#b1bbc0" }} secondary={task.description} />
                  </ListItem>
                )
              })
            }
          </List>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};
